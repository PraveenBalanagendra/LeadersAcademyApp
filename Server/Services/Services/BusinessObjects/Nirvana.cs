using System.Data;
using Services.DataAccess;
using System.Collections.Generic;
using System;
using System.Web;

namespace Services.BusinessObjects
{
    public class Nirvana
    {
        public int id { get; set; }
        public string dates { get; set; }

        public string dateTimes { get; set; }

        public void AddNirvana()
        {
            Dictionary<string, string> parameters = new Dictionary<string, string>();

            DataSet nirvana = new DAL().GetDataSet("CreateNirvana", parameters, "StoredProcedure");
            string nirvanaId = nirvana.Tables[0].Rows[0][0].ToString();

            foreach (string datetime in this.dateTimes.Split('$'))
            {
                parameters = new Dictionary<string, string>();
                parameters.Add("NirvanaId", nirvanaId);
                parameters.Add("NirvanaDay", datetime.Split('^')[0]);
                parameters.Add("StartTime", datetime.Split('^')[1]);
                parameters.Add("EndTime", datetime.Split('^')[2]);

                new DAL().PutData("CreateNirvanaDates", parameters, "StoredProcedure");
            }
        }

        public static List<Nirvana> GetNirvanas()
        {
            DataSet nirvanas = new DAL().GetDataSet("GetNirvana", null, "StoredProcedure");

            List<Nirvana> nirvanaData = new List<Nirvana>();

            DataTable uniqueIds = nirvanas.Tables[0].DefaultView.ToTable(true, "Id");

            foreach(DataRow dr in uniqueIds.Rows)
            {
                Nirvana item = new Nirvana() { id = int.Parse(dr["Id"].ToString())};
                foreach (DataRow dates in nirvanas.Tables[0].Select("Id = " + item.id))
                {
                    item.dateTimes = (item.dateTimes == "") ?
                                    DateTime.Parse(dates["Day"].ToString()).ToString("dd MMM yyyy") :
                                    DateTime.Parse(dates["Day"].ToString()).ToString("dd MMM yyyy") + ", " + item.dateTimes;
                }
                nirvanaData.Add(item);
            }
            return nirvanaData;
        }
    }
}