using System.Data;
using Services.DataAccess;
using System;
using System.Collections.Generic;

namespace Services.BusinessObjects
{
    public class Notification
    {
        public string id { get; set; }
        public string title { get; set; }
        public string message { get; set; }

        public static List<Notification> GetNotifications(string userId, string notificationId)
        {
            Dictionary<string, string> parameters = new Dictionary<string, string>();

            parameters.Add("UserId", userId);
            parameters.Add("NotificationId", notificationId);
            DataSet notification = new DAL().GetDataSet("GetNotifications", parameters, "StoredProcedure");

            List<Notification> notificationData = new List<Notification>();

            foreach (DataRow dr in notification.Tables[0].Rows)
            {
                Notification item = new Notification() { id = dr["Id"].ToString(), title = dr["Title"].ToString(), message = dr["Message"].ToString()};
                notificationData.Add(item);
            }
            return notificationData;
        }
    }
}