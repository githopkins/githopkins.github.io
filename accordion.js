$(document).ready(function() {

// Disable conflicting stylesheets.
$('link[href="/dev/themes/annie_mac/styles.css"]').prop('disabled', true);
$('link[href="/dev/themes/annie_mac/styles.css"]').attr('disabled', 'disabled');

$('.accordion-selection').click(function() {
	$('.toggle', this).toggle();
	$('.hide', this).toggle();
});

$('#expand-all').click(function() {
	$('.toggle').toggle();
	$('.accordion-selection .hide').toggle();
});
	
});