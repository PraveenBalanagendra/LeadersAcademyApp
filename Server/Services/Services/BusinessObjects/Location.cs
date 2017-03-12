using System.Data;
using Services.DataAccess;
using System.Collections.Generic;

namespace Services.BusinessObjects
{
    public class Location
    {
        public string id { get; set; }
        public string name { get; set; }
        public string address { get; set; }
        public string contact { get; set; }
        public string geocoordinates { get; set; }

        public static List<Location> GetLocations()
        {
            DataSet ds = new DAL().GetDataSet("SELECT * FROM Location", null);

            List<Location> locationArray = new List<Location>();
            if (ds.Tables.Count > 0 && ds.Tables[0].Rows.Count > 0)
            {
                foreach(DataRow row in ds.Tables[0].Rows)
                {
                    Location loc = new Location();
                    loc.id = row["Id"].ToString();
                    loc.name = row["Name"].ToString();
                    loc.address = row["Address"].ToString();
                    loc.contact = row["Contact"].ToString();
                    loc.geocoordinates = row["GeoCoordinates"].ToString();
                    locationArray.Add(loc);
                }
            }

            return locationArray;
        }

        public void AddLocation()
        {
            Dictionary<string, string> parameters = new Dictionary<string, string>();
            parameters.Add("@Name", this.name);
            parameters.Add("@Address", this.address);
            parameters.Add("@Contact", this.contact);
            parameters.Add("@GeoCoordinates", this.geocoordinates);

            new DAL().PutData("INSERT INTO Location(Name, Address, Contact, GeoCoordinates) VALUES(@Name, @Address, @Contact, @GeoCoordinates)", parameters);
        }
    }
}