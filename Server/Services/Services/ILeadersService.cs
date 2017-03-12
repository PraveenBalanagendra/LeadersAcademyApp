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
    }
}
