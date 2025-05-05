import { Component, useState } from "react";

const Item = ({ todo, onChange }) => {
  const handleChange = () => {
    onChange(todo.taskId, !todo.done);
  };

  return (
    <div>
      <input type="checkbox" checked={todo.done} onChange={handleChange} />
      <span>{todo.todo}</span>
    </div>
  );
};

const Input = ({ onkeydown }) => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && event.target.value !== "") {
      onkeydown(value);
      setValue("");
    }
  };

  return (
    <input
      type="text"
      value={value}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
    />
  );
};

const Todos = ({ todos, onChange }) => {
  const addItem = (todo) => {
    const newTodo = { todo, done: false, taskId: todos.nextId };
    const newTodos = [...todos.todos, newTodo];
    const nextId = todos.nextId + 1;

    onChange(todos.listName, newTodos, nextId);
  };

  const onToggle = (taskId, done) => {
    const updatedTodos = todos.todos.map((todo) =>
      todo.taskId === taskId ? { ...todo, done } : todo
    );

    onChange(todos.listName, updatedTodos, todos.nextId);
  };

  return (
    <div>
      <h1>{todos.listName}</h1>
      <Input onkeydown={addItem} />
      {todos.todos.map((todo) => (
        <Item key={todo.taskId} todo={{ ...todo }} onChange={onToggle} />
      ))}
    </div>
  );
};

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
