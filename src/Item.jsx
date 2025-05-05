export const Item = ({ todo, onChange, onDelete }) => {
  const handleChange = () => {
    onChange(todo.taskId, !todo.done);
  };

  const handleDelete = () => {
    onDelete(todo.taskId);
  };

  return (
    <div>
      <input type="checkbox" checked={todo.done} onChange={handleChange} />
      <span>{todo.todo}</span>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};
