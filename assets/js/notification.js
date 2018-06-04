function showUpdate(data) {
	console.log("Update");
	var notificationDiv = $("#updateNotification");
	notificationDiv.fadeIn();
	notificationDiv.html(data);

	setTimeout( function() { 
	    notificationDiv.fadeOut();
	}, 
	5000);
}
