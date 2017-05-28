using System;
using System.Collections.Generic;
using System.ServiceModel;
using System.ServiceModel.Web;
using Services.BusinessObjects;

namespace Services
{
    // NOTE: You can use the "Rename" command on the "Refactor" menu to change the interface name "ILeadersService" in both code and config file together.
    [ServiceContract]
    public interface ILeadersService
    {
        [OperationContract]
        [WebInvoke(Method = "GET", UriTemplate = "/Login/{userName}/{password}", ResponseFormat = WebMessageFormat.Json)]
        User Login(string userName, string password);

        [OperationContract]
        [WebInvoke(Method = "GET", UriTemplate = "/Register/{userName}", ResponseFormat = WebMessageFormat.Json)]
        string Register(string userName);

        [OperationContract]
        [WebInvoke(Method = "GET", UriTemplate = "/location/list", ResponseFormat = WebMessageFormat.Json)]
        List<Location> GetLocation();

        [OperationContract]
        [WebInvoke(Method = "GET", UriTemplate = "/location/add/{name}/{contact}/{address}/{coordinates}", ResponseFormat = WebMessageFormat.Json)]
        void AddLocation(string name, string contact, string address, string coordinates);

        [OperationContract]
        [WebInvoke(Method = "GET", UriTemplate = "/workshop/add/{locationId}/{dateTimes}", ResponseFormat = WebMessageFormat.Json)]
        void AddWorkshop(string locationId, string dateTimes);

        [OperationContract]
        [WebInvoke(Method = "GET", UriTemplate = "/workshop/list", ResponseFormat = WebMessageFormat.Json)]
        List<Workshop> GetWorkshop();

        [OperationContract]
        [WebInvoke(Method = "GET", UriTemplate = "/nirvana/add/{dateTimes}", ResponseFormat = WebMessageFormat.Json)]
        void AddNirvana(string dateTimes);

        [OperationContract]
        [WebInvoke(Method = "GET", UriTemplate = "/nirvana/list", ResponseFormat = WebMessageFormat.Json)]
        List<Nirvana> GetNirvana();

        [OperationContract]
        [WebInvoke(Method = "GET", UriTemplate = "/team/list", ResponseFormat = WebMessageFormat.Json)]
        List<Team> GetTeam();

        [OperationContract]
        [WebInvoke(Method = "GET", UriTemplate = "/team/add/{name}/{contact}", ResponseFormat = WebMessageFormat.Json)]
        void AddTeam(string name, string contact);

        [OperationContract]
        [WebInvoke(Method = "GET", UriTemplate = "/masterdata", ResponseFormat = WebMessageFormat.Json)]
        Master GetMasterData();

        [OperationContract]
        [WebInvoke(Method = "GET", UriTemplate = "/user/addmodify/{id}/{loginname}/{password}/{fname}/{lname}/{role}/{contact}/{dob}/{profession}/{team}/{joiningtype}/{joinedby}/{workshopDetails}", ResponseFormat = WebMessageFormat.Json)]
        void AddModifyUser(string id, string loginname, string password, string fname, string lname, string role, string contact, string dob, string profession, string team, string joiningtype, string joinedby, string workshopDetails);

        [OperationContract]
        [WebInvoke(Method = "GET", UriTemplate = "/event/list", ResponseFormat = WebMessageFormat.Json)]
        List<Events> GetEvents();

        [OperationContract]
        [WebInvoke(Method = "GET", UriTemplate = "/notification/list/{userId}/{notificationId}", ResponseFormat = WebMessageFormat.Json)]
        List<Notification> GetNotifications(string userId, string notificationId);

        [OperationContract]
        [WebInvoke(Method = "GET", UriTemplate = "/notification/save/{title}/{message}/{type}/{to}", ResponseFormat = WebMessageFormat.Json)]
        void SaveNotification(string title, string message, string type, string to);
    }
}
