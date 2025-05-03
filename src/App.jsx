import { Component } from "react";

class Item extends Component {
  constructor(props) {
    super(props);
  }

  handleChange = (event) => {
    const { onchange, todo } = this.props;
    onchange(todo.taskId, !todo.done);
  };

  render() {
    return (
      <div>
        <input
          type="checkbox"
          checked={this.props.todo.done}
          onChange={this.handleChange}
        />
        <span>{this.props.todo.todo}</span>
      </div>
    );
  }
}

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  render() {
    return (
      <input
        type="text"
        value={this.state.value}
        onChange={this.handleChange}
      />
    );
  }
}

class Todos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { todo: "shampoo", done: true, taskId: 1 },
        { todo: "conditioner", done: false, taskId: 2 },
      ],
    };
  }

  handleChange = (taskId, done) => {
    this.setState((old) => ({
      todos: old.todos.map((todo) =>
        todo.taskId === taskId ? { ...todo, done } : todo
      ),
    }));
  };

  render() {
    return (
      <div>
        {this.state.todos.map((todo) => (
          <Item
            key={todo.taskId}
            todo={{ ...todo }}
            onchange={this.handleChange}
          />
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
    return <Input />;
  }
}

export default App;
