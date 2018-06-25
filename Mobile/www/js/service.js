function invokeService(URL)
{
	//alert("http://praveen:3232/leadersservice.svc" + URL);
	$.ajax({
		type: "GET",
		dataType: 'jsonp',
		//url: "http://leaders-dev.us-west-2.elasticbeanstalk.com/leadersservice.svc" + URL,
		url: "http://praveen:3232/leadersservice.svc" + URL,
		success: successCallback,
		error: errorCallback
	});
}
