function invokeService(URL)
{
	//alert("http://praveen:3232/leadersservice.svc" + URL);
	$.ajax({
		type: "GET",
		dataType: 'jsonp',
		url: "http://leadersacademyapp.biz/leadersservice.svc" + URL, // HostGator
		//url: "http://praveen:3232/leadersservice.svc" + URL, // Local
		success: successCallback,
		error: errorCallback
	});
}
