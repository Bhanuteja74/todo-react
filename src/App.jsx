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

class Todos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { todo: "shampoo", done: true },
        { todo: "conditioner", done: false },
      ],
    };
  }

  render() {
    return (
      <div>
        {this.state.todos.map((todo, index) => (
          <Item key={index} todo={{ ...todo }} />
        ))}
      </div>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Todos />;
  }
}

export default App;
