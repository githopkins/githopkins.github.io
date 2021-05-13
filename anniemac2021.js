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
	if (window.location.href.indexOf("/renovation-lead") != -1) {
		$('#submit-form').click(function(){
			$("#construction-lead-capture-section").fadeOut(2500);
			setTimeout(function(){
			   window.location.href='./reno-construction-sent';
			  } ,2750);
		});
	};
	if (window.location.href.indexOf("/construction-lead") != -1) {
		$('#submit-form').click(function(){
			$("#construction-lead-capture-section").fadeOut(2500);
			setTimeout(function(){
			   window.location.href='./reno-construction-sent';
			  } ,2750);
		});
	};
	if (window.location.href.indexOf("/professional-disclaimer?profession=contractor") != -1) {
		$("#builder-agreement-disclaimer").hide();
		$("#agreement-type").text("Contractor Disclaimer Agreement");
		$('input[name=agreement-type]').attr('value', "Contractor Professional Hub Disclaimer Agreement");
		$('#submit-form').click(function(){
			$("#hub-consultant-disclaimer").fadeOut(2500);
			setTimeout(function(){
			   window.location.href='./contractor-hub';
		  	} ,2750);
		});
	};
	if (window.location.href.indexOf("professional-disclaimer?profession=builder") != -1) {
		$("#contractor-agreement-disclaimer").hide();
		$("#agreement-type").text("Builder Disclaimer Agreement");
		$('input[name=agreement-type]').attr('value', "Builder Professional Hub Disclaimer Agreement");
		$('#submit-form').click(function(){
			$("#hub-consultant-disclaimer").fadeOut(2500);
		    setTimeout(function(){
			   window.location.href='./builder-hub';
		  	},2750);
		});
	};
	if (window.location.href.indexOf("-hub") != -1) {
		$("#search-hub").keyup(function() {
			var filter = $(this).val(),
				count = 0;
			$('#hub-grid > div > div > div.company-details > h5').each(function() {
				if ($(this).text().search(new RegExp(filter, "i")) < 0) {
				$(this).parent().parent().hide();
				} 
				else {	
				$(this).parent().parent().show();
				count++;
				}
			});
		});
		var searchvalue = "";
		$("#search-hub").on("keyup change", function(e) {
			searchvalue = $("#search-hub").prop('value');
			if (searchvalue != "") {
				$("#lead-capture-reno-construction > label").text("Displaying results for: " + searchvalue);
			} else {
				$("#lead-capture-reno-construction > label").text("");
			}
		});
	};
	if (window.location.href.indexOf("/hub-onboard") != -1) {
		$("#builder-acceptance-blurb").hide();
		$("#contractor-acceptance-blurb").hide();
	};
	if (window.location.href.indexOf("/hub-onboard?profession=contractor") != -1) {
		$("#contractor-acceptance-blurb").show();
		$("#both-acceptance-blurb").hide();
	};
	if (window.location.href.indexOf("/hub-onboard?profession=builder") != -1) {
		$("#builder-acceptance-blurb").show();
		$("#both-acceptance-blurb").hide();
	};
	if (window.location.href.indexOf("/contractor-hub") != -1) {
		$("#builder-filter").toggleClass("filtered-inactive");
		$("#consultant-filter").toggleClass("filtered-inactive");
		$(".consultant-type-consultant").toggleClass("hide");
		$(".consultant-type-builder").toggleClass("hide");
	};
	if (window.location.href.indexOf("/builder-hub") != -1) {
		$("#consultant-filter").toggleClass("filtered-inactive");
		$("#contractor-filter").toggleClass("filtered-inactive");
		$(".consultant-type-consultant").toggleClass("hide");
		$(".consultant-type-contractor").toggleClass("hide");
	};
	if (window.location.href.indexOf("product-type=fha-203k") != -1) {
		$("#product-type-203k").attr('checked', true);
	};
	if (window.location.href.indexOf("product-type=fha-limited") != -1) {
		$("#product-type-limited").attr('checked', true);
	};
	if (window.location.href.indexOf("product-type=homestyle") != -1) {
		$("#product-type-homestyle").attr('checked', true);
	};
	if (window.location.href.indexOf("product-type=builder-conventional") != -1) {
		$("#product-type-conventional").attr('checked', true);
	};
	if (window.location.href.indexOf("product-type=builder-fha") != -1) {
		$("#product-type-fha").attr('checked', true);
	};
	if (window.location.href.indexOf("product-type=builder-va") != -1) {
		$("#product-type-va").attr('checked', true);
	};
	$('#product-type-203k').click(function(){
		$("#product-type-limited").removeAttr('checked');
		$("#product-type-homestyle").removeAttr('checked');
	});
	$('#product-type-limited').click(function(){
		$('#product-type-203k').removeAttr('checked');
		$("#product-type-homestyle").removeAttr('checked');
	});
	$('#product-type-homestyle').click(function(){
		$('#product-type-203k').removeAttr('checked');
		$("#product-type-limited").removeAttr('checked');
	});
	$('#product-type-conventional').click(function(){
		$("#product-type-fha").removeAttr('checked');
		$("#product-type-va").removeAttr('checked');
	});
	$('#product-type-fha').click(function(){
		$("#product-type-conventional").removeAttr('checked');
		$("#product-type-va").removeAttr('checked');
	});
	$('#product-type-va').click(function(){
		$("#product-type-conventional").removeAttr('checked');
		$("#product-type-fha").removeAttr('checked');
	});
})