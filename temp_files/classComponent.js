class Hello extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    if (this.props.name === null || this.props.name === undefined) {
      return <h2>Hello World</h2>;
    } else {
      return <h2>Hi{this.props.name}!</h2>;
    }
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Hello name="Ali" />);
