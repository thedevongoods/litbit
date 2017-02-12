

function updateDayInfo(){

	var currentUser = firebase.auth().currentUser;
	console.log(currentUser.email);
	var database = firebase.database();

	var pages = $("#pages").val();
	var time = $("#time").val();
	var goals = $("#goals").val();

	var dateInfo = {
		user: currentUser.email,
		uid: currentUser.uid,
		hours: time,
		pages : pages,
		goals: goals
	}

	var newDateKey = firebase.database().ref().child('dates').push().key;

	var updates = {};
	updates['/dates' + newDateKey] = dateInfo;

	updates['/user-dates/' + currentUser.uid  + '/' + newDateKey] = dateInfo;

	return firebase.database().ref().update(updates);

}