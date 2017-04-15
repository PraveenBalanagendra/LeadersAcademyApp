using System.Data;
using Services.DataAccess;
using System;
using System.Collections.Generic;

namespace Services.BusinessObjects
{
    public class Events
    {
        public string eventType { get; set; }
        public string dates { get; set; }
        public string locationName { get; set; }
        public string locationAddress { get; set; }
        public string locationCoordinates { get; set; }

        public static List<Events> GetEvents()
        {
            DataSet events = new DAL().GetDataSet("GetEvents", null, "StoredProcedure");

            List<Events> eventsData = new List<Events>();

            DataTable uniqueIds = events.Tables[0].DefaultView.ToTable(true, new string[] {"Id", "EventType", "Name", "Address", "GeoCoordinates" });

            foreach (DataRow dr in uniqueIds.Rows)
            {
                Events item = new Events() { eventType = dr["EventType"].ToString(), locationAddress = dr["Address"].ToString(),
                                             locationCoordinates = dr["GeoCoordinates"].ToString(), locationName = dr["Name"].ToString(), dates = ""};
                foreach (DataRow dates in events.Tables[0].Select("Id = " + dr["Id"].ToString()))
                {
                    item.dates = (item.dates == "") ?
                                    DateTime.Parse(dates["Day"].ToString()).ToString("dd MMM yyyy") :
                                    DateTime.Parse(dates["Day"].ToString()).ToString("dd MMM yyyy") + ", " + item.dates;
                }
                eventsData.Add(item);
            }
            return eventsData;
        }
    }
}