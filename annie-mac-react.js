'use strict';

const e = React.createElement;
const element = <h1>Hello, world</h1>;

// class LikeButton extends React.Component {
//   constructor(props) {
// 	super(props);
// 	this.state = { liked: false };
//   }
// 
//   render() {
// 	<h1>Hello, world!</h1>
// 	if (this.state.liked) {
// 	  return 'You liked this.';
// 	}
// 
// 	return e(	
// 	  'button',
// 	  { onClick: () => this.setState({ liked: true }) },
// 	  'Like'
// 	);
//   }
// }

// const domContainer = document.querySelector('#react-test');
// ReactDOM.render(e(LikeButton), domContainer);
ReactDOM.render(element, document.getElementById('#react-test'));