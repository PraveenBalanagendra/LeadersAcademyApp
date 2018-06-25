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

        public string Register(string userName)
        {
            return User.Register(userName);
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

        public void AddNirvana(string dateTimes)
        {
            Nirvana nirvana = new Nirvana() { dateTimes = dateTimes };
            nirvana.AddNirvana();
        }

        public List<Nirvana> GetNirvana()
        {
            return Nirvana.GetNirvanas();
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

        public void AddModifyUser(string id, string loginname, string password, string fname, string lname, string role, string contact, string dob, string profession, string team, string joiningtype, string joinedby, string workshopDetails)
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
                joiningTypeId = int.Parse(joiningtype),
                joinedBy = joinedby == "NULL" ? -1 : int.Parse(joinedby),
                teamId = int.Parse(team),
                roleId = int.Parse(role),
                workshopDetails = workshopDetails
            };

            user.AddModifyUser();
        }

        public List<Events> GetEvents()
        {
            return Events.GetEvents();
        }

        public List<Notification> GetNotifications(string userId, string notificationId)
        {
            return Notification.GetNotifications(userId, notificationId);
        }

        public void SaveNotification(string title, string message, string type, string to)
        {
            Notification.SaveNotification(title, message, type, to);
        }

        public void SaveMessage(string name, string phonenumber, string message)
        {
            Message.AddMessage(name, phonenumber, message);
        }
    }
}
