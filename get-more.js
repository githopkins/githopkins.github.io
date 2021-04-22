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
var jobTitle = $("#originator-title").val();
$('input[name=originator-type]').val(jobTitle);
var windowurl = window.location.href
var windowurlmessage = "Summary: This lead was captured at " + windowurl
var nameinput = " Prospect Informaton: The prospect's name is " + $('input[name=name]').val() + ". "
var borrowerLocation = "The prospect is from " + $('input[name=state]').val() + ". "
var emailaddress = "Their email address is " + $('input[name=email-address]').val() + ". "
var phonenumber = "Their phone number is " + $('input[name=phone-number]').val() + ". "
var nmlsid = "Their NMLS is " + $('input[name=nmls-id]').val() + ". "
var position = "Their position is " + $('input[name=originator-type]').val() + ". "
var eventinterested = "The prospect is " + $('input[name="event-interest"]:checked').val() + ". "
$("#Personals").val(windowurlmessage + " " + nameinput + " " + borrowerLocation + " " + emailaddress + " " + phonenumber);
$("#Production").val(nmlsid + " " + position + " " + eventinterested);
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