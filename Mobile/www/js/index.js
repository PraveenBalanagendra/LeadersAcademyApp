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
				$('#divAdmin').show();
				$('#logout').show();
				$('#LoginUser').append(results.rows.item(0).firstName + ' ' + results.rows.item(0).lastName);
			}
			else{
				$('#logout').hide();
				$('#login').show();
				$('#divAdmin').hide();
			}
		}, null);
	});

	
	
	$('.showOnLoad').each(function(index){
		$(this).show();
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

function telephone(number){
	window.open("tel:+" + number);
}

function maps(coordinates, name){
	window.open("geo:" + coordinates + "?q=" + coordinates + "(" + name + ")");
}

function youtube(link){
	window.open(link);
}