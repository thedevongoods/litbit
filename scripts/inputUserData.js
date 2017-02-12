function updateDayInfo(){

	var currentUser = firebase.auth().currentUser;

	var database = firebase.database();

	var date = new Date().toDateString();

	var pages = $("#pages").val();
	var time = $("#time").val();
	var goals = $("#goals").val();

	var dateInfo = {
		hours: time,
		pages: pages,
		goals: goals
	}

	//var newDateKey = firebase.database().ref().child('dates').push().key;

	var updates = {};
	updates['/dates/' + date + '/' + currentUser.uid] = dateInfo;

	updates['/user-dates/' + currentUser.uid  + '/' + date] = dateInfo;

	return firebase.database().ref().update(updates);

}
