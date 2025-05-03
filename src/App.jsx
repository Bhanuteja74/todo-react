import { Component } from "react";

class Item extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <input type="checkbox" name="" id="" checked={this.props.todo.done} />
        <span>{this.props.todo.todo}</span>
      </div>
    );
  }
}

function App() {
  return <Item todo={{ todo: "shampoo", done: true }} />;
}

export default App;
