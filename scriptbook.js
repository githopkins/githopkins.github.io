$(function() {
	var testingsitetrue = ['nickprototype'];
	for (i = 0; i < testingsitetrue.length; i++) {
		if (window.location.href.indexOf(testingsitetrue) != -1) {
			$("body").addClass("testingsite-true");
			console.log("This is a valid testing site.");
		}
	};
	var headeradditional = '<h1 class="header-additional">AnnieMac Home Mortgage</hi>';
	$(headeradditional).prependTo( $( "#site-navigation" ) );
	$('#hide-popover').click(function() {
		$('#beginner-guide-to-mortgages').hide();
		localStorage.setItem('podcastpopuphidden', 'true');
	});
	if ((localStorage.podcastpopuphidden) == "true") {
		$('#beginner-guide-to-mortgages').hide();
		console.log('popup hidden for podcast');
	};
	$('#dismisscovid').click(function() {
		$('#covid-warning').hide();
		localStorage.setItem('covidwarninghidden', 'true');
	});
	if ((localStorage.covidwarninghidden) == "true") {
		$('#covid-warning').hide();
		console.log('covid warning hidden');
	};
	if ($('body').hasClass('site-type-branch')) {	
		$("#team-display > h3:nth-child(1)").text("Branch Management");
	};
	if ($('body').hasClass('site-type-loan_officer')) {
		// if (document.cookie.indexOf("noshowlastoriginator=") < 0) {
		// 	if (document.cookie.indexOf("visitedloanoriginator=") < 0) {
		// 	  const value = window.location.host.split('.')[0];
		// 	  document.cookie = "visitedloanoriginator=" + value + "; path=/; max-age=2592000; domain=.annie-mac.com";
		// 	  var visitedloanoriginatorname = $("#originator-core-details-text > h2").text();
		// 	  document.cookie = "visitedloanoriginatorname=" + visitedloanoriginatorname + "; path=/; max-age=2592000; domain=.annie-mac.com";
		// 	  var loanofficerlastvisited = "https://" + readCookie('visitedloanoriginator') + ".annie-mac.com";
		// 	  console.log("A cookie has been created for " + visitedloanoriginatorname);
		// 	  console.log("A cookie has been created for " + loanofficerlastvisited);
		// 	}
		// }
		var covid = '<div id="covid-warning"><h4>To those affected by COVID-19 <span id="dismisscovid">Dismiss</span></h4><div id="covid-warning-container"><p>We are available to review your options with you and explain how to apply for relief. Borrowers interested in contacting AnnieMac to discuss payment assistance during the COVID19 pandemic can reach us using the options below.</p><a href="tel:877-204-1868">Call</a> <a href="mailto:CustomerService@annie-mac.com">Email</a></div></div>';
		$(covid).insertBefore( $( "#biography" ) );
		$('#dismisscovid').click(function() {
			$('#covid-warning').hide();
			localStorage.setItem('covidwarninghidden', 'true');
		});
		if ((localStorage.covidwarninghidden) == "true") {
			$('#covid-warning').hide();
			console.log('covid warning hidden');
		};
		var fullwidthsidebarlinks = '<div id="links-sidebar-full-width"><div id="sidebar-apply-now"><a href="/loan/apply" id="loan-officer-sidebar-apply">Apply Now</a></div><h4>Important Links</h4><ul><a href="/page/buyer-guide"><li>First Time Home Buyer</li></a><a href="/page/faq"><li>Frequent Questions</li></a><a href="/mortgage/calculator/affordability"><li>Mortgage Affordability Calculator</li></a><a href="/mortgage/calculator/refinance"><li>Should I Refinance?</li></a><a href="/contact"><li>Contact Me</li></a></ul></div>';
		$(fullwidthsidebarlinks).appendTo( $( "#loan-originator-backdrop" ) );
		var loanoriginatornumber = document.querySelector("#navigation-sidebar > div:nth-child(2) > a:nth-child(4) > h4").innerText;
		loanoriginatornumber = loanoriginatornumber.substring(1);
		$('#list_11409').addClass('hide');
		var loanoriginatorname = document.querySelector("#originator-core-details-text > h2").innerText;
		var loanoriginatornmls = document.querySelector("#originator-core-details-text > h4 > span").innerText;
		var dropbanner = '<div id="inserted-banner"><div class="container-section"><h3>' + loanoriginatorname + '<span>' + loanoriginatornmls + '</span></h3><div id="button-container-home" class="container-section"><a href="/testimonial">Testimonials</a><div id="mobile-apply"><a href="/loan/apply" id="loan-officer-header-apply">Apply Now</a></div><div id="mobile-call"><a href="tel:' + loanoriginatornumber + '" id="loan-officer-header-call">Call Now</a></div></div></div></div>';
		if (window.location.href.indexOf("annie-mac.com") > -1) {
			$(dropbanner).insertBefore( $( "#annie_mac-loan-officer" ) );
			var dropnumber = '<a href="tel:' + loanoriginatornumber + '" target="_self" rel="noreferrer noopener" style="margin-right: 5px; background: #8c8c8c;">Call Me</a>'
			$( dropnumber ).prependTo( $( "#list_12148" ) );
		}
		if (window.location.href.indexOf("lofidirect.com") > -1) {
			$(dropbanner).insertBefore( $( "#lofidirect-loan-officer" ) );
			var dropnumber = '<a href="tel:' + loanoriginatornumber + '" target="_self" rel="noreferrer noopener" style="margin-right: 5px; background: #8c8c8c;">Call Me</a>'
			$( dropnumber ).prependTo( $( "#list_12170" ) );
		}
		if (window.location.href.indexOf("themtgco.com") > -1) {
			$(dropbanner).insertBefore( $( "#tmc-loan-officer" ) );
			var dropnumber = '<a href="tel:' + loanoriginatornumber + '" target="_self" rel="noreferrer noopener" style="margin-right: 5px; background: #8c8c8c;">Call Me</a>'
			$( dropnumber ).prependTo( $( "#list_12171" ) );
		}
		var firstname = loanoriginatorname.split(" ");
		$("#we-provide-more-master > h3").text(firstname[0] + ' Provides...');
		$("#biography > div.manager-biography > h2").text('About ' + firstname[0]);
	};
	if(document.URL.indexOf("/branch") >= 0){ 
		const locationBranch = $(".location-listing");
		$( locationBranch ).each(function() {
			var domain = $(this).find( "h4 > a" ).attr('href');
			var subdomain = domain.replace('.annie-mac.com', '').replace('https://', ' ').replace('http://', '') + "-branch-listing";
			(this).id = subdomain;
		});
	};
	if ($('body').hasClass('site-type-branch')) {	
		const branchmanager = $(".manager-information");
		$( branchmanager ).each(function() {
			var domain = $(this).find( "button > a" ).attr('href');
			var subdomain = domain.replace('.annie-mac.com', '').replace('https://', '').replace('http://', '');
			(this).id = subdomain;
		});
		const teamMember = $(".team-member");
		$( teamMember ).each(function() {
			var domain = $(this).find( "button > a" ).attr('href');
			var subdomain = domain.replace('.annie-mac.com', '').replace('https://', '').replace('http://', '');
			(this).id = subdomain;
		});
	};
	if ((window.location.href.indexOf("thecartmelteam") != -1) || (window.location.href.indexOf("indianapolis") != -1)) {
		var businessdevelopment = "<div id='' class='team-member-section'><div class='team-member' id='pamelacherry'><div id='' class='team-member-information'><h4>Pamela Cherry</h4><h5>Business Development Manager</h5><h5>&nbsp;</h5><div id='' class='team-member-portrait' style='background: url(https://annie-mac.com/uploads/sites/10713/public/Pamela.jpeg); background-size: cover; background-position: center center; background-repeat: no-repeat;'></div><button class='flex space-between align-center'>(317) 324-1086<i class='fas fa-mobile-alt'></i></button><button class='flex space-between align-center'><a href='mailto: pcherry@annie-mac.com'>Email Me</a><i class='fas fa-envelope'></i></button></div></div><div class='team-member' id='karenblack'><div id='' class='team-member-information'><h4>Karen Black</h4><h5>Business Development Manager</h5><h5>&nbsp;</h5><div id='' class='team-member-portrait' style='background: url(https://annie-mac.com/uploads/sites/10713/public/karenblack.jpeg); background-size: cover; background-position: center center; background-repeat: no-repeat;'></div><button class='flex space-between align-center'>(317) 578-7611<i class='fas fa-mobile-alt'></i></button><button class='flex space-between align-center'><a href='mailto: kblack@annie-mac.com'>Email Me</a><i class='fas fa-envelope'></i></button></div></div>";
		$(businessdevelopment).appendTo($( "#team-display" ));
	};
	if (window.location.href.indexOf("louisville") != -1) {
		var teamMemberReassignedBranchManager = ['#mikeprestigiacomo', '#brianlykins', '#kevinhulsey'];
		for (i = 0; i < teamMemberReassignedBranchManager.length; i++) {
			$(teamMemberReassignedBranchManager[i]).addClass("manager-information");
			$(teamMemberReassignedBranchManager[i]).removeClass("team-member");
			$(teamMemberReassignedBranchManager[i]).prependTo(".branch-manager-section");
		}
	};
	if (window.location.href.indexOf("scottsynovic") != -1) {
		$("#list_12148 > a:nth-child(1)").attr("href", "tel:303-668-3350");
		$("#biography > div.manager-biography > h2").text("Scott Synovic - Mortgage Loan Originator");
	};
	if (window.location.href.indexOf("kevinhulsey") != -1) {
		$("#we-provide-more-2").hide();
		$("#loan-officer-header-call").attr("href", "tel:502-773-1236");
	};
	if (window.location.href.indexOf("newsmyrna.annie-mac.com") != -1) {
		$("#susiebruner > div > button.go.flex.space-between.align-center").hide();
		$("#susiebruner > div > h5:nth-child(3)").text("Non-Originating");
	};
	if (window.location.href.indexOf("winterpark.annie-mac.com") != -1) {
		$("#robertkube").hide();
		var teamMemberReassignedBranchManager = ['#susiebruner1'];
		for (i = 0; i < teamMemberReassignedBranchManager.length; i++) {
			$(teamMemberReassignedBranchManager[i]).addClass("manager-information");
			$(teamMemberReassignedBranchManager[i]).removeClass("team-member");
			$(teamMemberReassignedBranchManager[i]).prependTo(".branch-manager-section");
			$("#susiebruner1 > div > button.go.flex.space-between.align-center").hide();
			$("#susiebruner1 > div > h5:nth-child(3)").text("Non-Originating");
		}
	};
	if (window.location.href.indexOf("edenprairie.annie-mac.com") != -1) {
		var teamMemberReassignedBranchManager = ['#titusmhiripiri', '#scottmiller'];
		for (i = 0; i < teamMemberReassignedBranchManager.length; i++) {
			$(teamMemberReassignedBranchManager[i]).addClass("manager-information");
			$(teamMemberReassignedBranchManager[i]).removeClass("team-member");
			$(teamMemberReassignedBranchManager[i]).prependTo(".branch-manager-section");
		}
	};
	// Hide branch management if no branch management are present.
	if ($('.branch-manager-section > .manager-information').length < 1) {
		$("#team-display > h3:nth-child(1)").hide();
	};
	// Hide team members if no team members are present.
	if ($('.team-member-section > .team-member').length < 1) {
		$("#team-display > h3:nth-child(3)").hide();
	};
	// BEGIN BDM PAGES
	// Jessica Helwig
	if (window.location.href.indexOf("/get-elevated?r=jessica") != -1) {
		$("#bdm-avatar").css('background', 'url("https://annie-mac.wmmortgageware.com/uploads/sites/10713/public/jessicahelwig.jpeg")');
		$("#bdm-avatar").css('background-size', 'cover');
		$("#bdm-title-name").text("Jessica Helwig");
		$("#bdm-title-email").text("JHelwig@Annie-Mac.com");
		$("#bdm-title-email").attr("href", "mailto:JHelwig@Annie-Mac.com");
		$("#bdm-title-phone").text("(856) 545-1513");
		$("#bdm-title-phone").attr("href", "tel:856-545-1513");
		$("#number-id").attr("href", "tel:856-545-1513");
		$("#number-id").text("(856) 545-1513");
		$("#UserId").attr('value', "U6UJ9A0004CY");
		$("#toggle-captcha").click(function(){
			$("#form-content").fadeOut(2500);
			setTimeout(function(){
			   window.location.href='./get-more-thanks?r=jessica';
			  } ,2750);
		});
		$("#download-id-1").attr("href", "https://annie-mac.com/getmore-jessica");
		$("#download-id-2").attr("href", "https://annie-mac.com/getmore-jessica");
		$("#bdm-contact > h4:nth-child(3)").hide();
		$("#booking-id").attr("href", "https://outlook.office365.com/owa/calendar/bk_samon@annie-mac.com/bookings/");
	};
	if (window.location.href.indexOf("/get-more-thanks?r=jessica") != -1) {
		$("#bdm-avatar").css('background', 'url("https://annie-mac.wmmortgageware.com/uploads/sites/10713/public/jessicahelwig.jpeg")');
		$("#bdm-avatar").css('background-size', 'cover');
		$("#bdm-title-name").text("Jessica Helwig");
		$("#bdm-title-email").text("JHelwig@Annie-Mac.com");
		$("#bdm-title-email").attr("href", "mailto:JHelwig@Annie-Mac.com");
		$("#bdm-title-phone").text("(856) 545-1513");
		$("#bdm-title-phone").attr("href", "tel:856-545-1513");
		$("#number-id").attr("href", "tel:856-545-1513");
		$("#number-id").text("(856) 545-1513");
		$("#download-id-1").attr("href", "https://annie-mac.com/getmore-jessica");
		$("#download-id-2").attr("href", "https://annie-mac.com/getmore-jessica");
		$("#bdm-contact > h4:nth-child(3)").hide();
		// $("#booking-id").attr("href", "https://outlook.office365.com/owa/calendar/bk_samon@annie-mac.com/bookings/");
	};
	// Olivia Bacino
	if (window.location.href.indexOf("/get-elevated?r=olivia") != -1) {
		$("#bdm-avatar").css('background', 'url("https://annie-mac.com/uploads/sites/10713/public/olivia.png")');
		$("#bdm-avatar").css('background-size', 'cover');
		$("#bdm-title-name").text("Olivia Bacino");
		$("#bdm-title-email").text("OBacino@Annie-Mac.com");
		$("#bdm-title-email").attr("href", "mailto:OBacino@Annie-Mac.com");
		$("#bdm-title-phone").text("(856) 242-5749");
		$("#bdm-title-phone").attr("href", "tel:856-242-5749");
		$("#number-id").attr("href", "tel:856-242-5749");
		$("#number-id").text("(856) 242-5749");
		$("#UserId").attr('value', "U6UJ9A00047E");
		$("#toggle-captcha").click(function(){
			$("#form-content").fadeOut(2500);
			setTimeout(function(){
			   window.location.href='./get-more-thanks?r=olivia';
			  } ,2750);
		});
		$("#download-id-1").attr("href", "https://annie-mac.com/getmore-olivia");
		$("#download-id-2").attr("href", "https://annie-mac.com/getmore-olivia");
		$("#bdm-contact > h4:nth-child(3)").hide();
		// $("#booking-id").attr("href", "https://outlook.office365.com/owa/calendar/bk_samon@annie-mac.com/bookings/");
	};
	if (window.location.href.indexOf("/get-more-thanks?r=olivia") != -1) {
		$("#bdm-avatar").css('background', 'url("https://annie-mac.com/uploads/sites/10713/public/olivia.png")');
		$("#bdm-avatar").css('background-size', 'cover');
		$("#bdm-title-name").text("Olivia Bacino");
		$("#bdm-title-email").text("OBacino@Annie-Mac.com");
		$("#bdm-title-email").attr("href", "mailto:OBacino@Annie-Mac.com");
		$("#bdm-title-phone").text("(856) 242-5749");
		$("#bdm-title-phone").attr("href", "tel:856-242-5749");
		$("#number-id").attr("href", "tel:856-242-5749");
		$("#number-id").text("(856) 242-5749");
		$("#download-id-1").attr("href", "https://annie-mac.com/getmore-olivia");
		$("#download-id-2").attr("href", "https://annie-mac.com/getmore-olivia");
		$("#bdm-contact > h4:nth-child(3)").hide();
		// $("#booking-id").attr("href", "https://outlook.office365.com/owa/calendar/bk_samon@annie-mac.com/bookings/");
	};
	// Jeanna Grebinger
	if (window.location.href.indexOf("/get-elevated?r=jeanna") != -1) {
		$("#bdm-avatar").css('background', 'url("https://annie-mac.com/uploads/sites/10713/public/jeanna.jpeg")');
		$("#bdm-avatar").css('background-size', 'cover');
		$("#bdm-title-name").text("Jeanna Grebinger");
		$("#bdm-title-email").text("JGrebinger@Annie-Mac.com");
		$("#bdm-title-email").attr("href", "mailto:JGrebinger@Annie-Mac.com");
		$("#bdm-title-phone").text("(352) 448-2674");
		$("#bdm-title-phone").attr("href", "tel:352-448-2674");
		$("#number-id").attr("href", "tel:352-448-2674");
		$("#number-id").text("(352) 448-2674");
		$("#UserId").attr('value', "U6UJ9A0004CZ");
		$("#toggle-captcha").click(function(){
			$("#form-content").fadeOut(2500);
			setTimeout(function(){
			   window.location.href='./get-more-thanks?r=jeanna';
			  } ,2750);
		});
		$("#download-id-1").attr("href", "https://annie-mac.com/getmore-jeanna");
		$("#download-id-2").attr("href", "https://annie-mac.com/getmore-jeanna");
		$("#booking-id").attr("href", "https://outlook.office365.com/owa/calendar/jgrebinger1@annie-mac.com/bookings/");
	};
	if (window.location.href.indexOf("/get-more-thanks?r=jeanna") != -1) {
		$("#bdm-avatar").css('background', 'url("https://annie-mac.com/uploads/sites/10713/public/jeanna.jpeg")');
		$("#bdm-avatar").css('background-size', 'cover');
		$("#bdm-title-name").text("Jeanna Grebinger");
		$("#bdm-title-email").text("JGrebinger@Annie-Mac.com");
		$("#bdm-title-email").attr("href", "mailto:JGrebinger@Annie-Mac.com");
		$("#bdm-title-phone").text("(352) 448-2674");
		$("#bdm-title-phone").attr("href", "tel:352-448-2674");
		$("#number-id").attr("href", "tel:352-448-2674");
		$("#number-id").text("(352) 448-2674");
		$("#download-id-1").attr("href", "https://annie-mac.com/getmore-jeanna");
		$("#download-id-2").attr("href", "https://annie-mac.com/getmore-jeanna");
		$("#booking-id").attr("href", "https://outlook.office365.com/owa/calendar/jgrebinger1@annie-mac.com/bookings/");
	};
	// Stacy Amon
	if (window.location.href.indexOf("/get-elevated?r=stacy") != -1) {
		$("#bdm-avatar").css('background', 'url("https://annie-mac.com/uploads/sites/10713/public/stacy.jpeg")');
		$("#bdm-avatar").css('background-size', 'cover');
		$("#bdm-title-name").text("Stacy Amon");
		$("#bdm-title-email").text("samon@annie-mac.com");
		$("#bdm-title-email").attr("href", "mailto:samon@annie-mac.com");
		$("#bdm-title-phone").text("(302) 273-0795");
		$("#bdm-title-phone").attr("href", "tel:302-273-0795");
		$("#number-id").attr("href", "tel:302-273-0795");
		$("#number-id").text("(302) 273-0795");
		$("#UserId").attr('value', "U6UJ9A0000BF");
		$("#toggle-captcha").click(function(){
			$("#form-content").fadeOut(2500);
			setTimeout(function(){
			   window.location.href='./get-more-thanks?r=stacy';
			  } ,2750);
		});
		$("#download-id-1").attr("href", "https://annie-mac.com/getmore-stacy");
		$("#download-id-2").attr("href", "https://annie-mac.com/getmore-stacy");
		$("#booking-id").attr("href", "https://outlook.office365.com/owa/calendar/bk_samon@annie-mac.com/bookings/");
	};
	if (window.location.href.indexOf("/get-more-thanks?r=stacy") != -1) {
		$("#bdm-avatar").css('background', 'url("https://annie-mac.com/uploads/sites/10713/public/stacy.jpeg")');
		$("#bdm-avatar").css('background-size', 'cover');
		$("#bdm-title-name").text("Stacy Amon");
		$("#bdm-title-email").text("samon@annie-mac.com");
		$("#bdm-title-email").attr("href", "mailto:samon@annie-mac.com");
		$("#bdm-title-phone").text("(302) 273-0795");
		$("#bdm-title-phone").attr("href", "tel:302-273-0795");
		$("#number-id").attr("href", "tel:302-273-0795");
		$("#number-id").text("(302) 273-0795");
		$("#download-id-1").attr("href", "https://annie-mac.com/getmore-stacy");
		$("#download-id-2").attr("href", "https://annie-mac.com/getmore-stacy");
		$("#booking-id").attr("href", "https://outlook.office365.com/owa/calendar/bk_samon@annie-mac.com/bookings/");
	};
	// Linda Boyle
	if (window.location.href.indexOf("/get-elevated?r=linda") != -1) {
		$("#bdm-avatar").css('background', 'url("https://annie-mac.com/uploads/sites/10713/public/linda-boyle.png")');
		$("#bdm-avatar").css('background-size', 'cover');
		$("#bdm-title-name").text("Linda Boyle");
		$("#bdm-title-email").text("lboyle@annie-mac.com");
		$("#bdm-title-email").attr("href", "mailto:lboyle@annie-mac.com");
		$("#bdm-title-phone").text("(856) 209-2015");
		$("#bdm-title-phone").attr("href", "tel:856-209-2015");
		$("#number-id").attr("href", "tel:856-209-2015");
		$("#number-id").text("(856) 209-2015");
		$("#UserId").attr('value', "U6UJ9A00040G");
		$("#toggle-captcha").click(function(){
			$("#form-content").fadeOut(2500);
			setTimeout(function(){
			   window.location.href='./get-more-thanks?r=linda';
			  } ,2750);
		});
		$("#download-id-1").attr("href", "https://annie-mac.com/getmore-linda");
		$("#download-id-2").attr("href", "https://annie-mac.com/getmore-linda");
		$("#booking-id").attr("href", "https://outlook.office365.com/owa/calendar/lboyle1@annie-mac.com/bookings/");
	};
	if (window.location.href.indexOf("/get-more-thanks?r=linda") != -1) {
		$("#bdm-avatar").css('background', 'url("https://annie-mac.com/uploads/sites/10713/public/linda-boyle.png")');
		$("#bdm-avatar").css('background-size', 'cover');
		$("#bdm-title-name").text("Linda Boyle");
		$("#bdm-title-email").text("lboyle@annie-mac.com");
		$("#bdm-title-email").attr("href", "mailto:lboyle@annie-mac.com");
		$("#bdm-title-phone").text("(856) 209-2015");
		$("#bdm-title-phone").attr("href", "tel:856-209-2015");
		$("#number-id").attr("href", "tel:856-209-2015");
		$("#number-id").text("(856) 209-2015");
		$("#download-id-1").attr("href", "https://annie-mac.com/getmore-linda");
		$("#download-id-2").attr("href", "https://annie-mac.com/getmore-linda");
		$("#booking-id").attr("href", "https://outlook.office365.com/owa/calendar/lboyle1@annie-mac.com/bookings/");
	};
	// Sean King
	if (window.location.href.indexOf("/get-elevated?r=sean") != -1) {
		$("#bdm-avatar").css('background', 'url("https://www.annie-mac.com/uploads/sites/10713/public/sean_king.jpeg")');
		$("#bdm-avatar").css('background-size', 'cover');
		$("#bdm-title-name").text("Sean King");
		$("#bdm-title-email").text("sking@annie-mac.com");
		$("#bdm-title-email").attr("href", "mailto:sking@annie-mac.com");
		$("#bdm-title-phone").text("(856) 229-0639");
		$("#bdm-title-phone").attr("href", "tel:856-229-0639");
		$("#number-id").attr("href", "tel:856-229-0639");
		$("#number-id").text("(856) 229-0639");
		// $("#UserId").attr('value', "U6UJ9A00040G");
		$("#toggle-captcha").click(function(){
			$("#form-content").fadeOut(2500);
			setTimeout(function(){
			   window.location.href='./get-more-thanks?r=sean';
			  } ,2750);
		});
		$("#download-id-1").attr("href", "https://annie-mac.com/getmore-sean");
		$("#download-id-2").attr("href", "https://annie-mac.com/getmore-sean");
		$("#bdm-contact > h4:nth-child(3)").hide();
		// $("#booking-id").attr("href", "https://outlook.office365.com/owa/calendar/sking@annie-mac.com/bookings/");
	};
	if (window.location.href.indexOf("/get-more-thanks?r=sean") != -1) {
		$("#bdm-avatar").css('background', 'url("https://www.annie-mac.com/uploads/sites/10713/public/sean_king.jpeg")');
		$("#bdm-avatar").css('background-size', 'cover');
		$("#bdm-title-name").text("Sean King");
		$("#bdm-title-email").text("sking@annie-mac.com");
		$("#bdm-title-email").attr("href", "mailto:sking@annie-mac.com");
		$("#bdm-title-phone").text("(856) 229-0639");
		$("#bdm-title-phone").attr("href", "tel:856-229-0639");
		$("#number-id").attr("href", "tel:856-229-0639");
		$("#number-id").text("(856) 229-0639");
		$("#download-id-1").attr("href", "https://annie-mac.com/getmore-sean"); 
		$("#download-id-2").attr("href", "https://annie-mac.com/getmore-sean");
		$("#bdm-contact > h4:nth-child(3)").hide();
		// $("#booking-id").attr("href", "https://outlook.office365.com/owa/calendar/sking@annie-mac.com/bookings/");
	};
	// Thanks Kelsey
	if (window.location.href.indexOf("/get-more-thanks?bdm=kelsey") != -1) {
		$("#number-id").attr("href", "tel:856-252-0289");
		$("#number-id").text("(856) 252-0289");
		$("#download-id-1").attr("href", "https://annie-mac.com/getmore-kelsey");
		$("#download-id-2").attr("href", "https://annie-mac.com/getmore-kelsey");
		$("#booking-id").attr("href", "https://outlook.office365.com/owa/calendar/bk_krauchut@annie-mac.com/bookings/");
	};
	// Renovation and Construction
	if (window.location.href.indexOf("/renovation-start") != -1) {
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
			var referred = $("#referred-selection").val();
			$('input[name=referred]').val(referred);
			var windowurl = window.location.href
			var windowurlmessage = "Summary: This lead was captured at " + windowurl
			var nameinput = " Borrower Informaton: The borrower's name is " + $('input[name=name]').val() + ". "
			var borrowerLocation = "The borrower is from " + $('input[name=state]').val() + ". "
			var emailaddress = "Their email address is " + $('input[name=email-address]').val() + ". "
			var phonenumber = "Their phone number is " + $('input[name=phone-number]').val() + ". "
			var producttype = "The product type is " + $('input[name="product-type"]:checked').val() + ". "
			var contractorStatus = "The contractor status is " + $('input[name="contractor-status"]:checked').val() + ". "
			var lotstatus = "The lot status is " + $('input[name="purchase-own"]:checked').val() + ". "
			var referredStatus = "The borrower was referred to us by: " + $('input[name="referred"]').val() + "."
			$("#Personals").val(windowurlmessage + " " + nameinput + " " + borrowerLocation + " " + emailaddress + " " + phonenumber);
			$("#Production").val(producttype + " " + contractorStatus + " " + lotstatus + " " + referredStatus);
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
		$('#submit-form').click(function(){
			$( window ).scrollTop( 30 );
			$("#construction-lead-capture-section").fadeOut(2500);
			setTimeout(function(){
			   window.location.href='./lead-sent';
			  } ,2750);
		});
	};
	if (window.location.href.indexOf("/construction-start") != -1) {
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
			var referred = $("#referred-selection").val();
			$('input[name=referred]').val(referred);
			var windowurl = window.location.href
			var windowurlmessage = "Summary: This lead was captured at " + windowurl
			var nameinput = " Borrower Informaton: The borrower's name is " + $('input[name=name]').val() + ". "
			var borrowerLocation = "The borrower is from " + $('input[name=state]').val() + ". "
			var emailaddress = "Their email address is " + $('input[name=email-address]').val() + ". "
			var phonenumber = "Their phone number is " + $('input[name=phone-number]').val() + ". "
			var producttype = "The product type is " + $('input[name="product-type"]:checked').val() + ". "
			var builderStatus = "The builder status is " + $('input[name="builder-status"]:checked').val() + ". "
			var lotstatus = "The lot status is " + $('input[name="lot-status"]:checked').val() + ". "
			var referredStatus = "The borrower was referred to us by: " + $('input[name="referred"]').val() + "."
			$("#Personals").val(windowurlmessage + " " + nameinput + " " + borrowerLocation + " " + emailaddress + " " + phonenumber);
			$("#Production").val(producttype + " " + builderStatus + " " + lotstatus + " " + referredStatus);
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
		$('#submit-form').click(function(){
			$( window ).scrollTop( 30 );
			$("#construction-lead-capture-section").fadeOut(2500);
			setTimeout(function(){
			   window.location.href='./lead-sent';
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
			   window.location.href='./contractor-hub?agreement=true';
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
			   window.location.href='./builder-hub?agreement=true';
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
	if (window.location.href.indexOf("/professional-onboarding") != -1) {
		$("#builder-acceptance-blurb").hide();
		$("#contractor-acceptance-blurb").hide();
	};
	if (window.location.href.indexOf("/professional-onboarding?profession=contractor") != -1) {
		$("#contractor-acceptance-blurb").show();
		$("#both-acceptance-blurb").hide();
	};
	if (window.location.href.indexOf("/professional-onboarding?profession=builder") != -1) {
		$("#builder-acceptance-blurb").show();
		$("#both-acceptance-blurb").hide();
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