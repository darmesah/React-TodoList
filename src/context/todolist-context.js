import { createContext, useContext, useEffect, useState } from 'react';

const TodosContext = createContext({
  todos: [],
  filteredTodo: [],
  addTodo: (todo) => {},
  removeTodo: (id) => {},
  toggleComplete: (id) => {},
  filterTodo: (category) => {},
});

let todoItems = [];
if (todoItems) {
  todoItems = JSON.parse(localStorage.getItem('todos'));
}

export const TodosContextProvider = (props) => {
  const [todolist, setTodoList] = useState(todoItems);
  const [filteredTodo, setFilteredTodo] = useState(todolist);

  const addTodoHandler = (todo) => {
    setTodoList((prevItems) => [...prevItems, todo]);
  };

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

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todolist));
    setFilteredTodo(todolist);
  }, [todolist]);

  const filterTodoHandler = (category) => {
    if (category === 'All') {
      return setFilteredTodo(todolist);
    }

    const filterTodos = todolist.filter((todo) => todo.category === category);
    setFilteredTodo(filterTodos);
  };

  const context = {
    todos: todolist,
    filteredTodos: filteredTodo,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
    toggleComplete: toggleCompleteHandler,
    filterTodo: filterTodoHandler,
  };

  return (
    <TodosContext.Provider value={context}>
      {props.children}
    </TodosContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(TodosContext);
};

export default TodosContext;
