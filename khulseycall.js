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
	var nameinput = " Borrower Informaton: The borrower's name is " + $('input[name=name]').val() + ". "
	var borrowerLocation = "The borrower is from " + $('input[name=state]').val() + ". "
	var emailaddress = "Their email address is " + $('input[name=email-address]').val() + ". "
	var phonenumber = "Their phone number is " + $('input[name=phone-number]').val() + ". "
	var loanPurpose = "The loan purpose is " + $('input[name="loan-type"]:checked').val() + ". "
	var lotStatus = "The lot status is " + $('input[name="lot-status"]:checked').val() + ". "
	var creditScore = "The borrower's credit score is " + $('input[name="credit-rating"]:checked').val() + ". "
	var propertySelectedType = "The property type is " + $('input[name="property-type"]:checked').val() + "."
	$("#Personals").val(windowurlmessage + " " + nameinput + " " + borrowerLocation + " " + emailaddress + " " + phonenumber);
	$("#Production").val(loanPurpose + " " + lotStatus + " " + creditScore + " " + propertySelectedType);
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