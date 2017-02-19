using MySql.Data.MySqlClient;
using System.Data;

namespace Services.BusinessObjects
{
    public class User
    {
        public string userName { get; set; }
        public string password { get; set; }
        public bool isAuthenticate { get; set; }

        public bool Authenticate()
        {
            MySqlConnection connection = new MySqlConnection();
            connection.ConnectionString = "Server=leadersdb.ctg6ujawfiqo.us-west-2.rds.amazonaws.com;Port=3306;Database=leadersacademy;Uid=awsdbpb;Pwd=Welcome123; ";

            MySqlCommand command = new MySqlCommand("SELECT * FROM Users WHERE UserName = @UserName AND Password = @Password", connection);
            MySqlParameter param1 = new MySqlParameter("UserName", this.userName);
            MySqlParameter param2 = new MySqlParameter("Password", this.password);

            command.Parameters.Add(param1);
            command.Parameters.Add(param2);
            MySqlDataAdapter adapter = new MySqlDataAdapter(command);
            DataSet ds = new DataSet();
            adapter.Fill(ds);

            return (ds.Tables.Count > 0 && ds.Tables[0].Rows.Count > 0);
        }
    }
}