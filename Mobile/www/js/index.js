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
	
	$('.showOnLoad').each(function(index){
		$(this).show();
	});
}

/*
//Create new table
$("#createTable").click(function(){
    myDB.transaction(function(transaction) {
    transaction.executeSql('CREATE TABLE IF NOT EXISTS phonegap_pro (id integer primary key, title text, desc text)', [],
        function(tx, result) {
            alert("Table created successfully");
        }, 
        function(error) {
              alert("Error occurred while creating the table.");
        });
    });
});

//Insert New Data
$("#insert").click(function(){
  var title=$("#title").val();
  var desc=$("#desc").val();
  console.log(title +""+ desc);
  myDB.transaction(function(transaction) {
        var executeQuery = "INSERT INTO phonegap_pro (title, desc) VALUES (?,?)";             
        transaction.executeSql(executeQuery, [title,desc]
            , function(tx, result) {
                 alert('Inserted');
            },
            function(error){
                 alert('Error occurred'); 
            });
    });
});

//Display Table Data
$("#showTable").click(function(){
  $("#TableData").html("");
  myDB.transaction(function(transaction) {
  transaction.executeSql('SELECT * FROM phonegap_pro', [], function (tx, results) {
       var len = results.rows.length, i;
       $("#rowCount").html(len);
       for (i = 0; i < len; i++){
          $("#TableData").append("<tr><td>"+results.rows.item(i).id+"</td><td>"+results.rows.item(i).title+"</td><td>"+results.rows.item(i).desc+"</td><td><a href='edit.html?id="+results.rows.item(i).id+"&title="+results.rows.item(i).title+"&desc="+results.rows.item(i).desc+"'>Edit</a> &nbsp;&nbsp; <a class='delete' href='#' id='"+results.rows.item(i).id+"'>Delete</a></td></tr>");
       }
    }, null);
  });
});

//Delete Data from Database
$(document.body).on('click', '.delete' ,function(){
  var id=this.id;
  myDB.transaction(function(transaction) {
    var executeQuery = "DELETE FROM phonegap_pro where id=?";
    transaction.executeSql(executeQuery, [id],
      //On Success
      function(tx, result) {alert('Delete successfully');},
      //On Error
      function(error){alert('Something went Wrong');});
  });
});


//Delete Tables
$("#update").click(function(){
  var id=$("#id").text();
  var title=$("#title").val();
  var desc=$("#desc").val()
  myDB.transaction(function(transaction) {
    var executeQuery = "UPDATE phonegap_pro SET title=?, desc=? WHERE id=?";
    transaction.executeSql(executeQuery, [title,desc,id],
      //On Success
      function(tx, result) {alert('Updated successfully');},
      //On Error
      function(error){alert('Something went Wrong');});
  });
});

$("#DropTable").click(function(){
    myDB.transaction(function(transaction) {
        var executeQuery = "DROP TABLE  IF EXISTS phonegap_pro";
        transaction.executeSql(executeQuery, [],
            function(tx, result) {alert('Table deleted successfully.');},
            function(error){alert('Error occurred while droping the table.');}
        );
    });
});

});
*/