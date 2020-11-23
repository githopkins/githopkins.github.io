$(document).ready(function() {
	$('#continue').click(function() {
		$('#contact-information').hide();
		$('#broker-information').show();
	});
	$('#prev').click(function() {
		$('#contact-information').show();
		$('#broker-information').hide();
	});
	$('#role-selection').on('change',function(){
		$('.disable').prop('disabled',true);
	});
	$('#state-selection').on('change',function(){
		$('.disable').prop('disabled',true);
	});
});