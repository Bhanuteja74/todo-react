import { useReducer } from "react";
import { Input } from "./Input";
import { Todos } from "./Todos";
import { handleTodoActions } from "./handleTodoActions";

const App = () => {
  const [todos, todoActionHandler] = useReducer(handleTodoActions, []);

  return (
    <div>
      <h1>Todos</h1>
      <Input onEnter={todoActionHandler} type="add-todos" />
      {todos.map((list) => (
        <Todos key={list.id} todos={list} reducer={todoActionHandler} />
      ))}
    </div>
  );
};

export default App;
