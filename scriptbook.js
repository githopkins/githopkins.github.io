$( document ).ready(function() {
	$('#hide-popover').click(function() {
		$('#beginner-guide-to-mortgages').hide();
	});
	if (localStorage.getItem('hidepodcastpopup') === "0") {
		$('#beginner-guide-to-mortgages').style('display', 'none');
	};
	if ($('body').hasClass('site-type-loan_officer')) {	
		var covid = '<div id="covid-warning"><h4>To those affected by COVID-19</h4><div id="covid-warning-container"><p>We are available to review your options with you and explain how to apply for relief. Borrowers interested in contacting AnnieMac to discuss payment assistance during the COVID19 pandemic can reach us using the options below.</p><a href="tel:877-204-1868">Call</a> <a href="mailto:CustomerService@annie-mac.com">Email</a></div></div>';
		$(covid).insertBefore( $( "#biography" ) );
		var fullwidthsidebarlinks = '<div id="links-sidebar-full-width"><h4>Important Links</h4><ul><a href="/page/buyer-guide"><li>First Time Home Buyer</li></a><a href="/page/faq"><li>Frequent Questions</li></a><a href="/mortgage/calculator/affordability"><li>Mortgage Affordability Calculator</li></a><a href="/mortgage/calculator/refinance"><li>Should I Refinance?</li></a><a href="/contact"><li>Contact Me</li></a></ul></div>';
		$(fullwidthsidebarlinks).appendTo( $( "#loan-originator-backdrop" ) );
		var loanoriginatornumber = document.querySelector("#navigation-sidebar > div:nth-child(2) > a:nth-child(4) > h4").innerText;
		loanoriginatornumber = loanoriginatornumber.substring(1);
		var dropnumber = '<a href="tel:' + loanoriginatornumber + '" target="_self" rel="noreferrer noopener" style="margin-right: 5px; background: #8c8c8c;">Call Me</a>'
		$( dropnumber ).prependTo( $( "#list_12148" ) );
		$('#list_11409').addClass('hide');
		var loanoriginatorname = document.querySelector("#originator-core-details-text > h2").innerText;
		var loanoriginatornmls = document.querySelector("#originator-core-details-text > h4 > span").innerText;
		var dropbanner = '<div id="inserted-banner"><div class="container-section"><h3>' + loanoriginatorname + '<span>' + loanoriginatornmls + '</span></h3><div id="button-container-home" class="container-section"><a href="/testimonial">What People Say About Me</a><div id="mobile-apply"><a href="/loan/apply">Apply Now</a></div></div></div></div>';
		$(dropbanner).insertBefore( $( "#annie_mac-loan-officer" ) );
		var firstname = loanoriginatorname.split(" ");
		$("#we-provide-more-master > h3").text(firstname[0] + ' Provides...');
		$("#biography > div.manager-biography > h2").text('About ' + firstname[0]);
	};
});