function invokeService(URL)
{
	$.ajax({
		type: "GET",
		dataType: 'jsonp',
		url: "http://leaders-dev.us-west-2.elasticbeanstalk.com/leadersservice.svc" + URL,
		success: successCallback,
		error: errorCallback
	});
}
