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
    setTodos((prevValue) =>
      prevValue.filter((todo) => {
        return todo.id !== id;
      })
    );
  };

  const completeHandler = (id) => {
    setTodos((prevValue) =>
      prevValue.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      })
    );
  };

  return (
    <div>
      <h1>My TodoList</h1>
      <AddTodo addTodoFunction={addTodoFunctionHandler} />
      <Todos
        todos={todos}
        removeTodo={removeHandler}
        completeTodo={completeHandler}
      />
    </div>
  );
};

export default App;
