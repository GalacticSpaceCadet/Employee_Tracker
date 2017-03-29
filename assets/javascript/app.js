 var config = {
    apiKey: "AIzaSyAdx4a8-mGUKcQFBIMa3kSPqgtdpPPIpb8",
    authDomain: "employeetracker-2f96a.firebaseapp.com",
    databaseURL: "https://employeetracker-2f96a.firebaseio.com",
    storageBucket: "employeetracker-2f96a.appspot.com",
    messagingSenderId: "552767470069"
  };
  
  firebase.initializeApp(config);

  var database = firebase.database();
  var name = "";
  var role = "";
  var startDate = 0;
  var monthlyRate = 0;

  $("#submit").on("click", function(){

  	preventDefault();

  	name = $("#employee-name").val().trim();
  	role = $("#role").val().trim();
  	startDate = $("#start-date").val().trim();
  	monthlyRate = $("monthly-rate").val().trim();

  	database.ref().set({
  		name: name,
  		role: role,
  		startDate: startDate,
  		monthlyRate: monthlyRate,
  		dateAdded: database.ServerValue.TIMESTAMP

  	});

  });

  // database.ref().orderByChild("dateAdded").on("child_added", function(snapshot){

  // 		$(".table").append("<tr><td>" + snapshot.val().name + "</td><td>" + snapshot.val().role + "</td><td>" +  snapshot.val().startDate + "</td><td>" + snapshot.val().monthlyRate + "</td></tr>");

  // });