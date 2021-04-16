$("input[type='tel']").on("keyup", function(){
	var valid = /[0-9]{10}/.test(this.value),
	val = this.value;
	if(valid){
		$('#submit-overlayment').hide();
	}
});
$(":input").on("keyup change", function(e) {
	var selectedState = $("#state-selection").val();
	$('input[name=state]').val(selectedState);
	var nameinput = "Summary: The borrower's name is " + $('input[name=name]').val() + ". "
	var borrowerLocation = "The borrower is from " + $('input[name=state]').val() + ". "
	var emailaddress = "Their email address is " + $('input[name=email-address]').val() + ". "
	var phonenumber = "Their phone number is " + $('input[name=phone-number]').val() + ". "
	var loanPurpose = "The loan purpose is " + $('input[name="loan-type"]:checked').val() + ". "
	var lotStatus = "The lot status is " + $('input[name="lot-status"]:checked').val() + ". "
	var creditScore = "The borrower's credit score is " + $('input[name="credit-rating"]:checked').val() + ". "
	var propertySelectedType = "The property type is " + $('input[name="property-type"]:checked').val() + "."
	$("#Personals").val(nameinput + " " + borrowerLocation + " " + emailaddress + " " + phonenumber);
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