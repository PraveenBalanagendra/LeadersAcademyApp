using MySql.Data.MySqlClient;
using System.Data;
using System.Collections.Generic;

namespace Services.BusinessObjects
{
    public class Location
    {
        public string name { get; set; }
        public string address { get; set; }
        public string contact { get; set; }

        public static List<Location> GetLocations()
        {
            MySqlConnection connection = new MySqlConnection();
            connection.ConnectionString = "Server=leadersdb.ctg6ujawfiqo.us-west-2.rds.amazonaws.com;Port=3306;Database=leadersacademy;Uid=awsdbpb;Pwd=Welcome123; ";

            MySqlCommand command = new MySqlCommand("SELECT * FROM Location", connection);

            MySqlDataAdapter adapter = new MySqlDataAdapter(command);
            DataSet ds = new DataSet();
            adapter.Fill(ds);

            List<Location> locationArray = new List<Location>();
            if (ds.Tables.Count > 0 && ds.Tables[0].Rows.Count > 0)
            {
                foreach(DataRow row in ds.Tables[0].Rows)
                {
                    Location loc = new Location();
                    loc.name = row["Name"].ToString();
                    loc.address = row["Address"].ToString();
                    loc.contact = row["Contact"].ToString();
                    locationArray.Add(loc);
                }
            }

            return locationArray;
        }
    }
}