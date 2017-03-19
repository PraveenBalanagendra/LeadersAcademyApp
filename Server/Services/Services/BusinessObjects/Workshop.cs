using System.Data;
using Services.DataAccess;
using System.Collections.Generic;
using System;
using System.Web;

namespace Services.BusinessObjects
{
    public class Workshop
    {
        public int id { get; set; }
        public string locationName { get; set; }
        public string dates { get; set; }

        public string locationId { get; set; }
        public string dateTimes { get; set; }

        public void AddWorkshop()
        {
            Dictionary<string, string> parameters = new Dictionary<string, string>();
            parameters.Add("LocationId", this.locationId);

            DataSet workshop = new DAL().GetDataSet("CreateWorkshop", parameters, "StoredProcedure");
            string workshopId = workshop.Tables[0].Rows[0][0].ToString();

            foreach (string datetime in this.dateTimes.Split('$'))
            {
                parameters = new Dictionary<string, string>();
                parameters.Add("WorkshopId", workshopId);
                parameters.Add("WorkshopDay", datetime.Split('^')[0]);
                parameters.Add("StartTime", datetime.Split('^')[1]);
                parameters.Add("EndTime", datetime.Split('^')[2]);

                new DAL().PutData("CreateWorkShopDates", parameters, "StoredProcedure");
            }
        }

        public static List<Workshop> GetWorkshops()
        {
            DataSet workshops = new DAL().GetDataSet("GetWorkshop", null, "StoredProcedure");

            List<Workshop> workshopData = new List<Workshop>();

            DataTable uniqueIds = workshops.Tables[0].DefaultView.ToTable(true, "Id");

            foreach(DataRow dr in uniqueIds.Rows)
            {
                Workshop item = new Workshop() { id = int.Parse(dr["id"].ToString())};
                foreach (DataRow dates in workshops.Tables[0].Select("Id = " + item.id))
                {
                    item.locationName = dates["Name"].ToString();
                    item.dateTimes = (item.dateTimes == "") ?
                                    DateTime.Parse(dates["Day"].ToString()).ToString("dd MMM yyyy") :
                                    DateTime.Parse(dates["Day"].ToString()).ToString("dd MMM yyyy") + ", " + item.dateTimes;
                }
                workshopData.Add(item);
            }
            return workshopData;
        }
    }
}