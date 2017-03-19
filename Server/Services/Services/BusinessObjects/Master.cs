using System.Data;
using Services.DataAccess;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Services.BusinessObjects
{
    public class Master
    {
        public List<Workshop> workshop { get; set; }
        public List<Role> role { get; set; }
        public List<JoiningType> joiningType { get; set; }
        public List<Team> team { get; set; }

        public static Master GetMasterData()
        {
            DataSet ds = new DAL().GetDataSet("SELECT * FROM Role; SELECT * FROM JoiningType;", null);
            Master master = new Master();

            master.workshop = Workshop.GetWorkshops();
            master.team = Team.GetTeams();

            master.role = new List<Role>();
            master.joiningType = new List<JoiningType>();

            foreach (DataRow dr in ds.Tables[0].Rows)
                master.role.Add(new Role() { id = int.Parse(dr["Id"].ToString()), name = dr["Name"].ToString() });

            foreach (DataRow dr in ds.Tables[1].Rows)
                master.joiningType.Add(new JoiningType() { id = int.Parse(dr["Id"].ToString()), name = dr["Name"].ToString() });

            return master;
        }
    }

    public class Role
    {
        public int id { get; set; }
        public string name { get; set; }
    }

    public class JoiningType
    {
        public int id { get; set; }
        public string name { get; set; }
    }
}