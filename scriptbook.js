// Variables to drop HTML below:
var bookingLinkLoanOriginatorDrop = '<a href="/page/bookings"><button style="background: #78c254">Book</button></a>';
var prequalLinkLoanOriginatorDrop = '<a href="/loan/graphic-prequal"><button>Prequal</button></a>';
var covid = '<div id="covid-warning"><h4>To those affected by COVID-19</h4><div id="covid-warning-container"><p>We are available to review your options with you and explain how to apply for relief. Borrowers interested in contacting AnnieMac to discuss payment assistance during the COVID19 pandemic can reach us using the options below.</p><a href="tel:877-204-1868">Call</a> <a href="mailto:CustomerService@annie-mac.com">Email</a></div></div>';
var lockedAccount = '<p class="locked-account"><a href="mailto:myaccount@annie-mac.com" class="link">Having trouble logging in?</a><br/><a href="https://www.anniemacservicing.com" class="link">Looking to manage a payment?</a></p>';
var loanOfficerBoxlet = '<div id="team-site-warning">Please find your loan officer from those listed below and click "More Information" to go to their website to apply.</div>';
var myservice = '<button><a href="https://www.anniemacservicing.com">Pay My Mortgage</a></button>';
var dropbanner = '<div id="inserted-banner"><div class="container-section"><h3>You Deserve More.<span>We Provide More.</span></h3></div></div><div id="button-container-home" class="container-section"><a href="/loan/apply">Get Started</a></div>';

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

// Booking link for loan originators:
if ($('body').hasClass('site-type-loan_officer')) {
	$(dropbanner).insertAfter('#site-navigation');
	$( ".manager-biography h2" ).prepend("About ");
	// $("#apply-navigation").css("display", "flex");
	// $("#apply-navigation").css("margin-right", "10px");
	// $("#apply-navigation").css("align-items", "center");

// PREQUAL link for loan originators who request:
if ((window.location.href.indexOf("rudybenitez.annie-mac.com") != -1) || 
	(window.location.href.indexOf("cosmoberardinelli.annie-mac.com") != -1) ||
	(window.location.href.indexOf("ryankennedy.annie-mac.com") != -1)
	){
	$("#apply-navigation").prepend(prequalLinkLoanOriginatorDrop);
	}

if (window.location.href.indexOf(".annie-mac.com/loan/graphic-prequal") != -1) {
	$("#product-banner > h2").text("Pre-Qualify");	
}

// Booking link for loan originators continued:
	$("#apply-navigation").prepend(bookingLinkLoanOriginatorDrop);
}

// Custom appearance for specific Loan Originators
	if (window.location.href.indexOf("jillgranato.annie-mac.com") != -1) {
		$("#branch-banner").css('background-image','url(uploads/sites/10713/public/family-updated.jpeg)');
		$("#branch-banner").css('background-size','cover');
		$("#branch-banner").css('background-position-y','42%')
	}
// GENERAL

$(".site-type-team #team-display").prepend(loanOfficerBoxlet);

// Customizations for site-wide application:
$( covid ).insertBefore( $( "#biography" ) );
// $("#covid-warning span").click(function(){
//   $("#covid-warning-container").toggleClass("hide");
//   $("#covid-warning > h4 > span").addClass("hide");
// });

// Below are team members added who need to be removed from the application because they do not originate.
	// Hide Susie Bruner from application on all locations, in the event someone selects from corporate.
	$('option[value="9443"]').hide();
	$('option[value="9441"]').hide();
	// Hide Terri from application on all locations, in the event someone selects from corporate.
	$('option[value="9442"]').hide();
	$('option[value="9440"]').hide();
	// Hide Robert Fillyaw from application on all locations, in the event someone selects from corporate.
	$('option[value="9115"]').hide();


