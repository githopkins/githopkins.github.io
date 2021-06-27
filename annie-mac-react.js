'use strict';
const domContainer = document.querySelector('#react-test');
const e = React.createElement;

import {FirstTimeHomeBuyerGuide, testingreact} from 'components.js'

if (window.location.href.indexOf("react-test") != -1) {
	ReactDOM.render(e(FirstTimeHomeBuyerGuide), domContainer);
};

if (window.location.href.indexOf("testing-react") != -1) {
	ReactDOM.render(e(testingreact), domContainer);
};

$(function() {
	$('#credit-image').prepend('<img src="https://annie-mac.com/uploads/sites/10713/public/credit_score.jpeg" />')
})