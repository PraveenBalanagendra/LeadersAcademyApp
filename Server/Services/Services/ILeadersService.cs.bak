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
    }
}
