using System.Data;
using Services.DataAccess;
using System.Collections.Generic;

namespace Services.BusinessObjects
{
    public class Team
    {
        public string id { get; set; }
        public string name { get; set; }
        public string contact { get; set; }

        public static List<Team> GetTeams()
        {
            DataSet ds = new DAL().GetDataSet("SELECT * FROM Team", null);

            List<Team> teamArray = new List<Team> ();
            if (ds.Tables.Count > 0 && ds.Tables[0].Rows.Count > 0)
            {
                foreach(DataRow row in ds.Tables[0].Rows)
                {
                    Team team = new Team();
                    team.id = row["Id"].ToString();
                    team.name = row["Name"].ToString();
                    team.contact = row["Contact"].ToString();
                    teamArray.Add(team);
                }
            }

            return teamArray;
        }

        public void AddTeam()
        {
            Dictionary<string, string> parameters = new Dictionary<string, string>();
            parameters.Add("@Name", this.name);
            parameters.Add("@Contact", this.contact);

            new DAL().PutData("INSERT INTO Team(Name, Contact) VALUES(@Name, @Contact)", parameters);
        }
    }
}