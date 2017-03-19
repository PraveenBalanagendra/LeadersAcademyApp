using System;
using System.Collections.Generic;
using Services.BusinessObjects;
using System.ServiceModel.Web;

namespace Services
{
    // NOTE: You can use the "Rename" command on the "Refactor" menu to change the class name "LeadersService" in code, svc and config file together.
    // NOTE: In order to launch WCF Test Client for testing this service, please select LeadersService.svc or LeadersService.svc.cs at the Solution Explorer and start debugging.
    //[System.Web.Script.Services.ScriptService]
    [JavascriptCallbackBehavior(UrlParameterName = "callback")]
    public class LeadersService : ILeadersService
    {
        public User Login(string userName, string password)
        {
            User user = new User() { userName = userName, password = password };
            user.Authenticate();

            return user; // JsonConvert.SerializeObject(user);
        }
    
        public List<Location> GetLocation()
        {
            return Location.GetLocations();
        }

        public void AddLocation(string name, string contact, string address, string coordinates)
        {
            Location location = new Location() { name = name, address = address, geocoordinates = coordinates, contact = contact };
            location.AddLocation();
        }

        public void AddWorkshop(string locationId, string dateTimes)
        {
            Workshop workshop = new Workshop() { locationId = locationId, dateTimes = dateTimes };
            workshop.AddWorkshop();
        }

        public List<Workshop> GetWorkshop()
        {
            return Workshop.GetWorkshops();
        }

        public List<Team> GetTeam()
        {
            return Team.GetTeams();
        }

        public void AddTeam(string name, string contact)
        {
            Team team= new Team() { name = name, contact = contact };
            team.AddTeam();
        }

        public Master GetMasterData()
        {
            return Master.GetMasterData();
        }

        public void AddUser(string id, string loginname, string password, string fname, string lname, string contact, string dob, string profession, string cardno, string joiningtype, string joinedby, string team, string role, string workshop)
        {
            User user = new User()
            {
                id = id == "NULL" ? -1 : int.Parse(id),
                userName = loginname == "NULL" ? "" : loginname,
                password = password == "NULL" ? "" : password,
                firstName = fname,
                lastName = lname,
                contact = contact,
                dob = dob,
                profession = profession,
                admissionCardNo = cardno,
                joiningType = int.Parse(joiningtype),
                joinedBy = joinedby == "NULL" ? -1 : int.Parse(joinedby),
                team = int.Parse(team),
                roleId = int.Parse(role),
                workshop = workshop
            };
        }
    }
}
