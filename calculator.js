
const ERROR_ZIP_EMPTY = 'Please enter your zip code';
const ERROR_ZIP_FORMAT = 'Your zip code must contain only numbers, formatted like: 48152';
const ERROR_REJECT_CLASS = 'form-validation-alert';
var zipCache = {};
/**
 *
 * @param jQuery $form
 * @param string fieldParentSelector CSS selector for the fields parent
 * @param string messageSelector CSS selector for the fields' validation message.
 * @constructor
 */
function Validation(_, $form, fieldParentSelector, messageSelector) {
	this.$form = $form;
	this.fieldsToValidate = this.$form.find("[data-validation]");

	this.fieldsToValidate.each(function () {
		var $field = $(this),
			$parent = $field.closest(fieldParentSelector),
			$messageField = $parent.find(messageSelector),
			validator = Validation.prototype[this.dataset.validation];

		Validation.prototype.appendValidator(
			validator,
			$field,
			$messageField,
			$parent
		);
	});

	// Attach the validation method to the form.
	this.$form.validation = Validation.prototype.validate;

	this.moduleName = 'Validation';

	// Quickly clear errors when correct input is seen
	this.$form.on('keyup', '[data-validation]', _.debounce(function (e) {
		//Dont validate if no key was entered was nothing AND tab
		if (e.which !== 0 && e.which !== 9) {
			var field = e.target;
				field.validate();
		}
	}, 200));

	// Quickly clear errors when correct input is seen ... for dropdown
	this.$form.on('change', 'select[data-validation], :checkbox', _.debounce(function (e) {
		var field = e.target;
			field.validate();
	}, 200));
};
Validation.prototype.addValidator = function () {
	"use strict";

}

/**
 * Append a validator to a DOM element, that when run will validate the element.
 *
 * When the element is invalid, an error message will be displayed in the DOM
 * message element.
 *
 * @param validatorName Name of the validator function to run on the element.
 *        See methods attached to the prototype chain of this class.
 * @param jQuery $field A jQuery wrapped HTML DOM element object.
 * @param HTMLElement message
 * @param jQuery parent A jQuery wrapped HTML DOM element object.
 */
Validation.prototype.appendValidator = function (validator, $field, message, parent) {
	// Attaches the method to the actual DOM element, not the jQuery wrapper.
	$field[0]['validate'] = function () {
		var deferred, result, fieldName,fieldValue, radioFields, checkFields;

		fieldName = $field.attr("name");

		// the fields for radio
		radioFields = ['includeVa'];

		// the fields for checkBox
		checkFields = ['tcpaCompliant'];

		if (radioFields.indexOf(fieldName) >= 0) {
		  fieldValue = $('input:radio[name=' + fieldName + ']:checked').val();
		} else if (checkFields.indexOf(fieldName) >= 0) {
		  fieldValue = $('input[type=checkbox][name=' + fieldName + ']').is(':checked');
		} else {
		  fieldValue = $field.val();
		}

		deferred = new $.Deferred();
		result = validator(fieldValue, message);

		if (result === true) {
			parent.removeClass(ERROR_REJECT_CLASS);
			deferred.resolve();
		} else if (result === false) {
			parent.addClass(ERROR_REJECT_CLASS);
			deferred.reject(result);
		} else if (result.then) { //This is used to wait for other promises, eg zip code validation
			result.then(function () {
				parent.removeClass(ERROR_REJECT_CLASS);
				deferred.resolve();
			 },
			function (failMessage) {
				parent.addClass(ERROR_REJECT_CLASS);
				deferred.reject(result);
			});
		}

		return deferred.promise();
	}
};

/**
 * Validate all fields, return promise which will resolve if all pass and reject otherwise
 * When the optional argument $field is passed, only validate that field
 */
Validation.prototype.validate = function () {
	var promises, moduleName;

	promises = [];
	moduleName = this.moduleName;

	this.fieldsToValidate.each(function () {
		var $element = $(this),
			promise;

		promise = this.validate();

		// We want to show the error message when a validator fails.
		promise.fail(function (message) {
			$element.trigger('invalid.' + moduleName, [message]);
		});
		promise.done(function () {
			$element.trigger('valid.' + moduleName);
		});

		promises.push(promise);
	});

	// This overall promise resolves when every validator on every element passes
	return $.when.apply($, promises);
};

Validation.prototype.validators = {};

/**
 * Run the parts of a phone number through validation.
 *
 * Note: Some of the rules follow NANPA, others are custom.
 *
 * NANP numbers are ten-digit numbers consisting of a three-digit Numbering
 * Plan Area (NPA) code, commonly called an area code, followed by a
 * seven-digit local number. The format is usually represented as
 *                      NXX-NXX-XXXX
 * where N is any digit from 2 through 9 and X is any digit from 0 through
 * 9.
 * see: http://www.nanpa.com/about_us/abt_nanp.html
 *
 * @param string areaCode
 * @param string prefix
 * @param string suffix
 *
 * @return bool
 */
