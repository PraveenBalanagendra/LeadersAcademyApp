var imported = document.createElement('script');
imported.src = 'js/service.js';
document.head.appendChild(imported);

$(document).ready(function(){
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
	
	myDB.transaction(function(transaction) {
		transaction.executeSql("SELECT value FROM setting WHERE description = ?", ['notificationSetting'], 
		function (tx, results) {
			if(results.rows.item(0).value == "yes")
				setTimeout(checkNotification, 1000);
		}, null);
	});
}

function checkNotification(){
	//alert('inside checkNotification');
	cordova.plugins.notification.local.getTriggered(function (notifications) {
		myDB.transaction(function(transaction) {
		transaction.executeSql("SELECT value FROM setting WHERE description = 'notificationLastPull'", [], 
			function (tx, results) {
				//alert('query for notificationLastPull executed');
				var len = results.rows.length, i;
				//alert(len);
				var lastTrigger = '';
				var lastTriggerId = '0';
				var pullNotitications = true;
				if(len > 0){
					lastTrigger = results.rows.item(0).value.split('^')[0];
					lastTriggerId = results.rows.item(0).value.split('^')[1];
					if((Math.abs(Date.now() - lastTrigger) /1000/60) < 1){
						pullNotitications = false;
					}
				}
				//alert(pullNotitications);
				if(pullNotitications){
					successCallback = function (data) {
						//alert('successCallback');
						var noOfNotifications = data.length;
						//alert(noOfNotifications);
						var maxId = 0;
						$.each(data, function (i, item) {
							//alert('scheduling item:' + item.id);
							
							myDB.transaction(function(transaction) {
									transaction.executeSql("INSERT INTO notification(id, title, message) VALUES(?,?,?)", [item.id, item.title, item.message], null,null);
								});
							
							cordova.plugins.notification.local.schedule({
								id: item.id,
								title: item.title,
								text: item.message
							});
							maxId = item.id;
						});
						
						if(len > 0){
							if(maxId > 0)
								myDB.transaction(function(transaction) {
									transaction.executeSql("UPDATE setting SET value = ? WHERE description = ?", [Date.now() + "^" + maxId, 'notificationLastPull'], null,null);
								});
						}
						else{
							myDB.transaction(function(transaction) {
								transaction.executeSql("INSERT INTO setting (description, value) VALUES(?,?)", ['notificationLastPull', Date.now() + "^" + maxId], 
									null,null);
							});
						}
					};
					//alert(successCallback);
					errorCallback = function (XMLHttpRequest, textStatus, errorThrown) {
						//alert('Whooops .. something not correct in notification!!!');
					};
					//alert(errorCallback);
					//alert('Invoking Service with lastTriggerId: ' + lastTriggerId);
					invokeService("/notification/list/1/" + lastTriggerId);
					//alert(invokeService);
				}
			}, null);
		});
		// if(notifications.length == 0){
			// cordova.plugins.notification.local.schedule({
				// id: 1,
				// title: "Leaders Academy - Notification",
				// text: "Upcoming workshop"
			// });
			// cordova.plugins.notification.local.schedule({
				// id: 2,
				// title: "Leaders Academy - Notification",
				// text: "Upcoming workshop"
			// });

		//}
	});
	
	cordova.plugins.notification.local.on("click", function (notification) {
		window.location = "notification.html";
	});
	
	setTimeout(checkNotification, 1000 * 60);
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
				if(results.rows.item(0).role == "Admin")
					$('#divAdmin').show();
				else
					$('#divAdmin').hide();
				$('#logout').show();
				$('#LoginUser').append(results.rows.item(0).firstName + ' ' + results.rows.item(0).lastName).show();
			}
			else{
				$('#logout').hide();
				$('#login').show();
				$('#divAdmin').hide();
				$('#LoginUser').hide();
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