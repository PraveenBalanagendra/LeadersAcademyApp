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
        [WebInvoke(Method = "GET", UriTemplate = "/team/list", ResponseFormat = WebMessageFormat.Json)]
        List<Team> GetTeam();

        [OperationContract]
        [WebInvoke(Method = "GET", UriTemplate = "/team/add/{name}/{contact}", ResponseFormat = WebMessageFormat.Json)]
        void AddTeam(string name, string contact);

        [OperationContract]
        [WebInvoke(Method = "GET", UriTemplate = "/masterdata", ResponseFormat = WebMessageFormat.Json)]
        Master GetMasterData();

        [OperationContract]
        [WebInvoke(Method = "GET", UriTemplate = "/user/add/{id}/{loginname}/{password}/{fname}/{lname}/{contact}/{dob}/{profession}/{cardno}/{joiningtype}/{joinedby}/{team}/{role}/{workshop}", ResponseFormat = WebMessageFormat.Json)]
        void AddUser(string id, string loginname, string password, string fname, string lname, string contact, string dob, string profession, string cardno, string joiningtype, string joinedby, string team, string role, string workshop);
    }
}
