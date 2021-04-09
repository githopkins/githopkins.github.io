$(function() {
	$("div#annie-mac-covid-container").fadeIn(8000);
	$("#consultant-filter").click(function(){
	  $("#consultant-filter").toggleClass("filtered-inactive");
	  $(".consultant-type-consultant").fadeToggle( "slow", "linear" );
	  $(".consultant-type-consultant").toggleClass("hide");
	});
	$("#contractor-filter").click(function(){
	  $("#contractor-filter").toggleClass("filtered-inactive");
	  $(".consultant-type-contractor").fadeToggle( "slow", "linear" );
	  $(".consultant-type-contractor").toggleClass("hide");
	});
	$("#builder-filter").click(function(){
	  $("#builder-filter").toggleClass("filtered-inactive");
	  $(".consultant-type-builder").fadeToggle( "slow", "linear" );
	  $(".consultant-type-builder").toggleClass("hide");
	});	
	$("span#close-covid-warning").click(function(){
		$("div#annie-mac-covid-container").addClass("hide");
		localStorage.setItem("covidwarninghidden", "true");
	});
	if ((localStorage.covidwarninghidden) == "true") {
		$("div#annie-mac-covid-container").hide();
	};
	if (window.location.href.indexOf("product-type=fha-203k") != -1) {
		$("#lead-capture-reno-construction > div:nth-child(6) > div:nth-child(1) > input[type=checkbox]").attr('checked', true);
	};
	if (window.location.href.indexOf("product-type=fha-limited") != -1) {
		$("#lead-capture-reno-construction > div:nth-child(6) > div:nth-child(2) > input[type=checkbox]").attr('checked', true);
	};
	if (window.location.href.indexOf("product-type=homestyle") != -1) {
		$("#lead-capture-reno-construction > div:nth-child(6) > div:nth-child(3) > input[type=checkbox]").attr('checked', true);
	};
	if (window.location.href.indexOf("product-type=builder-conventional") != -1) {
		$("#lead-capture-reno-construction > div:nth-child(6) > div:nth-child(1) > input[type=checkbox]").attr('checked', true);
	};
	if (window.location.href.indexOf("product-type=builder-fha") != -1) {
		$("#lead-capture-reno-construction > div:nth-child(6) > div:nth-child(2) > input[type=checkbox]").attr('checked', true);
	};
	if (window.location.href.indexOf("product-type=builder-va") != -1) {
		$("#lead-capture-reno-construction > div:nth-child(6) > div:nth-child(3) > input[type=checkbox]").attr('checked', true);
	};
})