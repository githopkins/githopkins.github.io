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
			<div id="understanding-scores" class="page-content-2021">
			<div id="annie-mac-2021-content-container" class="annie-mac-2021-redesign-section">
				<h2>Understanding Credit Scores</h2>
				<p>The term “credit score” is frequently used when applying for a home loan, but it may not be widely understood. Understanding credit scores and their purpose will help you become a smarter home buyer and mortgage applicant.</p>
				<img src="https://annie-mac.com/uploads/sites/10713/public/credit_score.jpeg" alt="Credit Score Image" id="credit-score-image">
				<h4>What is a Credit Score?</h4>
				<p>Credit scores can be a confusing and challenging topic to understand, even for the most financially savvy people. A credit score is a number that lenders use to help them decide how likely it is that you will repay your loan on time. This is a record of money you have borrowed, your history of paying it back, and how much credit is available to you. Lenders rely on this information to determine if you qualify for a home loan and the risk involved in loaning you money.</p>
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