$(function() {
	$("#sales-team").fadeOut('slow');
	$("#client-team").fadeOut('slow');
	$("#sales-toggle").click(function() {
		$("#leadership-team").fadeOut('slow'); 
		$("#sales-team").fadeIn('slow'); 
		$("#client-team").fadeOut('slow');
	};
	$("#leadership-toggle").click(function() {
		$("#leadership-team").fadeIn('slow'); 
		$("#sales-team").fadeOut('slow'); 
		$("#client-team").fadeOut('slow');
	};
	$("#client-toggle").click(function() {
		$("#leadership-team").fadeOut('slow'); 
		$("#sales-team").fadeOut('slow'); 
		$("#client-team").fadeIn('slow');
	};
});