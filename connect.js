$("input[type='tel']").on("keyup", function() {
var valid = /^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/.test(this.value),
val = this.value;
if (valid) {
	$('#submit-overlayment').hide();
}
});
$(":input").on("keyup change", function(e) {
var selectedState = $("#state-selection").val();
$('input[name=state]').val(selectedState);
var windowurl = window.location.href
var windowurlmessage = "Summary: This lead was captured at " + windowurl
var nameinput = "//// Recommended Loan Originator Informaton: The candidate's name is " + $('input[name=name]').val() + ". "
var borrowerLocation = "The candidate is from " + $('input[name=state]').val() + ". "
var emailaddress = "Their email address is " + $('input[name=email-address]').val() + ". "
var phonenumber = "Their phone number is " + $('input[name=phone-number]').val() + ". "
var nmlsidentification = "Their NMLS is " + $('input[name="recommended-nmls"]').val() + ". "
var jobtitle = "Their current job title is " + $('input[name="recommended-title"]').val() + ". "
var currentEmployer = "The candidate is currently employed with " + $('input[name="recommended-employer"]').val() + ". "
var callback = "The candidate " + $('input[name="callback-status"]:checked').val() + ". "
var referredName = " //// Referrer Information: This candidate was referred by " + $('input[name="recomendee-name"]').val() + "."
var referredEmail = "Their email is " + $('input[name="recomendee-email"]').val() + "."
var referredPhone = "Their phone number is " + $('input[name="recomendee-phone"]').val() + "."
var additionalComments = " //// The referrer's comments about this candidate are as followed: " + $('textarea[name="additional-comments"]').val();
$("#Personals").val(windowurlmessage + " " + nameinput + " " + borrowerLocation + " " + emailaddress + " " + phonenumber + " " + nmlsidentification + " " + jobtitle + " " + currentEmployer + " " + callback);
$("#Production").val(referredName + " " + referredEmail + " " + referredPhone + " " + additionalComments);
var commentScruba = $('#Production').val();
if (commentScruba.indexOf(undefined) < 1) {
	var productionsummary = $("#Production").val()
}
var commentScrubb = $('#Personals').val();
if (commentScrubb.indexOf("is .") < 1) {
	var personalsummary = $("#Personals").val()
}
$("#Comments").attr('value', personalsummary + " " + productionsummary);
});