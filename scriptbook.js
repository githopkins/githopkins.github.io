// Variables to drop HTML below:
var covid = '<div id="covid-warning"><h4>To those affected by COVID-19</h4><div id="covid-warning-container"><p>We are available to review your options with you and explain how to apply for relief. Borrowers interested in contacting AnnieMac to discuss payment assistance during the COVID19 pandemic can reach us using the options below.</p><a href="tel:877-204-1868">Call</a> <a href="mailto:CustomerService@annie-mac.com">Email</a></div></div>';
var loanOfficerBoxlet = '<div id="team-site-warning">Please find your loan officer from those listed below and click "More Information" to go to their website to apply.</div>';
var dropbanner = '<div id="inserted-banner"><div class="container-section"><h3>' + loanoriginatorname + '<span>' + loanoriginatornmls + '</span></h3><div id="button-container-home" class="container-section"><a href="/testimonial">What People Say About Me</a></div></div></div>';
var fullwidthsidebarlinks = '<div id="links-sidebar-full-width"><h4>Important Links</h4><ul><a href="/page/buyer-guide"><li>First Time Home Buyer</li></a><a href="/page/faq"><li>Frequent Questions</li></a><a href="/mortgage/calculator/affordability"><li>Mortgage Affordability Calculator</li></a><a href="/mortgage/calculator/refinance"><li>Should I Refinance?</li></a><a href="/contact"><li>Contact Me</li></a></ul></div>';