function isPhoneValid(areaCode, prefix, suffix) {
	var phoneNo = (prefix + suffix).toString();
	// Area code first digit cannot be 0 or 1, and the second digit cannot be a 9.
	if (/[2-9][0-8][0-9]/.test(areaCode)
		// Area code last 2 digits can only be equal when the first digit is an 8.
		&& !(areaCode.charAt(0) !== '8' && areaCode.charAt(1) === areaCode.charAt(2))
		// Area code must contain 3 digits, and cannot begin with 0 or 1.
		&& /[2-9][0-9]{2}/.test(areaCode)
		// Exchange code must contain 3 digits, and cannot begin with 0 or 1.
		&& /[2-9][0-9]{2}/.test(prefix)
		// Verify the information number was not entered.
		&& phoneNo !== '5551212'
		// Subscriber number must be 4 digits.
		&& /[0-9]{4}/.test(suffix)
		// Check all numbers are not the same.
		&& !/^(\d)\1*$/.test(phoneNo)) {
		return true;
	}
	return false;
}

Validation.prototype.zipWithAVS = function (zip, $messageField) {
	var d = new $.Deferred(), promise;

	$messageField.html('');

	if (zip.length === 0) {
		d.reject(ERROR_ZIP_EMPTY);
		promise = d.promise();
	} else if (!ql.regex.ZIPCODE.test(zip)) {
		d.reject(ERROR_ZIP_FORMAT);
		promise = d.promise();
	} else {
		promise = avsLookup(zip, d);
	}

	return promise.then(function() {
	}, function (failMessage) {
		$messageField.html(failMessage);
	});
}

var avsLookup = function (zip, d) {
	var name = 'zipCode', //This is what the endpoint needs, not the name of the input on the page
		postData = {},
		jqXHR;

	// Return cached validation result if available
	if (zipCache[zip] !== undefined) {
		return zipCache[zip];
	}

	postData[name] = zip;

	jqXHR = $.ajax({
		url: '/zip-avs-validation',
		beforeSend: function (xhr) {
			xhr.setRequestHeader('ACTION_APPENDITURE', 'JSON');
		},
		dataType: 'json',
		type: 'POST',
		data: postData
	});

	jqXHR.done(function (response) {
		if (response.hasOwnProperty('valid') && response['valid'] !== true && response['valid'] !== '') {
			d.reject(response['errorMessage']);
		} else {
			d.resolve();
		}
	});

	jqXHR.fail(function () {
		// If ajax request fails, assume zip is valid, let server return error on form submission
		d.resolve();
	});

	zipCache[zip] = d.promise(); // Cache

	return d.promise();
}

/**
 * Validate home value.
 */
Validation.prototype.homeValue = function (homeValue, $messageField) {
	var message = "";

	if (homeValue.length < 1) {
		message = "Please select your home's value.";
	}

	$messageField.html(message);

	return message.length === 0;
};

/**
 * Validate home value.
 */
Validation.prototype.homeEstValue = function (homeEstValue, $messageField) {
	var message = "";

	if (homeEstValue.length < 1) {
		message = "Please enter your estimated home value.";
	}

	$messageField.html(message);

	return message.length === 0;
};

/**
 * Validate empty field.
 *
 * @param value
 * @param $messageField
 * @returns {boolean}
 */
Validation.prototype.downPayment = function (value, $messageField) {
	var downPayment = parseFloat(value.replace(/,/g, ''), 10),
		purchasePrice = parseFloat($('[name="purchase[PurchasePrice]"], [data-validation="purchasePrice"]').val().replace(/,/g, ''), 10),
		minLTV,
		useVALoans,
		minPercentDown = 0.03,
		format = /(\d)(?=(\d{3})+\.)/g,
		message = "",
		loanAmount;

	if (isNaN(downPayment)) {
		message = "Please enter the down payment amount.";
		$messageField.html(message);
		return false;
	}

	// Its done this way to prevent an error message from prematurely
	// popping up.
	if (!isNaN(purchasePrice)) {

		// No need for a loan when you have all the monies.
		if (downPayment >= purchasePrice) {
			message =  "Your down payment $"
				+ downPayment.toFixed(2).replace(format, '$1,').replace(/\.\d+/, '')
				+ " must be less than the purchase price $"
				+ purchasePrice.toFixed(2).replace(format, '$1,').replace(/\.\d+/, '');
			$messageField.html(message);
			return false;
		}

		loanAmount = purchasePrice - downPayment;
		if (loanAmount < 25000 || loanAmount > 3000000) {
			message =  "Loan amount must be $25,000 - $3,000,000";
			$messageField.html(message);
			return false;
		}

		useVALoans = $('[name="purchase[UseVALoans]"], [data-validation="useVALoans"]').val();
		if (useVALoans == '' || typeof useVALoans === 'undefined') {
			useVALoans = $('#purchase_UseVALoans').val();
		}

		// for the purchase calc
		if (useVALoans == '' || typeof useVALoans === 'undefined') {
			useVALoans = $('input:radio[name=includeVa]:checked').val();
			if (typeof useVALoans === 'undefined') {
			  useVALoans = $('input:radio[name=includeVaPurch]:checked').val();
			}
		}

		// for the lead form
		if (useVALoans == '' || typeof useVALoans === 'undefined') {
			useVALoans = $('#vaEligible').val();
		}

		if (useVALoans !== '1') {
			// calculate minimum down payment based on shared copy value.
			minLTV = purchasePrice * minPercentDown;
			// The down payment is not enough.
			if (downPayment < minLTV) {
				message =  "You need at least $"
					+ minLTV.toFixed(2).replace(format, '$1,').replace(/\.\d+/, '')
					+ " for a down payment.";
				$messageField.html(message);
				return false;
			}
		}
	}

	$messageField.html(message);
	return true;
};

