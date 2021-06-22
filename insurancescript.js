$(function() {
	$("#sales-team").hide('slow'); 
	$("#client-team").hide('slow'); 
	$("#sales-toggle").click(function() {
		$("#leadership-team").hide('slow'); 
		$("#sales-team").show('slow'); 
		$("#client-team").hide('slow');
	};
	$("#leadership-toggle").click(function() {
		$("#leadership-team").show('slow'); 
		$("#sales-team").hide('slow'); 
		$("#client-team").hide('slow');
	};
	$("#client-toggle").click(function() {
		$("#leadership-team").hide('slow'); 
		$("#sales-team").hide('slow'); 
		$("#client-team").show('slow');
	};
});