$( document ).ready(function() {
	if ($('body').hasClass('site-type-corporate')) {
		$(covid).insertBefore( $( "#home-provide" ) );
	};
	
	if ($('body').hasClass('site-type-branch')) {
		$(covid).insertBefore( $( "#home-provide" ) );
	};
	var loanoriginatorname = document.querySelector("#originator-core-details-text > h2").innerText;
	var loanoriginatornmls  = document.querySelector("#originator-core-details-text > h4 > span").innerText;
	if ($('body').hasClass('site-type-loan_officer')) {	
		var firstname = loanoriginatorname.split(" ");
		$(dropbanner).insertBefore( $( "#annie_mac-loan-officer" ) );
		$(covid).insertBefore( $( "#biography" ) );
		$(fullwidthsidebarlinks).appendTo( $( "#loan-originator-backdrop" ) );
		$("#we-provide-more-master > h3").text(firstname[0] + ' Provides...');
		$("#biography > div.manager-biography > h2").text('About ' + firstname[0]);
	};
});

	
	// Domains
	// if (
	// 	(window.location.href.indexOf("jamiehannigan.annie-mac.com") > -1) || 		
	// 	(window.location.href.indexOf("joeharrison.annie-mac.com") > -1) || 
	// 	(window.location.href.indexOf("tomfox.annie-mac.com") > -1) || 
	// 	(window.location.href.indexOf("shawnyocum.annie-mac.com") > -1) || 
	// 	(window.location.href.indexOf("raymondmoore.annie-mac.com") > -1) || 
	// 	(window.location.href.indexOf("randyfiocchi.annie-mac.com") > -1) || 
	// 	(window.location.href.indexOf("jamiehannigan.annie-mac.com") > -1) || 
	// 	(window.location.href.indexOf("michaelspillman.annie-mac.com") > -1) || 
	// 	(window.location.href.indexOf("matthewsiderio.annie-mac.com") > -1) || 
	// 	(window.location.href.indexOf("jesseschwager.annie-mac.com") > -1) || 
	// 	(window.location.href.indexOf("jasontrotte.annie-mac.com") > -1) || 
	// 	(window.location.href.indexOf("jasonleibowitz.annie-mac.com") > -1) || 
	// 	(window.location.href.indexOf("edyucis.annie-mac.com") > -1) || 
	// 	(window.location.href.indexOf("dominiccarlucci.annie-mac.com") > -1) || 
	// 	(window.location.href.indexOf("dajshiagibson.annie-mac.com") > -1) || 
	// 	(window.location.href.indexOf("christamartin.annie-mac.com") > -1) || 
	// 	(window.location.href.indexOf("cathymiller.annie-mac.com") > -1) || 
	// 	(window.location.href.indexOf("brianvoytko.annie-mac.com") > -1) || 
	// 	(window.location.href.indexOf("amysodowich.annie-mac.com") > -1) || 
	// 	(window.location.href.indexOf("aarontedrow.annie-mac.com") > -1)
	// 	) {
	// 	$("#navigation-logo > a > img").attr("src", "https://annie-mac.com/uploads/sites/11832/public/7283-SEPT2020_AM-Community-Mortgage-Team-Logo-WEBSITE.png");
	// 	$("#navigation-logo > a > img").css("margin-top", "6px");
	// };
	// if (window.location.href.indexOf("themtgco.com") > -1) {	
	// 	// $("body > nav > div.top-links-header.order-1 > div > a.tel").text("855-559-8651");
	// 	// $("body > nav > div.top-links-header.order-1 > div > a.tel").attr("href", "tel:855-559-8651");
	// }
	// // Team: Autullo
	// if (window.location.href.indexOf("cincinnati.annie-mac.com") > -1) {
	// 	$("#navigation-logo > a > img").attr("src", "https://annie-mac.com/uploads/sites/10713/public/Autullo.png");
	// 	$("#navigation-logo > a > img").css("margin-top", "0px");
	// }
	// // Team: Cartmel Group
	// if (window.location.href.indexOf("indianapolis.annie-mac.com") > -1) {
	// 	$("#navigation-logo > a > img").attr("src", "https://annie-mac.com/uploads/sites/10713/public/Cartmel.png");
	// 	$("#navigation-logo > a > img").css("margin-top", "0px");
	// }
	// // Team: Craig Sanders
	// if (window.location.href.indexOf("hendersonville.annie-mac.com") > -1) {
	// 	$("#navigation-logo > a > img").attr("src", "https://annie-mac.com/uploads/sites/10713/public/CraigSanders.png");
	// 	$("#navigation-logo > a > img").css("margin-top", "5px");
	// }
	// // Team: Northwest Lending
	// if (window.location.href.indexOf("lakeoswego.annie-mac.com") > -1) {
	// 	$("#navigation-logo > a > img").css("margin-top", "5px");
	// }
	// // Team: East Brunswick
	// if (window.location.href.indexOf("eastbrunswick.annie-mac.com") > -1) {
	// 	$("#navigation-logo > a > img").attr("src", "https://annie-mac.com/uploads/sites/10713/public/EastBrunswick.png");
	// 	$("#navigation-logo > a > img").css("margin-top", "6px");
	// }
	// // Team: Hurd Home
	// if (window.location.href.indexOf("newportnews.annie-mac.com") > -1) {
	// 	$("#navigation-logo > a > img").attr("src", "https://annie-mac.com/uploads/sites/10713/public/Hurd.png");
	// 	$("#navigation-logo > a > img").css("margin-top", "4px");
	// }
	// // Team: Jesse Schwager
	// if (window.location.href.indexOf("jesseschwager.annie-mac.com") > -1) {
	// 	$("#navigation-logo > a > img").attr("src", "https://annie-mac.com/uploads/sites/10713/public/JesseSchwager.png");
	// 	$("#navigation-logo > a > img").css("margin-top", "0px");
	// }
	// // Team: Jimmy Valley
	// if (window.location.href.indexOf("jimmyvalley.annie-mac.com") > -1) {
	// 	$("#navigation-logo > a > img").attr("src", "https://annie-mac.com/uploads/sites/10713/public/JimmyValley.png");
	// 	$("#navigation-logo > a > img").css("margin-top", "4px");
	// }
	// // Team: Michelle Miller
	// if (window.location.href.indexOf("warsaw.annie-mac.com") > -1) {
	// 	$("#navigation-logo > a > img").attr("src", "https://annie-mac.com/uploads/sites/10713/public/MichelleMiller.png");
	// 	$("#navigation-logo > a > img").css("margin-top", "4px");
	// }
	// // Team: The Mills Group
	// if (window.location.href.indexOf("crofton.annie-mac.com") > -1) {
	// 	$("#navigation-logo > a > img").attr("src", "https://annie-mac.com/uploads/sites/10713/public/MillsGroup.png");
	// 	$("#navigation-logo > a > img").css("margin-top", "7px");
	// }
	// // Team: Mortgages Diversified
	// if (window.location.href.indexOf("edenprairie.annie-mac.com") > -1) {
	// 	$("#navigation-logo > a > img").attr("src", "https://annie-mac.com/uploads/sites/10713/public/MortgagesDiversified.png");
	// 	$("#navigation-logo > a > img").css("margin-top", "7px");
	// }
	// // Team: The Purchase Pros
	// if (window.location.href.indexOf("wall.annie-mac.com") > -1) {
	// 	$("#navigation-logo > a > img").attr("src", "https://annie-mac.com/uploads/sites/10713/public/PurchasePros.png");
	// 	$("#navigation-logo > a > img").css("margin-top", "0px");
	// }
	// // Team: Team Shealey
	// if (window.location.href.indexOf("katy.annie-mac.com") > -1) {
	// 	$("#navigation-logo > a > img").attr("src", "https://annie-mac.com/uploads/sites/10713/public/Shealey.png");
	// 	$("#navigation-logo > a > img").css("margin-top", "0px");
	// }
	// // Team: The Home Team
	// if (window.location.href.indexOf("stevevetter.annie-mac.com") > -1) {
	// 	$("#navigation-logo > a > img").attr("src", "https://annie-mac.com/uploads/sites/10713/public/TheHomeTeam.png");
	// 	$("#navigation-logo > a > img").css("margin-top", "7px");
	// }
	// // Team: Trye
	// if (window.location.href.indexOf("towson.annie-mac.com") > -1) {
	// 	$("#navigation-logo > a > img").attr("src", "https://annie-mac.com/uploads/sites/10713/public/Trye.png");
	// 	$("#navigation-logo > a > img").css("margin-top", "0px");
	// }
	// // Team: kevinhulsey
	// if (window.location.href.indexOf("kevinhulsey.annie-mac.com") > -1) {
	// 	$("#navigation-logo > a > img").attr("src", "https://annie-mac.com/uploads/sites/10713/public/hulsey.png");
	// 	$("#navigation-logo > a > img").css("margin-top", "3px");
	// }