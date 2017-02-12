// SURENDRA CODE FOR STYLING STUFF 
//SUBMISSION
function deselect(e) {
  $('.pop').slideFadeToggle(function() {
    e.removeClass('selected');
  });    
}

$(function() {
  $('#testLogoIMG').on('click', function() {
    if($(this).hasClass('selected')) {
      deselect($(this));               
    } else {
      $(this).addClass('selected');
      $('.pop').slideFadeToggle();
    }
    return false;
  });

  $('.close').on('click', function() {
    deselect($('#testLogoIMG'));
    return false;
  });
});

$.fn.slideFadeToggle = function(easing, callback) {
  return this.animate({ opacity: 'toggle', height: 'toggle' }, 'fast', easing, callback);
};

//LOGIN
$(document).ready(function(){
  $('#login-trigger').click(function(){
    $(this).next('#login-content').slideToggle();
    $(this).toggleClass('active');          
    
    if ($(this).hasClass('active')) $(this).find('span').html('&#x25B2;')
      else $(this).find('span').html('&#x25BC;')
    })
});

// DEVON CODE FOR BACKEND
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


