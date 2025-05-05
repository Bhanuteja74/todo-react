export const Item = ({ todo, onChange }) => {
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
