import { useEffect, useState } from 'react';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const todoItems = JSON.parse(localStorage.getItem('todos'));
    if (todoItems) {
      setTodos(todoItems);
    }
  }, []);

  const addTodoFunctionHandler = (newTodo) => {
    // setTodos((prevValue) => {
    //   return prevValue.concat(newTodo);
    // });
    setTodos((prevValue) => {
      return [...prevValue, newTodo];
    });
  };

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const removeHandler = (id) => {
    const remove = todos.filter((todo) => {
      return todo.id !== id;
    });

    setTodos(remove);
  };

  return (
    <div>
      <h1>My TodoList</h1>
      <AddTodo addTodoFunction={addTodoFunctionHandler} />
      <Todos todos={todos} removeTodo={removeHandler} />
    </div>
  );
};

export default App;
