'use strict';
const domContainer = document.querySelector('#react-test');
const e = React.createElement;

if (window.location.href.indexOf("react-test") != -1) {
	import FirstTimeHomeBuyerGuide from 'components'
	ReactDOM.render(e(FirstTimeHomeBuyerGuide), domContainer);
};

if (window.location.href.indexOf("testing-react") != -1) {
	import testingreact from 'components'
	ReactDOM.render(e(testingreact), domContainer);
};