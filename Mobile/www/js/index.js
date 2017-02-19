$(document).ready(function(){
	// Fab Icons
	/*var links = [
		{
			"bgcolor":"#03A9F4",
			"icon":"<i class='material-icons'>perm_phone_msg</i>"
		},
		{
			"url":"#",
			"bgcolor":"orange",
			"color":"#fffff",
			"icon":"<i class='material-icons'>location_on</i>"
		},
		{
			"url":"#",
			"bgcolor":"#3B5998",
			"color":"#fffff",
			"icon":"<i class='material-icons'>email</i>"
		},
		{
			"url":"#",
			"bgcolor":"#263238",
			"color":"white",
			"icon":"<i class='material-icons'>phone</i>"
		}
	]
	$('.kc_fab_wrapper').kc_fab(links);*/

	document.addEventListener("deviceready",onDeviceReady,false);
});

function onDeviceReady(){
	if (typeof logoutFlag !== 'undefined') {
		logout();
	}
	
	document.addEventListener("backbutton", BackKeyDown, true);
	
	myDB = window.sqlitePlugin.openDatabase({name: "leaders.db", location: 'default'});
	var data = localStorage.getItem($('.content').first().attr('id'));
	//alert(data);
	if((typeof(data) == 'undefined') || (data == null))
		createDatabase();
	else 
		populatePage();
}

function BackKeyDown()
{
	navigator.app.exitApp();  // For Exit Application
}
			 
function populatePage()
{
	//alert("populating page contents");
	$('.content').each(function(index){
		//alert($(this).attr('id'));
		$(this).append(localStorage.getItem($(this).attr('id')));
	});
	
	// Display Login User details
	myDB = window.sqlitePlugin.openDatabase({name: "leaders.db", location: 'default'});
	myDB.transaction(function(transaction) {
		transaction.executeSql("SELECT firstName, lastName, role FROM user", [], 
		function (tx, results) {
			var len = results.rows.length, i;
			if(len > 0)
			{
				$('#login').hide();
				$('#logout').show();
				$('#LoginUser').append(results.rows.item(0).firstName + ' ' + results.rows.item(0).lastName);
			}
			else{
				$('#logout').hide();
				$('#login').show();
			}
		}, null);
	});

	
	
	$('.showOnLoad').each(function(index){
		$(this).show();
	});
}

function authenticateUser()
{
	var url = "http://leaders-dev.us-west-2.elasticbeanstalk.com/leadersservice.svc/login/" + $("#txtUsername").val() + "/" + $("#txtPassword").val();
	
	$.ajax({
			type: "GET",
			dataType: 'jsonp',
			url: url,
			success: function (data) {
				if(data.isAuthenticate == false){
					$( "#dialog" ).dialog({
						modal: true,
						buttons: {
							Ok: function() {
								$( this ).dialog( "close" );
							}
						}
					});
				}
				else{
					// Set the user details in the SQLite and redirect to About page
					myDB = window.sqlitePlugin.openDatabase({name: "leaders.db", location: 'default'});
					myDB.transaction(function(transaction) {
						transaction.executeSql('INSERT INTO user (firstName, lastName, role) VALUES (?,?,?)', [data.firstName,data.lastName,data.role], 
							function(tx, results){window.location = "about.html";}, 
							function(){alert('error');}
						);
					});
				}
			},
			error: function (XMLHttpRequest, textStatus, errorThrown) {
				alert('Authentication error. Please verify if the internet is turned on.');
			}
		});
}

function logout(){
	myDB = window.sqlitePlugin.openDatabase({name: "leaders.db", location: 'default'});
	myDB.transaction(function(transaction) {
		transaction.executeSql('DELETE FROM user', [], 
			function(tx, results){window.location = "about.html";}, 
			function(){alert('error');}
		);
	});

}