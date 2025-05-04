import { Component } from "react";

class Item extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { onChange, todo } = this.props;
    onChange(todo.taskId, !todo.done);
  }

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
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleKeyDown(event) {
    if (event.key === "Enter" && event.target.value !== "") {
      this.props.onkeydown(this.state.value);
      this.setState({ value: "" });
    }
  }

  render() {
    return (
      <input
        type="text"
        value={this.state.value}
        onChange={this.handleChange}
        onKeyDown={this.handleKeyDown}
      />
    );
  }
}

class Todos extends Component {
  constructor(props) {
    super(props);
    this.onToggle = this.onToggle.bind(this);
    this.addItem = this.addItem.bind(this);
  }

  onToggle(taskId, done) {
    const { todos } = this.props;
    const newTodos = todos.todos.map((todo) =>
      todo.taskId === taskId ? { ...todo, done } : todo
    );

    this.props.onChange(todos.listName, newTodos, todos.nextId);
  }

  addItem(todo) {
    const { todos } = this.props;

    const newTodo = { todo, done: false, taskId: todos.nextId };
    const newTodos = [...todos.todos, newTodo];
    const nextId = todos.nextId + 1;

    this.props.onChange(todos.listName, newTodos, nextId);
  }

  render() {
    return (
      <div>
        <h1>{this.props.todos.listName}</h1>
        <Input onkeydown={this.addItem} />
        {this.props.todos.todos.map((todo) => (
          <Item key={todo.taskId} todo={{ ...todo }} onChange={this.onToggle} />
        ))}
      </div>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listOfTodos: [],
    };

    this.handleUpdate = this.handleUpdate.bind(this);
    this.addList = this.addList.bind(this);
  }

  addList(listName) {
    const newList = { listName, todos: [], nextId: 1 };

    this.setState((old) => ({
      listOfTodos: [...old.listOfTodos, newList],
    }));
  }

  handleUpdate(listName, todos, nextId) {
    this.setState((old) => ({
      listOfTodos: old.listOfTodos.map((todoList) =>
        todoList.listName === listName
          ? { ...todoList, todos, nextId }
          : todoList
      ),
    }));
  }

  render() {
    return (
      <div>
        <h1>Lists</h1>
        <Input onkeydown={this.addList} />
        {this.state.listOfTodos.map((list) => (
          <Todos
            key={list.listName}
            todos={list}
            onChange={this.handleUpdate}
          />
        ))}
      </div>
    );
  }
}

export default App;
