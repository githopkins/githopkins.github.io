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
	if (window.location.href.indexOf("annie-mac.com/login") > -1) {
		$(location).attr('href', './');
	}
	if (window.location.href.indexOf("professional-disclaimer") != -1) {
		$('#lead-capture-reno-construction').on('keyup keypress', function(e) {
			var keyCode = e.keyCode || e.which;
			if (keyCode === 13) { 
				e.preventDefault();
				return false;
			}
		});
		$("#time-stamp-agreement").mouseover(function() {
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
			var today = day + "-" + month + "-" + year,
			displayTime = hour + ":" + min; 
			$('#timestamp-marker').attr('value', today + " at " + displayTime); 
		});
	};
	if (window.location.href.indexOf("/professional-disclaimer?profession=contractor") != -1) {
		$("#contractor-form").removeClass("hide");
	}
	if (window.location.href.indexOf("/professional-disclaimer?profession=consultant") != -1) {
		$("#consultant-form").removeClass("hide");
	}
	if (window.location.href.indexOf("/professional-disclaimer?profession=builder") != -1) {
		$("#builder-form").removeClass("hide");
	}
	if (window.location.href.indexOf("/professional-hub?defaultview=contractor") != -1) {
		$("#builder-filter").toggleClass("filtered-inactive");
		$("#consultant-filter").toggleClass("filtered-inactive");
		$(".consultant-type-consultant").toggleClass("hide");
		$(".consultant-type-builder").toggleClass("hide");
	}
	if (window.location.href.indexOf("/professional-hub?defaultview=consultant") != -1) {
		$("#contractor-filter").toggleClass("filtered-inactive");
		$("#builder-filter").toggleClass("filtered-inactive");
		$(".consultant-type-contractor").toggleClass("hide");
		$(".consultant-type-builder").toggleClass("hide");
	}
	if (window.location.href.indexOf("/professional-hub?defaultview=builder") != -1) {
		$("#consultant-filter").toggleClass("filtered-inactive");
		$("#contractor-filter").toggleClass("filtered-inactive");
		$(".consultant-type-consultant").toggleClass("hide");
		$(".consultant-type-contractor").toggleClass("hide");
	}
	if (window.location.href.indexOf("product-type=fha-203k") != -1) {
		$("#lead-capture-reno-construction > div:nth-child(19) > div:nth-child(1) > input[type=checkbox]").attr('checked', true);
	};
	if (window.location.href.indexOf("product-type=fha-limited") != -1) {
		$("#lead-capture-reno-construction > div:nth-child(19) > div:nth-child(2) > input[type=checkbox]").attr('checked', true);
	};
	if (window.location.href.indexOf("product-type=homestyle") != -1) {
		$("#lead-capture-reno-construction > div:nth-child(19) > div:nth-child(3) > input[type=checkbox]").attr('checked', true);
	};
	if (window.location.href.indexOf("product-type=builder-conventional") != -1) {
		$("#lead-capture-reno-construction > div:nth-child(19) > div:nth-child(1) > input[type=checkbox]").attr('checked', true);
	};
	if (window.location.href.indexOf("product-type=builder-fha") != -1) {
		$("#lead-capture-reno-construction > div:nth-child(19) > div:nth-child(2) > input[type=checkbox]").attr('checked', true);
	};
	if (window.location.href.indexOf("product-type=builder-va") != -1) {
		$("#lead-capture-reno-construction > div:nth-child(19) > div:nth-child(3) > input[type=checkbox]").attr('checked', true);
	};
})