// Customizations for TEAM Specific pages:
	// Community Mortgage
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
	if (
		(window.location.href.indexOf("louisville.annie-mac.com") != -1) || 
		(window.location.href.indexOf("mylendingrate.com") != -1)
		){
		$("#team-display > div.team-member-section").prepend("<div id='' class='team-member'><div id='' class='team-member-information'><h4>Chrissy Pierson</h4><h5>Mortgage Loan Originator</h5><h5>NMLS: 1412881</h5><div class='team-member-portrait'><img src='http://annie-mac.com/uploads/sites/10713/public/ChristinaPierson_Selects_0123.jpeg' style='border-radius: 4px'></div><button class='go flex space-between align-center'><a href='http://chrissypierson.annie-mac.com' class='btn button-main'>More Information</a><i class='fas fa-globe-americas'></i></button><button class='flex space-between align-center'>(513) 769-2038<i class='fas fa-mobile-alt'></i></button><button class='flex space-between align-center'><a href='mailto: cpierson@annie-mac.com'>Email Me</a><i class='fas fa-envelope'></i></button></div></div>");
		$("#team-display > div.team-member-section > div:nth-child(7)").addClass("manager-information");
		$("#team-display > div.team-member-section > div:nth-child(7)").removeClass("team-member");
		$("#team-display > div.team-member-section > div:nth-child(7)").prependTo(".branch-manager-section");
		$("#team-display > div.team-member-section > div:nth-child(4)").addClass("manager-information");
		$("#team-display > div.team-member-section > div:nth-child(4)").removeClass("team-member");
		$("#team-display > div.team-member-section > div:nth-child(4)").prependTo(".branch-manager-section");
		$("#team-display > div.team-member-section > div:nth-child(2)").addClass("manager-information");
		$("#team-display > div.team-member-section > div:nth-child(2)").removeClass("team-member");
		$("#team-display > div.team-member-section > div:nth-child(2)").prependTo(".branch-manager-section");
		$("#branch-managers > div > div:nth-child(3)").css("order", "-1");
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
// Closing the script.	
});
$(document).ready(function() {
	$("#sudoux_mortgagebundle_loanapplicationtype_income_monthly_0_base").prop("placeholder", "Base");
	$("#sudoux_mortgagebundle_loanapplicationtype_income_monthly_0_overtime").prop("placeholder", "Overtime");
	$("#sudoux_mortgagebundle_loanapplicationtype_income_monthly_0_bonus").prop("placeholder", "Bonus");
	$("#sudoux_mortgagebundle_loanapplicationtype_income_monthly_0_commission").prop("placeholder", "Commission");
	$("#sudoux_mortgagebundle_loanapplicationtype_income_monthly_0_interest").prop("placeholder", "Interest");
	$("#sudoux_mortgagebundle_loanapplicationtype_income_monthly_0_rent_net").prop("placeholder", "Net Rent");
	$("#sudoux_mortgagebundle_loanapplicationtype_income_monthly_0_other").prop("placeholder", "Other");
	$("#sudoux_mortgagebundle_loanapplicationtype_asset_account_0_institution_name").prop("placeholder", "Institution Name");
	$("#sudoux_mortgagebundle_loanapplicationtype_asset_account_0_account_number").prop("placeholder", "Account Number");
	$("#sudoux_mortgagebundle_loanapplicationtype_asset_account_0_balance").prop("placeholder", "Account Balance");
	
	$("#add-asset-account").click(function(){
		$("#sudoux_mortgagebundle_loanapplicationtype_asset_account_1_institution_name").prop("placeholder", "Institution Name");
		$("#sudoux_mortgagebundle_loanapplicationtype_asset_account_1_account_number").prop("placeholder", "Account Number");
		$("#sudoux_mortgagebundle_loanapplicationtype_asset_account_1_balance").prop("placeholder", "Account Balance");
		$("#sudoux_mortgagebundle_loanapplicationtype_asset_account_2_institution_name").prop("placeholder", "Institution Name");
		$("#sudoux_mortgagebundle_loanapplicationtype_asset_account_2_account_number").prop("placeholder", "Account Number");
		$("#sudoux_mortgagebundle_loanapplicationtype_asset_account_2_balance").prop("placeholder", "Account Balance");
		$("#sudoux_mortgagebundle_loanapplicationtype_asset_account_3_institution_name").prop("placeholder", "Institution Name");
		$("#sudoux_mortgagebundle_loanapplicationtype_asset_account_3_account_number").prop("placeholder", "Account Number");
		$("#sudoux_mortgagebundle_loanapplicationtype_asset_account_3_balance").prop("placeholder", "Account Balance");
		$("#add-asset-account").hide();
	});
	$("#add-income-monthly").click(function(){
		$("#sudoux_mortgagebundle_loanapplicationtype_income_monthly_1_base").prop("placeholder", "Base");
		$("#sudoux_mortgagebundle_loanapplicationtype_income_monthly_1_overtime").prop("placeholder", "Overtime");
		$("#sudoux_mortgagebundle_loanapplicationtype_income_monthly_1_bonus").prop("placeholder", "Bonus");
		$("#sudoux_mortgagebundle_loanapplicationtype_income_monthly_1_commission").prop("placeholder", "Commission");
		$("#sudoux_mortgagebundle_loanapplicationtype_income_monthly_1_interest").prop("placeholder", "Interest");
		$("#sudoux_mortgagebundle_loanapplicationtype_income_monthly_1_rent_net").prop("placeholder", "Net Rent");
		$("#sudoux_mortgagebundle_loanapplicationtype_income_monthly_1_other").prop("placeholder", "Other");
		$("#add-income-monthly").hide();
	});
	// $('#sudoux_mortgagebundle_loanapplicationtype_co_borrower_0_birth_date').attr("type", "date");
	// $('#sudoux_mortgagebundle_loanapplicationtype_borrower_employment_0_end_date').attr("type", "date");
    // $('#sudoux_mortgagebundle_loanapplicationtype_borrower_birth_date').removeClass('datepicker hasDatepicker');
	// $('#sudoux_mortgagebundle_loanapplicationtype_borrower_birth_date').attr("type", "date");
	// $("#sudoux_mortgagebundle_loanapplicationtype_borrower_birth_date").prop("placeholder", "MM-DD-YYYY format");
	// $('#sudoux_mortgagebundle_loanapplicationtype_co_borrower_0_birth_date').removeClass('datepicker hasDatepicker');
	// $("#sudoux_mortgagebundle_loanapplicationtype_co_borrower_0_birth_date").prop("placeholder", "MM-DD-YYYY format");
	// $('#sudoux_mortgagebundle_loanapplicationtype_borrower_employment_0_start_date').removeClass('datepicker hasDatepicker');
	// $('#sudoux_mortgagebundle_loanapplicationtype_borrower_employment_0_start_date').attr("type", "date");
	// $("#sudoux_mortgagebundle_loanapplicationtype_borrower_employment_0_start_date").prop("placeholder", "MM-DD-YYYY format");
	// $('#sudoux_mortgagebundle_loanapplicationtype_borrower_employment_0_end_date').removeClass('datepicker hasDatepicker');
    // $("#sudoux_mortgagebundle_loanapplicationtype_borrower_employment_0_end_date").prop("placeholder", "MM-DD-YYYY format");
	
	// var $jqDate = jQuery('.newdatepicker');
	//  $jqDate.bind('keyup','keydown', function(e){
	//  	if(e.which !== 8) {	
	//  		var numChars = $jqDate.val().length;
	//  		if(numChars === 2 || numChars === 5){
	//  			var thisVal = $jqDate.val();
	//  			thisVal += '-';
	//  			$jqDate.val(thisVal);
	//  		}
	//    }
	//  });
	 
	// $( "button" ).click(function() {
	//  	$('#sudoux_mortgagebundle_loanapplicationtype_borrower_employment_1_start_date').removeClass('datepicker hasDatepicker');
	//  	$('#sudoux_mortgagebundle_loanapplicationtype_borrower_employment_1_start_date').attr("type", "date");
	//  	$("#sudoux_mortgagebundle_loanapplicationtype_borrower_employment_1_start_date").prop("placeholder", "MM-DD-YYYY format");
	//  	$('#sudoux_mortgagebundle_loanapplicationtype_borrower_employment_1_end_date').removeClass('datepicker hasDatepicker');
	//  	$('#sudoux_mortgagebundle_loanapplicationtype_borrower_employment_1_end_date').attr("type", "date");
	//  	$("#sudoux_mortgagebundle_loanapplicationtype_borrower_employment_1_end_date").prop("placeholder", "MM-DD-YYYY format");
	//  	$('#sudoux_mortgagebundle_loanapplicationtype_borrower_employment_2_start_date').removeClass('datepicker hasDatepicker');
	//  	$('#sudoux_mortgagebundle_loanapplicationtype_borrower_employment_2_start_date').attr("type", "date");
	//  	$("#sudoux_mortgagebundle_loanapplicationtype_borrower_employment_2_start_date").prop("placeholder", "MM-DD-YYYY format");
	//  	$('#sudoux_mortgagebundle_loanapplicationtype_borrower_employment_2_end_date').removeClass('datepicker hasDatepicker');
	//  	$('#sudoux_mortgagebundle_loanapplicationtype_borrower_employment_2_end_date').attr("type", "date");
	//  	$("#sudoux_mortgagebundle_loanapplicationtype_borrower_employment_2_end_date").prop("placeholder", "MM-DD-YYYY format");
	//  	$('#sudoux_mortgagebundle_loanapplicationtype_borrower_employment_3_start_date').removeClass('datepicker hasDatepicker');
	//  	$('#sudoux_mortgagebundle_loanapplicationtype_borrower_employment_3_start_date').attr("type", "date");
	//  	$("#sudoux_mortgagebundle_loanapplicationtype_borrower_employment_3_start_date").prop("placeholder", "MM-DD-YYYY format");
	//  	$('#sudoux_mortgagebundle_loanapplicationtype_borrower_employment_3_end_date').removeClass('datepicker hasDatepicker');
	//  	$('#sudoux_mortgagebundle_loanapplicationtype_borrower_employment_3_end_date').attr("type", "date");
	//  	$("#sudoux_mortgagebundle_loanapplicationtype_borrower_employment_3_end_date").prop("placeholder", "MM-DD-YYYY format");
	//  	$('#sudoux_mortgagebundle_loanapplicationtype_borrower_employment_4_start_date').removeClass('datepicker hasDatepicker');
	//  	$('#sudoux_mortgagebundle_loanapplicationtype_borrower_employment_4_start_date').attr("type", "date");
	//  	$("#sudoux_mortgagebundle_loanapplicationtype_borrower_employment_4_start_date").prop("placeholder", "MM-DD-YYYY format");
	//  	$('#sudoux_mortgagebundle_loanapplicationtype_borrower_employment_4_end_date').removeClass('datepicker hasDatepicker');
	//  	$('#sudoux_mortgagebundle_loanapplicationtype_borrower_employment_4_end_date').attr("type", "date");
	//  	$("#sudoux_mortgagebundle_loanapplicationtype_borrower_employment_4_end_date").prop("placeholder", "MM-DD-YYYY format");
	//  	$('#sudoux_mortgagebundle_loanapplicationtype_borrower_employment_5_start_date').removeClass('datepicker hasDatepicker');
	//  	$('#sudoux_mortgagebundle_loanapplicationtype_borrower_employment_5_start_date').attr("type", "date");
	//  	$("#sudoux_mortgagebundle_loanapplicationtype_borrower_employment_5_start_date").prop("placeholder", "MM-DD-YYYY format");
	//  	$('#sudoux_mortgagebundle_loanapplicationtype_borrower_employment_5_end_date').removeClass('datepicker hasDatepicker');
	//  	$('#sudoux_mortgagebundle_loanapplicationtype_borrower_employment_5_end_date').attr("type", "date");
	//  	$("#sudoux_mortgagebundle_loanapplicationtype_borrower_employment_5_end_date").prop("placeholder", "MM-DD-YYYY format");
	// });
	// $.each($('input[type=date]'), function() {
	// 	var date = this.value; //Assign the value of date with whatever was filled into the date input fields.
	// 	var year = date.substr(0, 5); //Assign the value of year with the year with the dash at the end
	// 	date = date.slice(5); //Assign the value of date with the year and the dash removed so it is MM-DD
	// 	year = year.slice(0, -1); //Remove the dash from the end of the year.
	// 	var newDate = date + "-" + year; //Assign a new date using the old date concatenated with the year.
	// 	$(this).attr("value", newDate); //Assign the value of the input type date with the new date variable.
	// });
	// $('input[type="date"]').on("change", function(){
	// 	var date = this.value; //Assign the value of date with whatever was filled into the date input fields.
	// 	var year = date.substr(0, 5); //Assign the value of year with the year with the dash at the end
	// 	date = date.slice(5); //Assign the value of date with the year and the dash removed so it is MM-DD
	// 	year = year.slice(0, -1); //Remove the dash from the end of the year.
	// 	var newDate = date + "-" + year; //Assign a new date using the old date concatenated with the year.
	// 	$(this).attr("value", newDate); //Assign the value of the input type date with the new date variable.
	// });
});