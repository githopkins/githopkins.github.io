$(function() {
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
	if ($('body').hasClass('site-type-loan_officer')) {	
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
			var subdomain = domain.replace('.annie-mac.com', '').replace('https://', '').replace('http://', '') + "-branch-listing";
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
	if (window.location.href.indexOf("louisville") != -1) {
		$("#team-display > div.team-member-section").prepend("<div id='' class='team-member'><div id='' class='team-member-information'><h4>Chrissy Pierson</h4><h5>Mortgage Loan Originator</h5><h5>NMLS: 1412881</h5><div id='' class='team-member-portrait' style='background: url(https://annie-mac.com/uploads/sites/10713/public/ChristinaPierson_Selects_0123.jpeg); background-size: cover; background-position: center center; background-repeat: no-repeat;'></div><button class='go flex space-between align-center'><a href='http://chrissypierson.annie-mac.com' class='btn button-main'>More Information</a><i class='fas fa-globe-americas'></i></button><button class='flex space-between align-center'>(513) 769-2038<i class='fas fa-mobile-alt'></i></button><button class='flex space-between align-center'><a href='mailto: cpierson@annie-mac.com'>Email Me</a><i class='fas fa-envelope'></i></button></div></div>");
		var teamMemberReassignedBranchManager = ['#mikeprestigiacomo', '#brianlykins', '#kevinhulsey'];
		for (i = 0; i < teamMemberReassignedBranchManager.length; i++) {
			$(teamMemberReassignedBranchManager[i]).addClass("manager-information");
			$(teamMemberReassignedBranchManager[i]).removeClass("team-member");
			$(teamMemberReassignedBranchManager[i]).prependTo(".branch-manager-section");
		}
	};
	if (window.location.href.indexOf("kevinhulsey") != -1) {
		$("#we-provide-more-2").hide();
		$("#loan-officer-header-call").attr("href", "tel:502-773-1236");
	};
	if (window.location.href.indexOf("winterpark.annie-mac.com") != -1) {
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
	if (window.location.href.indexOf("/get-elevated?bdm=kelsey") != -1) {
		$("#number-id").attr("href", "tel:856-252-0289");
		$("#number-id").text("(856) 252-0289");
		$("#UserId").attr('value', "U6UJ9A0000BF");
		$("#toggle-captcha").click(function(){
			$("#form-content").fadeOut(2500);
			setTimeout(function(){
			   window.location.href='./get-more-thanks?bdm=kelsey';
			  } ,2750);
		});
		$("#download-id-1").attr("href", "https://annie-mac.com/getmore-kelsey");
		$("#download-id-2").attr("href", "https://annie-mac.com/getmore-kelsey");
		$("#booking-id").attr("href", "https://outlook.office365.com/owa/calendar/bk_krauchut@annie-mac.com/bookings/");
	};
	if (window.location.href.indexOf("/get-more-thanks?bdm=kelsey") != -1) {
		$("#number-id").attr("href", "tel:856-252-0289");
		$("#number-id").text("(856) 252-0289");
		$("#download-id-1").attr("href", "https://annie-mac.com/getmore-kelsey");
		$("#download-id-2").attr("href", "https://annie-mac.com/getmore-kelsey");
		$("#booking-id").attr("href", "https://outlook.office365.com/owa/calendar/bk_krauchut@annie-mac.com/bookings/");
	};
	// Stacy Amon
	if (window.location.href.indexOf("/get-elevated?r=s") != -1) {
		$("#number-id").attr("href", "tel:302-273-0795");
		$("#number-id").text("(302) 273-0795");
		$("#UserId").attr('value', "U6UJ9A0000BF");
		$("#toggle-captcha").click(function(){
			$("#form-content").fadeOut(2500);
			setTimeout(function(){
			   window.location.href='./get-more-thanks?r=s';
			  } ,2750);
		});
		$("#download-id-1").attr("href", "https://annie-mac.com/getmore-stacy");
		$("#download-id-2").attr("href", "https://annie-mac.com/getmore-stacy");
		$("#booking-id").attr("href", "https://outlook.office365.com/owa/calendar/bk_samon@annie-mac.com/bookings/");
	};
	if (window.location.href.indexOf("/get-more-thanks?r=s") != -1) {
		$("#number-id").attr("href", "tel:302-273-0795");
		$("#number-id").text("(302) 273-0795");
		$("#download-id-1").attr("href", "https://annie-mac.com/getmore-stacy");
		$("#download-id-2").attr("href", "https://annie-mac.com/getmore-stacy");
		$("#booking-id").attr("href", "https://outlook.office365.com/owa/calendar/bk_samon@annie-mac.com/bookings/");
	};
	// Linda Boyle
	if (window.location.href.indexOf("/get-elevated?r=l") != -1) {
		$("#number-id").attr("href", "tel:856-209-2015");
		$("#number-id").text("(856) 209-2015");
		$("#UserId").attr('value', "U6UJ9A00040G");
		$("#toggle-captcha").click(function(){
			$("#form-content").fadeOut(2500);
			setTimeout(function(){
			   window.location.href='./get-more-thanks?r=l';
			  } ,2750);
		});
		$("#download-id-1").attr("href", "https://annie-mac.com/getmore-linda");
		$("#download-id-2").attr("href", "https://annie-mac.com/getmore-linda");
		$("#booking-id").attr("href", "https://outlook.office365.com/owa/calendar/lboyle1@annie-mac.com/bookings/");
	};
	if (window.location.href.indexOf("/get-more-thanks?r=l") != -1) {
		$("#number-id").attr("href", "tel:856-209-2015");
		$("#number-id").text("(856) 209-2015");
		$("#download-id-1").attr("href", "https://annie-mac.com/getmore-linda");
		$("#download-id-2").attr("href", "https://annie-mac.com/getmore-linda");
		$("#booking-id").attr("href", "https://outlook.office365.com/owa/calendar/lboyle1@annie-mac.com/bookings/");
	};
});