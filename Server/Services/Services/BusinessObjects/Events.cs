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
            DataSet events = new DAL().GetDataSet("	SELECT w.Id, 'Workshop' EventType, l.Name, l.Address, l.GeoCoordinates, wd.Day FROM Workshop w JOIN Location l ON w.LocationId = l.Id JOIN WorkshopDates wd ON wd.WorkshopId = w.Id WHERE wd.Id IN(SELECT Id FROM(SELECT Id, MIN(Day) Day FROM WorkshopDates GROUP BY Id)a WHERE Day > CURDATE()) UNION ALL SELECT n.Id, 'Nirvana' EventType, 'Unknown' Name, '' Address, '' GeoCoordinates, nd.Day FROM Nirvana n JOIN NirvanaDates nd ON nd.NirvanaId = n.Id WHERE nd.Id IN(SELECT Id FROM(SELECT Id, MIN(Day) Day FROM NirvanaDates GROUP BY Id)a WHERE Day > CURDATE()) ORDER BY Day ASC;", null);

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
                                    item.dates + ", " + DateTime.Parse(dates["Day"].ToString()).ToString("dd MMM yyyy");
                }
                eventsData.Add(item);
            }
            return eventsData;
        }
    }
}