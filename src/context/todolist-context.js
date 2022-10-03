import { createContext, useEffect, useState } from 'react';

const TodosContext = createContext({
  todos: [],
  addTodo: (todo) => {},
  removeTodo: (id) => {},
  toggleComplete: (id) => {},
});

export const TodosContextProvider = (props) => {
  const [todolist, setTodoList] = useState([]);

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem('todos'));
    if (savedTodos) {
      setTodoList(savedTodos);
    }
  }, []);

  const addTodoHandler = (todo) => {
    setTodoList((prevItems) => [...prevItems, todo]);
  };

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todolist));
  }, [todolist]);

  const removeTodoHandler = (id) => {
    setTodoList((prevItems) => prevItems.filter((todo) => todo.id !== id));
  };

  const toggleCompleteHandler = (id) => {
    setTodoList((prevItems) => {
      return prevItems.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      });
    });
  };

  const context = {
    todos: todolist,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
    toggleComplete: toggleCompleteHandler,
  };

  return (
    <TodosContext.Provider value={context}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContext;
