'use strict';
const domContainer = document.querySelector('#react-test');
const e = React.createElement;

class Car extends React.Component {
	  render() {
		return <h2>Hi, I am a Car!</h2>;
	  }
	}
	
ReactDOM.render(<Car />, document.getElementById('react-test'));

// if (window.location.href.indexOf("react-test") != -1) {
// 	import FirstTimeHomeBuyerGuide from 'components.js'
// 	ReactDOM.render(e(FirstTimeHomeBuyerGuide), domContainer);
// };
// 
// if (window.location.href.indexOf("testing-react") != -1) {
// 	import testingreact from 'components'
// 	ReactDOM.render(e(testingreact), domContainer);
// };