using System.Data;
using Services.DataAccess;
using System.Collections.Generic;
using System;
using System.Web;

namespace Services.BusinessObjects
{
    public class Message
    {
        public static void AddMessage(string name, string phoneNumber, string message)
        {
            Dictionary<string, string> parameters = new Dictionary<string, string>();
            parameters.Add("@UserName", name);
            parameters.Add("@PhoneNumber", phoneNumber);
            parameters.Add("@Message", message);

            DataSet ds = new DAL().GetDataSet("INSERT INTO message VALUES('" + name + "','" + phoneNumber + 
                "','" + message + "', NOW());", null);
        }
    }
}