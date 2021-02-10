// Variables to drop HTML below:
var loanoriginatorname = document.querySelector("#originator-core-details-text > h2").innerText;
var loanoriginatornmls  = document.querySelector("#originator-core-details-text > h4 > span").innerText;
var firstname = loanoriginatorname.split(" ");
var bookingLinkLoanOriginatorDrop = '<a href="/page/bookings"><button style="background: #78c254">Book</button></a>';
var prequalLinkLoanOriginatorDrop = '<a href="/loan/graphic-prequal"><button>Prequal</button></a>';
var covid = '<div id="covid-warning"><h4>To those affected by COVID-19</h4><div id="covid-warning-container"><p>We are available to review your options with you and explain how to apply for relief. Borrowers interested in contacting AnnieMac to discuss payment assistance during the COVID19 pandemic can reach us using the options below.</p><a href="tel:877-204-1868">Call</a> <a href="mailto:CustomerService@annie-mac.com">Email</a></div></div>';
var lockedAccount = '<p class="locked-account"><a href="mailto:myaccount@annie-mac.com" class="link">Having trouble logging in?</a><br/><a href="https://www.anniemacservicing.com" class="link">Looking to manage a payment?</a></p>';
var loanOfficerBoxlet = '<div id="team-site-warning">Please find your loan officer from those listed below and click "More Information" to go to their website to apply.</div>';
var myservice = '<button><a href="https://www.anniemacservicing.com">Pay My Mortgage</a></button>';
var dropbanner = '<div id="inserted-banner"><div class="container-section"><h3>' + loanoriginatorname + '<span>' + loanoriginatornmls + '</span></h3><div id="button-container-home" class="container-section"><a href="/testimonial">What People Say About Me</a></div></div></div>';
var fullwidthsidebarlinks = '<div id="links-sidebar-full-width"><h4>Important Links</h4><ul><a href="/page/buyer-guide"><li>First Time Home Buyer</li></a><a href="/page/faq"><li>Frequent Questions</li></a><a href="/mortgage/quiz"><li>Assess Your Situation</li></a><a href="/mortgage/calculator/affordability"><li>Mortgage Affordability Calculator</li></a><a href="/mortgage/calculator/refinance"><li>Should I Refinance?</li></a><a href="/contact"><li>Contact Me</li></a></ul></div>';

