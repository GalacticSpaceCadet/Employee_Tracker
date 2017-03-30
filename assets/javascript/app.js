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
  var startDate = "";
  var monthsWorked = "";
  var convertedDate = "";
  var displayMonths = "";
  var monthlyRate = 0;
  var totalBilled = 0;

  $("#submit").on("click", function(event){

  	event.preventDefault();

  	name = $("#employee-name").val().trim();
  	role = $("#role").val().trim();
  	startDate = $("#start-date").val().trim();
   	monthsWorked = moment(new Date(startDate));
   	convertedDate = moment(monthsWorked).diff(moment(), "months");
   	displayMonths = convertedDate *= -1;
  	monthlyRate = $("#monthly-rate").val().trim();
  	totalBilled = (displayMonths * monthlyRate);

  	console.log(displayMonths);
  	console.log(monthlyRate);
  	console.log(totalBilled);
  	

  	database.ref().push({
  		name: name,
  		role: role,
  		startDate: startDate,
  		monthsWorked: displayMonths,
  		monthlyRate: monthlyRate,
  		totalBilled: totalBilled,
  		dateAdded: firebase.database.ServerValue.TIMESTAMP

  	});

  	// console.log(moment(convertedDate).diff(moment(), "months"));

  });

  database.ref().orderByChild("dateAdded").on("child_added", function(snapshot){

  		$(".table").append("<tr><td>" + snapshot.val().name + "</td><td>" + snapshot.val().role + "</td><td>" +  snapshot.val().startDate + "</td><td>" + snapshot.val().monthsWorked + "</td><td>" + snapshot.val().monthlyRate + "</td><td>" + snapshot.val().totalBilled +"</td></tr>");

  });