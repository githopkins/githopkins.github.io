// Variables to drop HTML below:
var loanoriginatorname = document.querySelector("#originator-core-details-text > h2").innerText;
var loanoriginatornmls = document.querySelector("#originator-core-details-text > h4 > span").innerText;
var loanoriginatornumber = document.querySelector("#navigation-sidebar > div:nth-child(2) > a:nth-child(4) > h4").innerText;
loanoriginatornumber = loanoriginatornumber.substring(1);
var covid = '<div id="covid-warning"><h4>To those affected by COVID-19</h4><div id="covid-warning-container"><p>We are available to review your options with you and explain how to apply for relief. Borrowers interested in contacting AnnieMac to discuss payment assistance during the COVID19 pandemic can reach us using the options below.</p><a href="tel:877-204-1868">Call</a> <a href="mailto:CustomerService@annie-mac.com">Email</a></div></div>';
var loanOfficerBoxlet = '<div id="team-site-warning">Please find your loan officer from those listed below and click "More Information" to go to their website to apply.</div>';
var dropbanner = '<div id="inserted-banner"><div class="container-section"><h3>' + loanoriginatorname + '<span>' + loanoriginatornmls + '</span></h3><div id="button-container-home" class="container-section"><a href="/testimonial">What People Say About Me</a></div></div></div>';
var fullwidthsidebarlinks = '<div id="links-sidebar-full-width"><h4>Important Links</h4><ul><a href="/page/buyer-guide"><li>First Time Home Buyer</li></a><a href="/page/faq"><li>Frequent Questions</li></a><a href="/mortgage/calculator/affordability"><li>Mortgage Affordability Calculator</li></a><a href="/mortgage/calculator/refinance"><li>Should I Refinance?</li></a><a href="/contact"><li>Contact Me</li></a></ul></div>';
var dropnumber = '<a href="tel:' + loanoriginatornumber + '" target="_self" rel="noreferrer noopener" style="margin-right: 5px">' + loanoriginatornumber + '</a>'

$( document ).ready(function() {
	if ($('body').hasClass('site-type-loan_officer')) {	
		var firstname = loanoriginatorname.split(" ");
		$(dropbanner).insertBefore( $( "#annie_mac-loan-officer" ) );
		$( dropnumber ).prependTo( $( "#list_12148" ) );
		$(covid).insertBefore( $( "#biography" ) );
		$('#list_11409').addClass('hide');
		$(fullwidthsidebarlinks).appendTo( $( "#loan-originator-backdrop" ) );
		$("#we-provide-more-master > h3").text(firstname[0] + ' Provides...');
		$("#biography > div.manager-biography > h2").text('About ' + firstname[0]);
	};
});