$(document).ready(function() {
	$("#navigation-sidebar > div:nth-child(2) > a:nth-child(2)").hide();
	// Remove the link for My Mortgage
	// $("#calculators-navigation > a").removeAttr("href");
	$("body > nav > div.top-links-header.order-1 > div > a:nth-child(2)").hide(); 
	$("body > nav > div.top-links-header.order-1 > div > a:nth-child(2) > button").text("My Application");
	$("body > nav > div.top-links-header.order-1 > div > a:nth-child(2)").prepend(myservice);	
	$('#loan-application-nav > li:nth-child(7) > a:nth-child(1) > span:nth-child(1)').text("Final Review");
	$("#loan-officer-wrapper > label:nth-child(1)").text("If you are working with a loan officer, select from below. If not, please skip.");
	// $(".site-type-team #branch-managers > div > div > div > button.go.flex.space-between.align-center").text("Apply On Website");
	
// Login Error
	// $(lockedAccount).insertBefore( $( ".user-login .inner-layout #form > p:nth-child(4)" ) );
	$(".user-login .inner-layout #form  div.alert.alert-error").text("Your email or password is incorrect. Please check your information and try again. Keep in mind, this login is for new applicants. If you are already a borrower of ours, you can manage your account using the manage payment link below. If you are looking to complete your application and  are still having trouble accessing your account, please reach out to us using the link below.");
	
	if (
		(window.location.href.indexOf("jamiehannigan.annie-mac.com") != -1) || 		
		(window.location.href.indexOf("joeharrison.annie-mac.com") != -1) || 
		(window.location.href.indexOf("tomfox.annie-mac.com") != -1) || 
		(window.location.href.indexOf("shawnyocum.annie-mac.com") != -1) || 
		(window.location.href.indexOf("raymondmoore.annie-mac.com") != -1) || 
		(window.location.href.indexOf("randyfiocchi.annie-mac.com") != -1) || 
		(window.location.href.indexOf("jamiehannigan.annie-mac.com") != -1) || 
		(window.location.href.indexOf("michaelspillman.annie-mac.com") != -1) || 
		(window.location.href.indexOf("matthewsiderio.annie-mac.com") != -1) || 
		(window.location.href.indexOf("jesseschwager.annie-mac.com") != -1) || 
		(window.location.href.indexOf("jasontrotte.annie-mac.com") != -1) || 
		(window.location.href.indexOf("jasonleibowitz.annie-mac.com") != -1) || 
		(window.location.href.indexOf("edyucis.annie-mac.com") != -1) || 
		(window.location.href.indexOf("dominiccarlucci.annie-mac.com") != -1) || 
		(window.location.href.indexOf("dajshiagibson.annie-mac.com") != -1) || 
		(window.location.href.indexOf("christamartin.annie-mac.com") != -1) || 
		(window.location.href.indexOf("cathymiller.annie-mac.com") != -1) || 
		(window.location.href.indexOf("brianvoytko.annie-mac.com") != -1) || 
		(window.location.href.indexOf("amysodowich.annie-mac.com") != -1) || 
		(window.location.href.indexOf("aarontedrow.annie-mac.com") != -1)
		)
	{
		$("#navigation-logo > a > img").attr("src", "https://annie-mac.com/uploads/sites/11832/public/7283-SEPT2020_AM-Community-Mortgage-Team-Logo-WEBSITE.png");
		$("#navigation-logo > a > img").css("margin-top", "6px");
	}
	if (window.location.href.indexOf("themtgco.com") != -1) {	
		$("body > nav > div.top-links-header.order-1 > div > a.tel").text("855-559-8651");
		$("body > nav > div.top-links-header.order-1 > div > a.tel").attr("href", "tel:855-559-8651");
	}
	// Team: Barrow		
	 if (window.location.href.indexOf("teambarrow.annie-mac.com") != -1) {	
		 $("#branch-content > h2").text("Team Barrow");		
		 $(document).prop('title', 'Team Barrow');		
		 $("#branch-content > h5 > a.tel").text("(252) 917-8400");
		 $("#branch-content > h5 > a.tel").attr("href", "tel:252-917-8400");
		  var people = $(".team-member");
		  people.each((index, teamMember) => {
			  if (![1].includes(index)) {
				  teamMember.style.display = "none"
			  }
		  })	
		  // Hide options from dropdown on team page that don't include only specified loan originators.		
		 $("#sudoux_mortgagebundle_loanapplicationtype_loan_officer > option").each((i, option) => {		
			 value = option.getAttribute('value');		
			 // The following are the ID values for the loan officers who are able to be seleted from the drop down. Everyone whose ID does not match is hidden.		
			 if (value !== "") {		
				 option.setAttribute('hidden', 'true');		
			 }		
		 })
		 $('#sudoux_mortgagebundle_loanapplicationtype_loan_officer').find('option[value=9069]').attr('selected','selected');
		 $('#loan-officer-wrapper').hide();
	 }

	// Team: Fillyaw
	if (window.location.href.indexOf("teamfillyaw.annie-mac.com") != -1) {
		$("#navigation-logo > a > img").attr("src", "https://annie-mac.com/uploads/sites/10713/public/TeamFillyaw.png");
		$("#navigation-logo > a > img").css("margin-top", "0px");
		$("#branch-content > h2").text("Team Fillyaw");
		$(document).prop('title', 'Team Fillyaw');
		// Hide loan originators who aren't Troy or Michael based on index of all team members.
		var people = $(".team-member");
		people.each((index, teamMember) => {
			if (![0, 2].includes(index)) {
				teamMember.style.display = "none"
			}
		})
		// Hide options from dropdown on team page that don't include only specified loan originators.
		$("#sudoux_mortgagebundle_loanapplicationtype_loan_officer > option").each((i, option) => {
			value = option.getAttribute('value');
			// The following are the ID values for the loan officers who are able to be seleted from the drop down. Everyone whose ID does not match is hidden.
			if (value !== "9246" && value !== "9272") {
				option.setAttribute('hidden', 'true');
			}
		})
	}
	// Team: Bruner - Includes New Smyrna and Winter Park
	if (window.location.href.indexOf("teambruner.annie-mac.com") != -1) {
		$("#branch-content > h2").text("Team Bruner");
		$(document).prop('title', 'Team Bruner');		
	}
	if (window.location.href.indexOf("newsmyrna.annie-mac.com") != -1) {
			$("body > div.team-member-section > div:nth-child(4)").addClass("manager-information");
			$("body > div.team-member-section > div:nth-child(4)").removeClass("team-member");
			$("body > div.team-member-section > div:nth-child(4)").prependTo("#branch-managers");
			$("body > div.team-member-section > div:nth-child(1) > div > button:nth-child(6)").html("(386) 427-3445 <i class='fas fa-mobile-alt'></i>");
			$("body > div.team-member-section > div:nth-child(3) > div > button:nth-child(6)").html("(407) 205-0190 x1816 <i class='fas fa-mobile-alt'></i>");
			$("#branch-managers > div > div > button:nth-child(6)").html("386-427-3445 <i class='fas fa-mobile-alt'></i>");
	}
	if (
		(window.location.href.indexOf("teambruner.annie-mac.com") != -1) || 
		(window.location.href.indexOf("winterpark.annie-mac.com") != -1)
		){
		$("#team-display > div.team-member-section > div:nth-child(2)").addClass("manager-information");
		$("#team-display > div.team-member-section > div:nth-child(2)").removeClass("team-member");
		$("#team-display > div.team-member-section > div:nth-child(2)").prependTo(".branch-manager-section");
		$("#team-display > div.team-member-section > div > div > button:nth-child(6)").html("(407) 205-0190 x1816 <i class='fas fa-mobile-alt'></i>");
		$("#branch-managers > div > div:nth-child(1) > div > button:nth-child(6)").html("(386) 427-3445 <i class='fas fa-mobile-alt'></i>");
	}
	if (window.location.href.indexOf("chesapeake.annie-mac.com") != -1) { 
		$("#team-display > div.team-member-section > div:nth-child(1)").addClass("manager-information");
		$("#team-display > div.team-member-section > div:nth-child(1)").removeClass("team-member");
		$("#team-display > div.team-member-section > div:nth-child(1)").prependTo(".branch-manager-section");
		$("#team-display > h3:nth-child(3)").hide();
	}
	// Team: Autullo
	if (window.location.href.indexOf("cincinnati.annie-mac.com") != -1) {
		$("#navigation-logo > a > img").attr("src", "https://annie-mac.com/uploads/sites/10713/public/Autullo.png");
		$("#navigation-logo > a > img").css("margin-top", "0px");
	}
	// Team: Cartmel Group
	if (window.location.href.indexOf("indianapolis.annie-mac.com") != -1) {
		$("#navigation-logo > a > img").attr("src", "https://annie-mac.com/uploads/sites/10713/public/Cartmel.png");
		$("#navigation-logo > a > img").css("margin-top", "0px");
	}
	// Team: Craig Sanders
	if (window.location.href.indexOf("hendersonville.annie-mac.com") != -1) {
		$("#navigation-logo > a > img").attr("src", "https://annie-mac.com/uploads/sites/10713/public/CraigSanders.png");
		$("#navigation-logo > a > img").css("margin-top", "5px");
	}
	// Team: Northwest Lending
	if (window.location.href.indexOf("lakeoswego.annie-mac.com") != -1) {
		$("#navigation-logo > a > img").css("margin-top", "5px");
	}
	// Team: East Brunswick
	if (window.location.href.indexOf("eastbrunswick.annie-mac.com") != -1) {
		$("#navigation-logo > a > img").attr("src", "https://annie-mac.com/uploads/sites/10713/public/EastBrunswick.png");
		$("#navigation-logo > a > img").css("margin-top", "6px");
	}
	// Team: Hurd Home
	if (window.location.href.indexOf("newportnews.annie-mac.com") != -1) {
		$("#navigation-logo > a > img").attr("src", "https://annie-mac.com/uploads/sites/10713/public/Hurd.png");
		$("#navigation-logo > a > img").css("margin-top", "4px");
	}
	// Team: Jesse Schwager
	if (window.location.href.indexOf("jesseschwager.annie-mac.com") != -1) {
		$("#navigation-logo > a > img").attr("src", "https://annie-mac.com/uploads/sites/10713/public/JesseSchwager.png");
		$("#navigation-logo > a > img").css("margin-top", "0px");
	}
	// Team: Jimmy Valley
	if (window.location.href.indexOf("jimmyvalley.annie-mac.com") != -1) {
		$("#navigation-logo > a > img").attr("src", "https://annie-mac.com/uploads/sites/10713/public/JimmyValley.png");
		$("#navigation-logo > a > img").css("margin-top", "4px");
	}
	// Team: Michelle Miller
	if (window.location.href.indexOf("warsaw.annie-mac.com") != -1) {
		$("#navigation-logo > a > img").attr("src", "https://annie-mac.com/uploads/sites/10713/public/MichelleMiller.png");
		$("#navigation-logo > a > img").css("margin-top", "4px");
	}
	// Team: The Mills Group
	if (window.location.href.indexOf("crofton.annie-mac.com") != -1) {
		$("#navigation-logo > a > img").attr("src", "https://annie-mac.com/uploads/sites/10713/public/MillsGroup.png");
		$("#navigation-logo > a > img").css("margin-top", "7px");
	}
	// Team: Mortgages Diversified
	if (window.location.href.indexOf("edenprairie.annie-mac.com") != -1) {
		$("#navigation-logo > a > img").attr("src", "https://annie-mac.com/uploads/sites/10713/public/MortgagesDiversified.png");
		$("#navigation-logo > a > img").css("margin-top", "7px");
	}
	// Team: The Purchase Pros
	if (window.location.href.indexOf("wall.annie-mac.com") != -1) {
		$("#navigation-logo > a > img").attr("src", "https://annie-mac.com/uploads/sites/10713/public/PurchasePros.png");
		$("#navigation-logo > a > img").css("margin-top", "0px");
	}
	// Team: Team Shealey
	if (window.location.href.indexOf("katy.annie-mac.com") != -1) {
		$("#navigation-logo > a > img").attr("src", "https://annie-mac.com/uploads/sites/10713/public/Shealey.png");
		$("#navigation-logo > a > img").css("margin-top", "0px");
	}
	// Team: The Home Team
	if (window.location.href.indexOf("stevevetter.annie-mac.com") != -1) {
		$("#navigation-logo > a > img").attr("src", "https://annie-mac.com/uploads/sites/10713/public/TheHomeTeam.png");
		$("#navigation-logo > a > img").css("margin-top", "7px");
	}
	// Team: Trye
	if (window.location.href.indexOf("towson.annie-mac.com") != -1) {
		$("#navigation-logo > a > img").attr("src", "https://annie-mac.com/uploads/sites/10713/public/Trye.png");
		$("#navigation-logo > a > img").css("margin-top", "0px");
	}
	// Team: kevinhulsey
	if (window.location.href.indexOf("kevinhulsey.annie-mac.com") != -1) {
		$("#navigation-logo > a > img").attr("src", "https://annie-mac.com/uploads/sites/10713/public/hulsey.png");
		$("#navigation-logo > a > img").css("margin-top", "3px");
	}

	if ($('body').hasClass('site-type-loan_officer')) {	
		$(".site-type-team #team-display").prepend(loanOfficerBoxlet);
		$( covid ).insertBefore( $( "#biography" ) );
	}
});