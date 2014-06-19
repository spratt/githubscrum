$(function() {
	var github = github || {};

	github.auth = function(id, secret) {
		console.log(id, secret);
	};
	
	$('#auth-button').click(function() {
		var id = $('#auth-id').val();
		var secret = $('#auth-secret').val();
		github.auth(id, secret);
	});
});
