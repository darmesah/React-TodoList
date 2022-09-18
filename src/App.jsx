import { useState } from 'react';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodoFunctionHandler = (newTodo) => {
    // setTodos((prevValue) => {
    //   return prevValue.concat(newTodo);
    // });
    setTodos((prevValue) => {
      return [...prevValue, newTodo];
    });
  };

  const markDoneHandler = (id) => {
    const remove = todos.filter((todo) => {
      return todo.id !== id;
    });

    setTodos(remove);
  };

  return (
    <div>
      <h1>My TodoList</h1>
      <AddTodo addTodoFunction={addTodoFunctionHandler} />
      <Todos todos={todos} removeTodo={markDoneHandler} />
    </div>
  );
};

export default App;