Validation.prototype.purchasePrice = function (value, $messageField) {
	var purchasePrice = parseFloat(value, 10),
		$downPayment = $('[name="purchase[DownPayment]"], [data-validation="downPayment"]'),
		downPayment = parseFloat($downPayment.val().replace(/,/g, ''), 10),
		message = "";

	if (isNaN(purchasePrice)) {
		$messageField.html("Please enter your purchase price.");
		return false;
	}

	// trigger down-payment validation if it has been altered by the client.
	if (!isNaN(downPayment) && downPayment != '') {
		$downPayment.trigger('blur');
	}

	$messageField.html(message);
	return true;
};

/**
 * Validate city.
 * @param city
 * @param $messageField
 * @returns {boolean}
 */
Validation.prototype.city = function (city, $messageField) {
	var message = '';

	if (city.length < 1) {
		message = "Please enter your city";
	} else if (!ql.regex.LOLA_CITY.test(city)) {
		message = "Your city must only contain letters.";
	}

	$messageField.html(message);

	return message.length === 0;
};

/**
 * Validate firstName.
 * @param firstName
 * @param $messageField
 * @returns {boolean}
 */
Validation.prototype.firstName = function (firstName, $messageField) {
	var message = '';

	if (firstName.length < 1) {
		message = "Please enter your first name.";
	} else if (!ql.regex.LOLA_NAME.test(firstName)) {
		message = "Your first name must only contain letters.";
	}

	$messageField.html(message);

	return message.length === 0;
};

/**
 * Validate lastName.
 * @param lastName
 * @param $messageField
 * @returns {boolean}
 */
Validation.prototype.lastName = function (lastName, $messageField) {
	var message = '';

	if (lastName.length < 1) {
		message = "Please enter your last name.";
	} else if (!ql.regex.LOLA_NAME.test(lastName)) {
		message = "Your last name must only contain letters.";
	}

	$messageField.html(message);

	return message.length === 0;
};

/**
 * Validate homePhone.
 * @param homePhone
 * @param $messageField
 * @returns {boolean}
 */
Validation.prototype.homePhone = function (homePhone, $messageField) {
	var homePhone = $('#homePhone').val(),
		phone3 = homePhone.split('-'),
		areaCode = phone3[0],
		prefix = phone3[1],
		suffix = phone3[2],
		message = '';

	if (!isPhoneValid(areaCode, prefix, suffix)) {
		message = "Please enter a valid phone number.";
	}

	$messageField.html(message);

	return message.length === 0;
};

/**
 * Validate mortgage goal
 *
 * @param goal
 * @param $messageField
 * @returns {boolean}
 */
Validation.prototype.mortgageGoal = function (goal, $messageField) {
	var message = "";

	if (goal.length < 1) {
		message = "Please choose one.";
	}

	$messageField.html(message);

	return message.length === 0;
};

/**
 * Validate loan amount
 *
 * @param loanAmount
 * @param homeValue
 * @param $messageField
 * @returns {boolean}
 */
Validation.prototype.loanAmount = function (loanAmount, $messageField) {
  var maxLTV, message = "";
  var homeValue = $('[name="homeValue"], [data-validation="homeValue"]');

  if (loanAmount.length < 1) {
	message = "Please select your loan amount.";
  } else if (homeValue.length > 0) {
	maxLTV = parseInt(homeValue, 10) * 2.00;

	// Your cannot borrow more than twice the value of your home.
	if (loanAmount > maxLTV) {
	  message = "The amount you want to borrow can't be more than 200% of your home's value."
	}
  }

  $messageField.html(message);

  return message.length === 0;
};

/**
 * Validate purchase reason
 *
 * @param purchaseReason
 * @param $messageField
 * @returns {boolean}
 */
