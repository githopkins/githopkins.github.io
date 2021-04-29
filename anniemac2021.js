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
		$("#agreement-type").text("Contractor Disclaimer Agreement");
		$('input[name=agreement-type]').attr('value', "Contractor Professional Hub Disclaimer Agreement");
		$('#submit-form').click(function(){
			$("#hub-consultant-disclaimer").fadeOut(2500);
			setTimeout(function(){
			   window.location.href='./professional-hub?defaultview=contractor';
		  	} ,2750);
		});
	};
	if (window.location.href.indexOf("professional-disclaimer?profession=consultant") != -1) {
		$("#agreement-type").text("Consultant Disclaimer Agreement");
		$('input[name=agreement-type]').attr('value', "Consultant Professional Hub Disclaimer Agreement");
		$('#submit-form').click(function(){
			$("#hub-consultant-disclaimer").fadeOut(2500);
			setTimeout(function(){
			   window.location.href='./professional-hub?defaultview=consultant';
			} ,2750);
	   });
	};
	if (window.location.href.indexOf("professional-disclaimer?profession=builder") != -1) {
		$("#agreement-type").text("Builder Disclaimer Agreement");
		$('input[name=agreement-type]').attr('value', "Builder Professional Hub Disclaimer Agreement");
		$('#submit-form').click(function(){
			$("#hub-consultant-disclaimer").fadeOut(2500);
		    setTimeout(function(){
			   window.location.href='./professional-hub?defaultview=builder';
		  	},2750);
		});
	};
	if (window.location.href.indexOf("/professional-hub?defaultview=contractor") != -1) {
		$("#builder-filter").toggleClass("filtered-inactive");
		$("#consultant-filter").toggleClass("filtered-inactive");
		$(".consultant-type-consultant").toggleClass("hide");
		$(".consultant-type-builder").toggleClass("hide");
	};
	if (window.location.href.indexOf("/professional-hub?defaultview=consultant") != -1) {
		$("#contractor-filter").toggleClass("filtered-inactive");
		$("#builder-filter").toggleClass("filtered-inactive");
		$(".consultant-type-contractor").toggleClass("hide");
		$(".consultant-type-builder").toggleClass("hide");
	};
	if (window.location.href.indexOf("/professional-hub?defaultview=builder") != -1) {
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