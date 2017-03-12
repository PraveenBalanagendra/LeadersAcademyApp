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
            return Workshop.GetWorWorkshops();
        }
    }
}
