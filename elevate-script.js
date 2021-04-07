$(document).ready(function() {

	// Disable conflicting stylesheets.
	$('link[href="/dev/themes/annie_mac/styles.css"]').prop('disabled', true);
	$('link[href="/dev/themes/annie_mac/styles.css"]').attr('disabled', 'disabled');
	$('link[href="/dev/themes/annie_mac/custom.css"]').prop('disabled', true);
	$('link[href="/dev/themes/annie_mac/custom.css"]').attr('disabled', 'disabled');

	$('.accordion-selection').click(function() {
		$('.toggle', this).toggle();
		$('.hide', this).toggle();
		});

	$('#expand-all').click(function() {
		$('.toggle').toggle();
		$('.accordion-selection .hide').toggle();
	});

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
			// Google Click Source ID:
			const gclsrc = 'Google Click ID: ' + getAllUrlParams().gclsrc;
			var userparameters = [gclsrc, " " + campaignSource, " " + campaignMedium, " " + campaignCampaign, " " + campaignContent, " " + campaignTerm];
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