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
}

class FirstTimeHomeBuyerGuide2 extends React.Component {
	render() {
		return (
			<div id="annie-mac-2021-content-container">
				<div class="annie-mac-2021-redesign-section" id="product-information-section">
					<p>This should show.</p>
				</div>
			</div>
		);
	  }
}

Class App extends Component {
	render(){
	  <React.Fragment>
		<FirstTimeHomeBuyerGuide />
		<FirstTimeHomeBuyerGuide2 />
	  </React.Fragment>
	}
}

ReactDOM.render(e(App), domContainer);