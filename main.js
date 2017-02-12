var user = firebase.auth().currentUser;

if(user){
	console.log("Current user is " + user.email);
} else {

}
console.log();

function register(){
	var email = $("#email").val();
	var password =$("#password").val();

	firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
		// Handle Errors here.
		var errorCode = error.code;
		var errorMessage = error.message;
		// 
	});

}

function login(){
	var email = $("#email").val();
	var password =$("#password").val();
	
	firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
  		// Handle Errors here.
  		var errorCode = error.code;
  		var errorMessage = error.message;
  		// ...
	});


	//console.log(firebase.database.ServerValue.TIMESTAMP.toString());
	//window.location.href = 'editData.html';

}

function signout(){
	firebase.auth().signOut().then(function() {
  		// Sign-out successful.
	}, function(error) {
  		// An error happened.
	});

}
