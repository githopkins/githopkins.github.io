'use strict';
const domContainer = document.querySelector('#react-test');
const e = React.createElement;

// Declaration of Componenets
class FirstTimeHomeBuyerGuide extends React.Component {
	render() {
		return (
			<div id="annie-mac-2021-content-container">
				<div class="annie-mac-2021-redesign-section" id="product-information-section">
					<h2>First Time Home Buyer Guide</h2>
				</div>
			</div>
		);
	}
};

class testingreact extends React.Component {
	render() {
		return (
			<div id="annie-mac-2021-content-container">
				<div class="annie-mac-2021-redesign-section" id="product-information-section">
					<h2>Just Testing React</h2>
				</div>
			</div>
		);
	}
};

if (window.location.href.indexOf("react-test") != -1) {
	ReactDOM.render(e(FirstTimeHomeBuyerGuide), domContainer);
};

if (window.location.href.indexOf("testing-react") != -1) {
	ReactDOM.render(e(testingreact), domContainer);
};