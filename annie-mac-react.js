'use strict';
const domContainer = document.querySelector('#react-test');
const e = React.createElement;

// Declaration of Componenets
class FirstTimeHomeBuyerGuideHeaderContent extends React.Component {
	render() {
		return (
			<div id="annie-mac-2021-content-container">
				<div class="annie-mac-2021-redesign-section" id="product-information-section">
					<h2>First Time Home Buyer Guide</h2>
		);
	  }
}

class FirstTimeHomeBuyerGuideParagraphContent extends React.Component {
	render() {
		return (
					<p>This should show.</p>
				</div>
			</div>
		);
	  }
}

class FirstTimeHomeBuyerGuide extends React.Component {
	render() {
		return FirstTimeHomeBuyerGuideHeaderContent
		return FirstTimeHomeBuyerGuideParagraphContent
	}
}

ReactDOM.render(e(FirstTimeHomeBuyerGuide), domContainer);