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
	}
	if (window.location.href.indexOf("kevinhulsey") != -1) {
		$("#we-provide-more-2").hide();
		$("#loan-officer-header-call").attr("href", "tel:502-773-1236");
	};
	if (window.location.href.indexOf("edenprairie.annie-mac.com") != -1) {
		$("#titusmhiripiri").addClass("manager-information");
		$("#titusmhiripiri").removeClass("team-member");
		$("#titusmhiripiri").prependTo(".branch-manager-section");
		$("#scottmiller").addClass("manager-information");
		$("#scottmiller").removeClass("team-member");
		$("#scottmiller").prependTo(".branch-manager-section");
	};
	
	if (window.location.href.indexOf("page/linda") != -1) {
		$('link[href="/dev/themes/annie_mac/styles.css"]').prop('disabled', true);
		
		function onSubmitSuccess() {
			$('#push-form').hide();
			$('#thankyou').show();
		}
		
		$("input[type='tel']").each(function() {
			$(this).on("change keyup paste", function(e) {
				var output,
				$this = $(this),
				input = $this.val();
		
				if (e.keyCode != 8) {
					input = input.replace(/[^0-9]/g, '');
					var area = input.substr(0, 3);
					var pre = input.substr(3, 3);
					var tel = input.substr(6, 4);
					if (area.length < 3) {
						output = "(" + area;
					} else if (area.length == 3 && pre.length < 3) {
						output = "(" + area + ")" + " " + pre;
					} else if (area.length == 3 && pre.length == 3) {
						output = "(" + area + ")" + " " + pre + "-" + tel;
					}
					$this.val(output);
				}
			});
		});
		
		$(document).ready(function() {
		
			$("#toggle-captcha").click(function() {
				$(window).scrollTop(0);
			});
		
			function getAllUrlParams(url) {
				var urlString = url ? url.split('?')[1] : window.location.search.slice(1);
				var urlParameters = {};
				if (urlString) {
					var arr = urlString.split('&');
					for (var i = 0; i < arr.length; i++) {
						var a = arr[i].split('=');
						var paramName = a[0];
						var paramValue = typeof(a[1]) === 'undefined' ? true : a[1];
						paramName = paramName.toLowerCase();
						if (paramName.match(/\[(\d+)?\]$/)) {
							var key = paramName.replace(/\[(\d+)?\]/, '');
							if (!urlParameters[key]) urlParameters[key] = [];
							if (paramName.match(/\[\d+\]$/)) {
								var index = /\[(\d+)\]/.exec(paramName)[1];
								urlParameters[key][index] = paramValue;
							} else {
								urlParameters[key].push(paramValue);
							}
						} else {
							if (!urlParameters[paramName]) {
								urlParameters[paramName] = paramValue;
							} else if (urlParameters[paramName] && typeof urlParameters[paramName] === 'string') {
								urlParameters[paramName] = [urlParameters[paramName]];
								urlParameters[paramName].push(paramValue);
							} else {
								urlParameters[paramName].push(paramValue);
							}
						}
					}
				}
				return urlParameters;
			}
			const ContactId = getAllUrlParams().contactid;
			$('#ContactId').attr("value", ContactId);
			const campaignSource = 'Source: ' + getAllUrlParams().utm_source;
			const campaignMedium = 'Medium: ' + getAllUrlParams().utm_medium;
			const campaignCampaign = 'Campaign: ' + getAllUrlParams().utm_campaign;
			const campaignContent = 'Content: ' + getAllUrlParams().utm_content;
			const campaignTerm = 'Term: ' + getAllUrlParams().utm_term;
			var userparameters = [campaignSource, " " + campaignMedium, " " + campaignCampaign, " " + campaignContent, " " + campaignTerm];
			$('#parameters').attr("value", userparameters);
			$('#added-1, #added-2, #added-3, #added-4, #added-5, #added-6').hide();
			$('#Comments').prop("disabled", true);
			$('#Comments').val(userparameters);
			var selections = [userparameters];
			$("#originator-title").change(function() {
				var originatortitle = $(this).val();
				$('#title').val(originatortitle);
			});
			const demos = ['#operational-demo', '#pricing-demo', '#certification-demo', '#marketing-demo', '#reno-certification', '#technology-demo'];
			demos.forEach((demo, index) => {
				const demoSelector = $(demo);
				demoSelector.change(function() {
					if ($(this).is(":checked")) {
						$(`#added-${index + 1}`).fadeToggle("300", "linear");
						var demoValue = demoSelector.val();
						selections.push(" " + demoValue);
					}
					if ($(this).is(':not(:checked)')) {
						$(`#added-${index + 1}`).fadeToggle("300", "linear");
						selections.pop(demoValue);
					}
					$('#Comments').val(selections);
					$('#Comments').attr("value", selections);
					var commentsvalue = $('#Comments').val();
					commentsvalue = commentsvalue.trim();
					$('#Comments').attr("value", commentsvalue);
				});
			});
			$('#event-types').hide();
			$('input[type=radio][value="yes-event"]').on('click', function() {
				if ($(this).prop('checked')) {
					$('#event-types').fadeIn();
				}
			});
			$('input[type=radio][value="no-event"]').on('click', function() {
				if ($(this).prop('checked')) {
					$('#event-types').hide();
				}
			});
		});
	}); 
});