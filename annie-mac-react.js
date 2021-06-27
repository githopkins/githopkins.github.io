

'use strict';

const e = React.createElement;
class LikeButton extends React.Component {
return e(
	  'button',
	  { onClick: () => this.setState({ liked: true }) },
	  'Like'
	);
}

const domContainer = document.querySelector('#react-test');
ReactDOM.render(e(LikeButton), domContainer);