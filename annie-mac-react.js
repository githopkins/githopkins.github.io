'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
	super(props);
	this.state = { liked: false };
  }

  render() {
	  
	if (this.state.liked) {
	  return 'You liked this.';
	}

	return e(
	<h1>Hello, world!</h1>
	  // 'button',
	  // { onClick: () => this.setState({ liked: true }) },
	  // 'Like'
	);
  }
}

const domContainer = document.querySelector('#react-test');
ReactDOM.render(e(LikeButton), domContainer);