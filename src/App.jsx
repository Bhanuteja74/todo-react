import { useState } from "react";
import { Input } from "./Input";
import { Item } from "./Item";

const Todos = ({ todos, onItemAdd, onItemToggle }) => {
  const addItem = (todo) => onItemAdd(todos.id, todo);
  const onToggle = (taskId, done) => onItemToggle(todos.id, taskId, done);

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

function* generateId(start = 0, end = Infinity, step = 1) {
  let iterationCount = 0;
  for (let i = start; i < end; i += step) {
    iterationCount++;
    yield i;
  }
  return iterationCount;
}

const idGenerator = generateId();

const App = () => {
  const [lists, setLists] = useState([]);

  const addList = (listName) => {
    const newList = {
      id: idGenerator.next().value,
      listName,
      todos: [],
      nextId: 1,
    };
    setLists((old) => [...old, newList]);
  };

  const handleItemAdd = (id, todo) => {
    setLists((old) =>
      old.map((todoList) =>
        todoList.id === id
          ? {
              ...todoList,
              todos: [
                ...todoList.todos,
                { taskId: todoList.nextId, done: false, todo: todo },
              ],
              nextId: todoList.nextId + 1,
            }
          : todoList
      )
    );
  };

  const handleToggle = (id, taskId, done) => {
    setLists((old) =>
      old.map((todoList) =>
        todoList.id === id
          ? {
              ...todoList,
              todos: todoList.todos.map((todo) =>
                todo.taskId === taskId ? { ...todo, done } : todo
              ),
            }
          : todoList
      )
    );
  };

  return (
    <div>
      <h1>Todos</h1>
      <Input onkeydown={addList} />
      {lists.map((list) => (
        <Todos
          key={list.id}
          todos={list}
          onItemAdd={handleItemAdd}
          onItemToggle={handleToggle}
        />
      ))}
    </div>
  );
};

export default App;
