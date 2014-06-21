$(function() {
	var github = github || {};

	github.auth1 = function(id, secret) {
		console.log('github.auth1', id, secret);
		$.ajax({
			method : 'GET',
			url : 'https://github.com/login/oauth/authorize',
			crossDomain: true,
			success : console.log,
			error : console.error
		});
	};

	github.auth2 = function(id, secret, code) {
		console.log('github.auth2', id, secret, code);
	};
	
	$('#auth-button').click(function() {
		var id = $('#auth-id').val();
		var secret = $('#auth-secret').val();
		github.auth1(id, secret);
	});
});