Validation.prototype.purchaseReason = function (purchaseReason, $messageField) {
	var message = "";

	if (purchaseReason.length < 1) {
		message = "Please choose one.";
	}

	$messageField.html(message);

	return message.length === 0;
};

/**
 * Validate leasing
 *
 * @param leasing
 * @param $messageField
 * @returns {boolean}
 */
Validation.prototype.leasing = function (leasing, $messageField) {
	var message = "";

	if (leasing.length < 1) {
		message = "Please select a response.";
	}

	$messageField.html(message);

	return message.length === 0;
};

/**
 * Validate leasing month
 *
 * @param leasingMonth
 * @param $messageField
 * @returns {boolean}
 */
Validation.prototype.leasingMonth = function (leasingMonth, $messageField) {
	var message = "";

	if (leasingMonth.length < 1) {
		message = "Please select the month your lease expires.";
	}

	$messageField.html(message);

	return message.length === 0;
};

/**
 * Validate leasing moyearnth
 *
 * @param leasingYear
 * @param $messageField
 * @returns {boolean}
 */
Validation.prototype.leasingYear = function (leasingYear, $messageField) {
	var message = "";

	if (leasingYear.length < 1) {
		message = "Please select the year your lease expires.";
	}

	$messageField.html(message);

	return message.length === 0;
};

/**
 * Validate real estate agent
 *
 * @param realEstateAgent
 * @param $messageField
 * @returns {boolean}
 */
Validation.prototype.realEstateAgent = function (realEstateAgent, $messageField) {
	var message = "";

	if (realEstateAgent.length < 1) {
		message = "Please choose one.";
	}

	$messageField.html(message);

	return message.length === 0;
};

/**
 * Validate generic radio button
 *
 * @param includeVa
 * @param $messageField
 * @returns {boolean}
 */
Validation.prototype.radioChecked = function (value, $messageField) {
  var message = '';

  if (typeof value === 'undefined') {
	message = "Please select an option above.";
  }

  $messageField.html(message);

  return message.length === 0;
};

/**
 * Validate generic radio button
 *
 * @param includeVa
 * @param $messageField
 * @returns {boolean}
 */
Validation.prototype.checkboxChecked = function (value, $messageField) {
  var message = '';
  if (typeof value === 'undefined' || value === false) {
	message = "Please check option above.";
  }

  $messageField.html(message);

  return message.length === 0;
};

/**
 * Validate email.
 * @param email
 * @param $messageField
 * @returns {boolean}
 */
Validation.prototype.email = function (email, $messageField) {
	var message = '';

	if (email.length === 0) {
		message = "Please enter your email address.";
	}

	if (!ql.regex.EMAIL.test(email)) {
		message = "Your email address must be entered in the following format: example@example.com.";
	}

	$messageField.html(message);

	return message.length === 0;
}

/**
 * Validate state.
 * @param state
 * @param $messageField
 * @returns {boolean}
 */
Validation.prototype.state = function (state, $messageField) {
	var message = "";

	if (state.length < 1) {
		message = "Please choose your state.";
	}

	$messageField.html(message);

	return message.length === 0;
};

/**
 * Validate zip code.
 * @param zip
 * @param $messageField
 * @returns {boolean}
 */
Validation.prototype.zip = function (zip, $messageField) {
	var message = '';

	if (zip.length === 0) {
		message = ERROR_ZIP_EMPTY;
	}

	if (!ql.regex.ZIPCODE.test(zip)) {
		message = ERROR_ZIP_FORMAT;
	}

	$messageField.html(message);

	return message.length === 0;
}

/**
 * Validate empty field.
 *
 * @param value
 * @param $messageField
 * @returns {boolean}
 */
Validation.prototype.empty = function (value, $messageField) {
	var message = "",
		field = $messageField.prev().children().first().attr('id');

	if (value.length === 0) {
		if (field === 'annualIncome') {
			message = "Please enter your annual income.";
		} else if (field === 'monthlyDebt') {
			message = "Please enter your monthly debt.";
		} else if (field === 'downPayment') {
			message = "Please enter a down payment amount.";
		} else {
			message = "Please enter a value.";
		}
	}

	$messageField.html(message);

	return message.length === 0;
};

/**
 * Validate loan balance.
 *
 * @param value
 * @param $messageField
 * @returns {boolean}
 */
Validation.prototype.loanBalance = function (value, $messageField) {
	var loanBalance = value.replace(/,/g, '');
	var message = "";

	if (value.length === 0) {
		message = "Please enter your current mortgage balance.";
	} else if (loanBalance < 25000 || loanBalance > 3000000) {
		message =  "Loan Balance must be $25,000 - $3,000,000";
	}

	$messageField.html(message);

	return message.length === 0;
};

// Export to node when running in NodeJS environment, for example Jasmine specs
if (typeof module === 'object' && module.hasOwnProperty('exports')) {
	module.exports = Validation;
}

