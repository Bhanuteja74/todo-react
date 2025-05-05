function* generateId(start = 0, end = Infinity, step = 1) {
  let iterationCount = 0;
  for (let i = start; i < end; i += step) {
    iterationCount++;
    yield i;
  }
  return iterationCount;
}
const idGenerator = generateId();
export const handleTodoActions = (state, action) => {
  switch (action.type) {
    case "add-todos": {
      const newList = {
        id: idGenerator.next().value,
        listName: action.value,
        todos: [],
        nextId: 1,
      };
      return [...state, newList];
    }

    case "add-todo-item": {
      return state.map((todoList) =>
        todoList.id === action.id
          ? {
              ...todoList,
              todos: [
                ...todoList.todos,
                { taskId: todoList.nextId, done: false, todo: action.todo },
              ],
              nextId: todoList.nextId + 1,
            }
          : todoList
      );
    }

    case "toggle-todo-item": {
      return state.map((todoList) =>
        todoList.id === action.id
          ? {
              ...todoList,
              todos: todoList.todos.map((todo) =>
                todo.taskId === action.taskId
                  ? { ...todo, done: action.done }
                  : todo
              ),
            }
          : todoList
      );
    }

    default:
      return state;
  }
};
