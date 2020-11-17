$( document ).ready(function() {
	$( "#side-bar-navigation-toggle" ).click(function() {
		$('#navigation-sidebar').toggleClass('hide');
	});
	
	$( "#close-navigation-side" ).click(function() {
		$('#navigation-sidebar').toggleClass('hide');
	});
});
