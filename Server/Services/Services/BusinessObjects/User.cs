using MySql.Data.MySqlClient;
using System.Data;
using Services.DataAccess;
using System.Collections.Generic;

namespace Services.BusinessObjects
{
    public class User
    {
        public string userName { get; set; }
        public string password { get; set; }
        public bool isAuthenticate { get; set; }
        public string role { get; set; }
        public string firstName { get; set; }
        public string lastName { get; set; }
        public int id { get; set; }
        public string contact { get; set; }
        public string dob { get; set; }
        public string profession { get; set; }
        public int joiningTypeId { get; set; }
        public int teamId { get; set; }
        public string workshopDetails { get; set; }
        public int roleId { get; set; }
        public int joinedBy { get; set; }

        public void Authenticate()
        {
            Dictionary<string, string> parameters = new Dictionary<string, string>();
            parameters.Add("@UserName", this.userName);
            parameters.Add("@Password", this.password);

            DataSet ds = new DAL().GetDataSet("SELECT Users.Id, Users.FirstName, Users.LastName, Role.Name AS RoleName FROM Users JOIN Role ON Users.RoleId = Role.Id WHERE UserName = @UserName AND Password = @Password", parameters);

            this.isAuthenticate = false;

            if(ds.Tables.Count > 0 && ds.Tables[0].Rows.Count > 0)
            {
                this.isAuthenticate = true;
                this.firstName = ds.Tables[0].Rows[0]["FirstName"].ToString();
                this.lastName = ds.Tables[0].Rows[0]["LastName"].ToString();
                this.role = ds.Tables[0].Rows[0]["RoleName"].ToString();
            }
        }

        public void AddModifyUser()
        {
            Dictionary<string, string> parameters = new Dictionary<string, string>();
            parameters.Add("@UserId", this.id.ToString());
            parameters.Add("@UserName", this.userName);
            parameters.Add("@Password", this.password);
            parameters.Add("@FirstName", this.firstName);
            parameters.Add("@LastName", this.lastName);
            parameters.Add("@RoleId", this.roleId.ToString());
            parameters.Add("@Contact", this.contact);
            parameters.Add("@DOB", this.dob);
            parameters.Add("@Profession", this.profession);
            parameters.Add("@TeamId", this.teamId.ToString());
            parameters.Add("@JoiningType", this.joiningTypeId.ToString());
            parameters.Add("@JoinedBy", this.joinedBy.ToString());
            parameters.Add("@WorkshopDetails", this.workshopDetails);
            //parameters.Add("@AdmissionCardNo", this.admissionCardNo);

            DataSet ds = new DAL().GetDataSet("AddModifyUser", parameters, "StoredProcedure");
        }

        public void UpdateUser()
        {

        }
    }
}