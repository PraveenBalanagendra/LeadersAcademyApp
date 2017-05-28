using System;
using System.Collections.Specialized;
using System.Net;
using System.Web;

namespace Services.BusinessObjects
{
    public class SMS
    {
        public static string SendSMS(string number, string rawMessage)
        {
            String message = HttpUtility.UrlEncode("rawMessage");
            using (var wb = new WebClient())
            {
                byte[] response = wb.UploadValues("http://api.textlocal.in/send/", new NameValueCollection()
                {
                    {"apiKey" , "4IsjNiHnDnM-eVi8Q2L4WlvV4oZDYoHzxlmCLNDXgS"},
                    {"numbers" , number},
                    {"message" , message}
                }
                );
                string result = System.Text.Encoding.UTF8.GetString(response);
                return result;
            }
        }
    }
}