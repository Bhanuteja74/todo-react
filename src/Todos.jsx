import { Input } from "./Input";
import { Item } from "./Item";

export const Todos = ({ todos, onItemAdd, reducer }) => {
  const addItem = (data) =>
    reducer({ type: "add-todo-item", id: todos.id, todo: data.value });
  const onToggle = (taskId, done) =>
    reducer({ type: "toggle-todo-item", id: todos.id, taskId, done });

  return (
    <div>
      <h1>{todos.listName}</h1>
      <Input onEnter={addItem} type="add-todo-item" />
      {todos.todos.map((todo) => (
        <Item key={todo.taskId} todo={{ ...todo }} onChange={onToggle} />
      ))}
    </div>
  );
};
