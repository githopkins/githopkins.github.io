ReactDOM.render(<App />, document.getElementById("react-test"));

const App = () => {
  return (
	<LikeButton />
  );
};

class LikeButton extends React.Component {
  constructor(props) {
	super(props);
	this.state = { liked: false };
  }

  render() {
	if (this.state.liekd) {
	  return 'You liked this.';
	}

	return React.createElement(
	  'button',
	  { onClick: () => this.setState({ liked: true; }) },
	  'Like
	);
  }