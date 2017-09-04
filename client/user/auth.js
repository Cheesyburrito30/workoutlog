$(function(){
	$.extend( WorkoutLog, {
//signup method
	signup: function(){
			//User/PW Vars
			let username=$('#su_username').val()
			let password=$('#su_password').val()
			//user object
			let user={
				user:{
					username: username,
					password: password
				}
			}
		

		//signup post
		let signup = $.ajax({	
				type: "POST",
				url: WorkoutLog.API_BASE + "user",
				data: JSON.stringify( user ),
				contentType: "application/json"
			})
		//signupdon/fail
		signup.done(function(data){
			if (data.sessionToken){
				workoutLog.setAuthHeader(data.sessionToken)
			}
			$('#signup-modal').modal("hide")
			$('.disabled').removeClass("disabled")
			$('#loginout').text("Logout")
		}).fail(function(){
			$("#su_error").text("There was an issue with sign up").show()
		})

	}	
//login method

//loginout method

	})

	$("#signup").on("click", WorkoutLog.signup)
})