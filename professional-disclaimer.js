$("input[type='email']").on("keyup", function(){
	var valid = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.value),
	val = this.value;
	if(valid){
		$('#submit-overlayment').hide();
	}
});
$("#submit-overlay").mouseover(function() {
var date = new Date();
var day = date.getDate(),
	month = date.getMonth() + 1,
	year = date.getFullYear(),
	hour = date.getHours(),
	min  = date.getMinutes();
month = (month < 10 ? "0" : "") + month;
day = (day < 10 ? "0" : "") + day;
hour = (hour < 10 ? "0" : "") + hour;
min = (min < 10 ? "0" : "") + min;
var today = month + "/" + day + "/" + year,
displayTime = hour + ":" + min; 
$('#timestamp-marker').attr('value', today + " at " + displayTime); 
});
$(":input").on("keyup change", function(e) {
var selectedState = $("#state-selection").val();
$('input[name=state]').val(selectedState);
var windowurl = window.location.href
var agreement_type = "The agreement was made in reference to: " + $('input[name=agreement-type]').val() + " ."
var nameinput = " Borrower Information: The borrower's name is " + $('input[name=name]').val() + ". "
var emailaddress = "Their email address is " + $('input[name=email-address]').val() + "."
var agreement_made = "The borrower agreed to the disclaimer agreement on " + $('input[name="agreement-timestamp"]').val()
var windowurlmessage = "at the following url: " + windowurl 
$("#Personals").val(nameinput + " " + " " + emailaddress);
$("#Production").val(agreement_made + " " + agreement_type + " " +  windowurlmessage);
var productionsummary = $("#Production").val()
var personalsummary = $("#Personals").val()
$("#Comments").attr('value', productionsummary + " " + personalsummary);
});
