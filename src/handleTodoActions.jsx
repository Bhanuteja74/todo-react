function* generateId(start = 0, end = Infinity, step = 1) {
  for (let value = start; value < end; value += step) {
    yield value;
  }
}

const idGenerator = generateId();

export const handleTodoActions = (state, action) => {
  switch (action.type) {
    case "add-todos":
      return addTodo(action, state);

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

    case "delete-list": {
      return state.filter((todos) => todos.id !== action.id);
    }

    default:
      return state;
  }
};
function addTodo(action, state) {
  {
    const newList = {
      id: idGenerator.next().value,
      listName: action.value,
      todos: [],
      nextId: 1,
    };
    return [...state, newList];
  }
}
