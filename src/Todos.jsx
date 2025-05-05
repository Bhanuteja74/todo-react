import { Input } from "./Input";
import { Item } from "./Item";

export const Todos = ({ todos, reducer }) => {
  const handleDelete = () => reducer({ type: "delete-list", id: todos.id });
  const addItem = (data) =>
    reducer({ type: "add-todo-item", id: todos.id, todo: data.value });
  const onToggle = (taskId, done) =>
    reducer({ type: "toggle-todo-item", id: todos.id, taskId, done });
  const onItemDelete = (taskId) =>
    reducer({ type: "delete-todo-item", id: todos.id, taskId });

  return (
    <div>
      <h1>{todos.listName}</h1>
      <button onClick={handleDelete}>Delete Todo</button>
      <Input onEnter={addItem} type="add-todo-item" />
      {todos.todos.map((todo) => (
        <Item
          key={todo.taskId}
          todo={{ ...todo }}
          onChange={onToggle}
          onDelete={onItemDelete}
        />
      ))}
    </div>
  );
};
