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

        public static void SaveNotification(string title, string message, string type, string to)
        {
            Dictionary<string, string> parameters = new Dictionary<string, string>();
            parameters.Add("@Title", title);
            parameters.Add("@Message", message);
            parameters.Add("@Type", type);
            parameters.Add("@MessageTo", to);
            parameters.Add("@StartDate", DateTime.Now.ToString("dd-M-yyyy"));
            parameters.Add("@EndDate", DateTime.Now.AddDays(1).ToString("dd-M-yyyy"));

            new DAL().PutData("INSERT INTO Notification(Title, Message, Type, MessageTo, StartDate, EndDate, CreatedDate) VALUES(@Title, @Message, @Type, @MessageTo, STR_TO_DATE(@StartDate, '%d-%m-%Y'), STR_TO_DATE(@EndDate, '%d-%m-%Y'), CURDATE())", parameters);
        }
    }
}