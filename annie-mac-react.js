'use strict';

const e = React.createElement;

class Welcome extends React.Component {
	render() {
		return <h1>Hello, {this.props.name}</h1>;
	}
}

// class LikeButton extends React.Component {
//   constructor(props) {
// 	super(props);
// 	this.state = { liked: false };
//   }
// 
//   render() {
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

const domContainer = document.querySelector('#react-test');
// ReactDOM.render(e(LikeButton), domContainer);
ReactDOM.render(e(Welcome), domContainer);