/**
 * Validate credit score.
 *
 * @param creditScore
 * @param $messageField
 * @returns {boolean}
 */
Validation.prototype.creditRating = function (creditScore, $messageField) {
	var message = "";

	if (creditScore.length < 1) {
		message = "Please select your credit rating.";
	}

	$messageField.html(message);

	return message.length === 0;
};

/**
 * Validate credit score.
 *
 * @param heardAboutUs
 * @param $messageField
 * @returns {boolean}
 */
Validation.prototype.heardAboutUs = function (heardAboutUs, $messageField) {
	var message = "";

	if (heardAboutUs.length < 1) {
		message = "Please select how you heard about us.";
	}

	$messageField.html(message);

	return message.length === 0;
};

/**
 * jquery.mask.js
 * @version: v1.14.8
 * @author: Igor Escobar
 *
 * Created by Igor Escobar on 2012-03-10. Please report any bug at http://blog.igorescobar.com
 *
 * Copyright (c) 2012 Igor Escobar http://blog.igorescobar.com
 *
 * The MIT License (http://www.opensource.org/licenses/mit-license.php)
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */

/* jshint laxbreak: true */
/* jshint maxcomplexity:17 */
/* global define */

'use strict';

// UMD (Universal Module Definition) patterns for JavaScript modules that work everywhere.
// https://github.com/umdjs/umd/blob/master/jqueryPluginCommonjs.js
(function (factory, jQuery, Zepto) {

	if (typeof define === 'function' && define.amd) {
		define(['jquery'], factory);
	} else if (typeof exports === 'object') {
		module.exports = factory(require('jquery'));
	} else {
		factory(jQuery || Zepto);
	}

}(function ($) {

	var Mask = function (el, mask, options) {

		var p = {
			invalid: [],
			getCaret: function () {
				try {
					var sel,
						pos = 0,
						ctrl = el.get(0),
						dSel = document.selection,
						cSelStart = ctrl.selectionStart;

					// IE Support
					if (dSel && navigator.appVersion.indexOf('MSIE 10') === -1) {
						sel = dSel.createRange();
						sel.moveStart('character', -p.val().length);
						pos = sel.text.length;
					}
					// Firefox support
					else if (cSelStart || cSelStart === '0') {
						pos = cSelStart;
					}

					return pos;
				} catch (e) {}
			},
			setCaret: function(pos) {
				try {
					if (el.is(':focus')) {
						var range, ctrl = el.get(0);

						// Firefox, WebKit, etc..
						if (ctrl.setSelectionRange) {
							ctrl.setSelectionRange(pos, pos);
						} else { // IE
							range = ctrl.createTextRange();
							range.collapse(true);
							range.moveEnd('character', pos);
							range.moveStart('character', pos);
							range.select();
						}
					}
				} catch (e) {}
			},
			events: function() {
				el
				.on('keydown.mask', function(e) {
					el.data('mask-keycode', e.keyCode || e.which);
					el.data('mask-previus-value', el.val());
				})
				.on($.jMaskGlobals.useInput ? 'input.mask' : 'keyup.mask', p.behaviour)
				.on('paste.mask drop.mask', function() {
					setTimeout(function() {
						el.keydown().keyup();
					}, 100);
				})
				.on('change.mask', function(){
					el.data('changed', true);
				})
				.on('blur.mask', function(){
					if (oldValue !== p.val() && !el.data('changed')) {
						el.trigger('change');
					}
					el.data('changed', false);
				})
				// it's very important that this callback remains in this position
				// otherwhise oldValue it's going to work buggy
				.on('blur.mask', function() {
					oldValue = p.val();
				})
				// select all text on focus
				.on('focus.mask', function (e) {
					if (options.selectOnFocus === true) {
						$(e.target).select();
					}
				})
				// clear the value if it not complete the mask
				.on('focusout.mask', function() {
					if (options.clearIfNotMatch && !regexMask.test(p.val())) {
					   p.val('');
				   }
				});
			},
			getRegexMask: function() {
				var maskChunks = [], translation, pattern, optional, recursive, oRecursive, r;

				for (var i = 0; i < mask.length; i++) {
					translation = jMask.translation[mask.charAt(i)];

					if (translation) {

						pattern = translation.pattern.toString().replace(/.{1}$|^.{1}/g, '');
						optional = translation.optional;
						recursive = translation.recursive;

						if (recursive) {
							maskChunks.push(mask.charAt(i));
							oRecursive = {digit: mask.charAt(i), pattern: pattern};
						} else {
							maskChunks.push(!optional && !recursive ? pattern : (pattern + '?'));
						}

					} else {
						maskChunks.push(mask.charAt(i).replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'));
					}
				}

				r = maskChunks.join('');

				if (oRecursive) {
					r = r.replace(new RegExp('(' + oRecursive.digit + '(.*' + oRecursive.digit + ')?)'), '($1)?')
						 .replace(new RegExp(oRecursive.digit, 'g'), oRecursive.pattern);
				}

				return new RegExp(r);
			},
			destroyEvents: function() {
				el.off(['input', 'keydown', 'keyup', 'paste', 'drop', 'blur', 'focusout', ''].join('.mask '));
			},
			val: function(v) {
				var isInput = el.is('input'),
					method = isInput ? 'val' : 'text',
					r;

				if (arguments.length > 0) {
					if (el[method]() !== v) {
						el[method](v);
					}
					r = el;
				} else {
					r = el[method]();
				}

				return r;
			},
			calculateCaretPosition: function(caretPos, newVal) {
				var newValL = newVal.length,
					oValue  = el.data('mask-previus-value'),
					oValueL = oValue === undefined ? 0 : oValue.length;

				// edge cases when erasing digits
				if (el.data('mask-keycode') === 8 && oValue !== newVal) {
					caretPos = caretPos - (newVal.slice(0, caretPos).length - oValue.slice(0, caretPos).length);

				// edge cases when typing new digits
				} else if (oValue !== newVal) {
					// if the cursor is at the end keep it there
					if (caretPos >= oValueL) {
						caretPos = newValL;
					} else {
						caretPos = caretPos + (newVal.slice(0, caretPos).length - oValue.slice(0, caretPos).length);
					}
				}

				return caretPos;
			},
			behaviour: function(e) {
				e = e || window.event;
				p.invalid = [];

				var keyCode = el.data('mask-keycode');

				if ($.inArray(keyCode, jMask.byPassKeys) === -1) {
					var newVal   = p.getMasked(),
						caretPos = p.getCaret();

					setTimeout(function(caretPos, newVal) {
					  p.setCaret(p.calculateCaretPosition(caretPos, newVal));
					}, 10, caretPos, newVal);

					p.val(newVal);
					p.setCaret(caretPos);
					return p.callbacks(e);
				}
			},
			getMasked: function(skipMaskChars, val) {
				var buf = [],
					value = val === undefined ? p.val() : val + '',
					m = 0, maskLen = mask.length,
					v = 0, valLen = value.length,
					offset = 1, addMethod = 'push',
					resetPos = -1,
					lastMaskChar,
					check;

				if (options.reverse) {
					addMethod = 'unshift';
					offset = -1;
					lastMaskChar = 0;
					m = maskLen - 1;
					v = valLen - 1;
					check = function () {
						return m > -1 && v > -1;
					};
				} else {
					lastMaskChar = maskLen - 1;
					check = function () {
						return m < maskLen && v < valLen;
					};
				}

				var lastUntranslatedMaskChar;
				while (check()) {
					var maskDigit = mask.charAt(m),
						valDigit = value.charAt(v),
						translation = jMask.translation[maskDigit];

					if (translation) {
						if (valDigit.match(translation.pattern)) {
							buf[addMethod](valDigit);
							 if (translation.recursive) {
								if (resetPos === -1) {
									resetPos = m;
								} else if (m === lastMaskChar) {
									m = resetPos - offset;
								}

								if (lastMaskChar === resetPos) {
									m -= offset;
								}
							}
							m += offset;
						} else if (valDigit === lastUntranslatedMaskChar) {
							// matched the last untranslated (raw) mask character that we encountered
							// likely an insert offset the mask character from the last entry; fall
							// through and only increment v
							lastUntranslatedMaskChar = undefined;
						} else if (translation.optional) {
							m += offset;
							v -= offset;
						} else if (translation.fallback) {
							buf[addMethod](translation.fallback);
							m += offset;
							v -= offset;
						} else {
						  p.invalid.push({p: v, v: valDigit, e: translation.pattern});
						}
						v += offset;
					} else {
						if (!skipMaskChars) {
							buf[addMethod](maskDigit);
						}

						if (valDigit === maskDigit) {
							v += offset;
						} else {
							lastUntranslatedMaskChar = maskDigit;
						}

						m += offset;
					}
				}

				var lastMaskCharDigit = mask.charAt(lastMaskChar);
				if (maskLen === valLen + 1 && !jMask.translation[lastMaskCharDigit]) {
					buf.push(lastMaskCharDigit);
				}

				return buf.join('');
			},
			callbacks: function (e) {
				var val = p.val(),
					changed = val !== oldValue,
					defaultArgs = [val, e, el, options],
					callback = function(name, criteria, args) {
						if (typeof options[name] === 'function' && criteria) {
							options[name].apply(this, args);
						}
					};

				callback('onChange', changed === true, defaultArgs);
				callback('onKeyPress', changed === true, defaultArgs);
				callback('onComplete', val.length === mask.length, defaultArgs);
				callback('onInvalid', p.invalid.length > 0, [val, e, el, p.invalid, options]);
			}
		};

		el = $(el);
		var jMask = this, oldValue = p.val(), regexMask;

		mask = typeof mask === 'function' ? mask(p.val(), undefined, el,  options) : mask;

		// public methods
		jMask.mask = mask;
		jMask.options = options;
		jMask.remove = function() {
			var caret = p.getCaret();
			p.destroyEvents();
			p.val(jMask.getCleanVal());
			p.setCaret(caret);
			return el;
		};

		// get value without mask
		jMask.getCleanVal = function() {
		   return p.getMasked(true);
		};

		// get masked value without the value being in the input or element
		jMask.getMaskedVal = function(val) {
		   return p.getMasked(false, val);
		};

	   jMask.init = function(onlyMask) {
			onlyMask = onlyMask || false;
			options = options || {};

			jMask.clearIfNotMatch  = $.jMaskGlobals.clearIfNotMatch;
			jMask.byPassKeys       = $.jMaskGlobals.byPassKeys;
			jMask.translation      = $.extend({}, $.jMaskGlobals.translation, options.translation);

			jMask = $.extend(true, {}, jMask, options);

			regexMask = p.getRegexMask();

			if (onlyMask) {
				p.events();
				p.val(p.getMasked());
			} else {
				if (options.placeholder) {
					el.attr('placeholder' , options.placeholder);
				}

				// this is necessary, otherwise if the user submit the form
				// and then press the "back" button, the autocomplete will erase
				// the data. Works fine on IE9+, FF, Opera, Safari.
				if (el.data('mask')) {
				  el.attr('autocomplete', 'off');
				}

				// detect if is necessary let the user type freely.
				// for is a lot faster than forEach.
				for (var i = 0, maxlength = true; i < mask.length; i++) {
					var translation = jMask.translation[mask.charAt(i)];
					if (translation && translation.recursive) {
						maxlength = false;
						break;
					}
				}

				if (maxlength) {
					el.attr('maxlength', mask.length);
				}

				p.destroyEvents();
				p.events();

				var caret = p.getCaret();
				p.val(p.getMasked());
				p.setCaret(caret);
			}
		};

		jMask.init(!el.is('input'));
	};

	$.maskWatchers = {};
	var HTMLAttributes = function () {
		var input = $(this),
			options = {},
			prefix = 'data-mask-',
			mask = input.attr('data-mask');

		if (input.attr(prefix + 'reverse')) {
			options.reverse = true;
		}

		if (input.attr(prefix + 'clearifnotmatch')) {
			options.clearIfNotMatch = true;
		}

		if (input.attr(prefix + 'selectonfocus') === 'true') {
		   options.selectOnFocus = true;
		}

		if (notSameMaskObject(input, mask, options)) {
			return input.data('mask', new Mask(this, mask, options));
		}
	},
	notSameMaskObject = function(field, mask, options) {
		options = options || {};
		var maskObject = $(field).data('mask'),
			stringify = JSON.stringify,
			value = $(field).val() || $(field).text();
		try {
			if (typeof mask === 'function') {
				mask = mask(value);
			}
			return typeof maskObject !== 'object' || stringify(maskObject.options) !== stringify(options) || maskObject.mask !== mask;
		} catch (e) {}
	},
	eventSupported = function(eventName) {
		var el = document.createElement('div'), isSupported;

		eventName = 'on' + eventName;
		isSupported = (eventName in el);

		if ( !isSupported ) {
			el.setAttribute(eventName, 'return;');
			isSupported = typeof el[eventName] === 'function';
		}
		el = null;

		return isSupported;
	};

	$.fn.mask = function(mask, options) {
		options = options || {};
		var selector = this.selector,
			globals = $.jMaskGlobals,
			interval = globals.watchInterval,
			watchInputs = options.watchInputs || globals.watchInputs,
			maskFunction = function() {
				if (notSameMaskObject(this, mask, options)) {
					return $(this).data('mask', new Mask(this, mask, options));
				}
			};

		$(this).each(maskFunction);

		if (selector && selector !== '' && watchInputs) {
			clearInterval($.maskWatchers[selector]);
			$.maskWatchers[selector] = setInterval(function(){
				$(document).find(selector).each(maskFunction);
			}, interval);
		}
		return this;
	};

	$.fn.masked = function(val) {
		return this.data('mask').getMaskedVal(val);
	};

	$.fn.unmask = function() {
		clearInterval($.maskWatchers[this.selector]);
		delete $.maskWatchers[this.selector];
		return this.each(function() {
			var dataMask = $(this).data('mask');
			if (dataMask) {
				dataMask.remove().removeData('mask');
			}
		});
	};

	$.fn.cleanVal = function() {
		return this.data('mask').getCleanVal();
	};

	$.applyDataMask = function(selector) {
		selector = selector || $.jMaskGlobals.maskElements;
		var $selector = (selector instanceof $) ? selector : $(selector);
		$selector.filter($.jMaskGlobals.dataMaskAttr).each(HTMLAttributes);
	};

	var globals = {
		maskElements: 'input,td,span,div',
		dataMaskAttr: '*[data-mask]',
		dataMask: true,
		watchInterval: 300,
		watchInputs: true,
		// old versions of chrome dont work great with input event
		useInput: !/Chrome\/28/.test(window.navigator.userAgent) && eventSupported('input'),
		watchDataMask: false,
		byPassKeys: [9, 16, 17, 18, 36, 37, 38, 39, 40, 91],
		translation: {
			'0': {pattern: /\d/},
			'9': {pattern: /\d/, optional: true},
			'#': {pattern: /\d/, recursive: true},
			'A': {pattern: /[a-zA-Z0-9]/},
			'S': {pattern: /[a-zA-Z]/}
		}
	};

	$.jMaskGlobals = $.jMaskGlobals || {};
	globals = $.jMaskGlobals = $.extend(true, {}, globals, $.jMaskGlobals);

	// looking for inputs with data-mask attribute
	if (globals.dataMask) {
		$.applyDataMask();
	}

	setInterval(function() {
		if ($.jMaskGlobals.watchDataMask) {
			$.applyDataMask();
		}
	}, globals.watchInterval);
}, window.jQuery, window.Zepto));



/**
 *
 * @param jQuery
 */
function AdvancedCalculator(document, $, $form)
{
	"use strict";

	var getProductsProxy;

	this.$form = $form;
	this.form = $form[0];

	getProductsProxy = $.proxy(AdvancedCalculator.prototype.getProducts, this);

	this.$form.submit(getProductsProxy);
}

/**
 *
 */
AdvancedCalculator.prototype.clear = function () {
	this.value = '';

	return true;
}

/**
 *
 * @returns {boolean}
 */
AdvancedCalculator.prototype.getProducts = function(pEvent)
{
	var offset, finalOffset, calc;
	var $calcButton = $('.js-affordCalcButton');

	pEvent.preventDefault();

	offset = $('.js-calculator-results').offset();
	finalOffset = offset.top - $('.c-Masthead').height() - 5;
	calc = this;

	// Abort any previous request.
	if (typeof this.lastRequest === 'object') {
		this.lastRequest.abort();
	}

	this.validate().done(function () {
		calc.lastRequest = $.ajax({
			type: "POST",
			url: '/calculator-affordability-results',
			data: calc.$form.serialize(),
			beforeSend: function () {
				$calcButton.text('');

				// Create spinner
				var $calcSpinner = $('<span class="c-Spinner c-Spinner--circle"></span>');

				// Append the spinner inside of the button
				$calcButton.append($calcSpinner);
			},
			success: function (data) {
				$('.js-calculator-results').html(data);
				
				// if the window is less than or equal to 800
				// then scroll down to results
				if ($(window).width() <= 800) {
					// if less than 800 or equal
					$('html, body').animate({
						scrollTop: finalOffset
					}, 1000);
				}

				// Add 'Calculate' back
				$calcButton.text('Calculate');
			},
			fail: function () {
				$('.js-fetching-rates').html('No products returned.');
			}
		});
	});


	return false;
};

/**
 *  Validate fields.
 *
 * @returns {boolean}
 */
AdvancedCalculator.prototype.validate = function() {
	var creditScore = this.form.querySelector('.js-calculator-credit-score select'),
		annualIncome = this.form.querySelector('.js-calculator-annual-income input'),
		monthlyDebt = this.form.querySelector('.js-calculator-monthly-debt input'),
		downPayment = this.form.querySelector('.js-calculator-down-payment input'),
		zipCode = this.form.querySelector('.js-calculator-zip-code input'),
		promises = [];

	promises.push(annualIncome.validate());
	promises.push(monthlyDebt.validate());
	promises.push(downPayment.validate());
	promises.push(zipCode.validate());
	promises.push(creditScore.validate());

	return $.when.apply($, promises);
}

var advancedCalculator = new AdvancedCalculator(
	document,
	jQuery,
	jQuery('.js-affordability-calculator'),
	jQuery('.js-fetching-rates')
);

var calcValidation = new Validation(
	_,
	jQuery('.js-affordability-calculator'),
	'.js-form-field',
	'.js-validation-container'
);

// Apply simple toggle to any appropriate elements that are added to the page.
$(document).on('click.ql', '.simpleToggle, .assumptionsSimpleToggle', function () {
	$(this).toggleSimple();
});

//Input masking
$('.js-calculator-annual-income input').mask("#,##0", {reverse: true});
$('.js-calculator-monthly-debt input').mask("#,##0", {reverse: true});
$('.js-calculator-down-payment input').mask("#,##0", {reverse: true});
$('.js-calculator-zip-code input').mask("00000", {reverse: true});