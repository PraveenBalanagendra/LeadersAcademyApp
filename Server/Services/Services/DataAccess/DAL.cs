using MySql.Data.MySqlClient;
using System.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Services.DataAccess
{
    public class DAL
    {
        MySqlConnection connection = new MySqlConnection();

        public DAL()
        {
            connection.ConnectionString = "Server=leadersdb.ctg6ujawfiqo.us-west-2.rds.amazonaws.com;Port=3306;Database=leadersacademy;Uid=awsdbpb;Pwd=Welcome123; ";
        }

        public DataSet GetDataSet(string query, Dictionary<string, string> parameters, string commandType = "Text")
        {
            MySqlCommand command = new MySqlCommand(query, connection);
            command.CommandType = (commandType == "Text" ? CommandType.Text : CommandType.StoredProcedure);

            if (parameters != null)
                foreach (string param in parameters.Keys)
                {
                    command.Parameters.Add(new MySqlParameter(param, parameters[param]));
                }

            MySqlDataAdapter adapter = new MySqlDataAdapter(command);

            DataSet ds = new DataSet();
            adapter.Fill(ds);

            return ds;
        }

        public void PutData(string query, Dictionary<string, string> parameters, string commandType = "Text")
        {
            try
            {
                MySqlCommand command = new MySqlCommand(query, connection);
                command.CommandType = (commandType == "Text"? CommandType.Text: CommandType.StoredProcedure);

                if (parameters != null)
                    foreach (string param in parameters.Keys)
                    {
                        command.Parameters.Add(new MySqlParameter(param, parameters[param]));
                    }

                connection.Open();
                command.ExecuteNonQuery();
            }
            catch(Exception ex)
            {
                throw ex;
            }
            finally
            {
                connection.Close();
            }
        }
    }
}