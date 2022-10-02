import { useReducer } from 'react';
import { useEffect } from 'react';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';

const initialTodoState = [];

const todoReducer = (state, action) => {
  switch (action.type) {
    case 'SET':
      return action.todoItems;

    case 'COMPLETE':
      return state.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      });

    case 'ADD':
      return [...state, action.todo];

    case 'DELETE':
      return state.filter((todo) => todo.id !== action.id);

    default:
      return state;
  }
};

const App = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialTodoState);

  useEffect(() => {
    const todoItems = JSON.parse(localStorage.getItem('todos'));
    if (todoItems) {
      dispatch({ type: 'SET', todoItems });
    }
  }, []);

  const addTodoFunctionHandler = (todo) => {
    dispatch({ type: 'ADD', todo });
  };

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const setCompleteHandler = (id) => {
    dispatch({ type: 'COMPLETE', id });
  };

  const removeHandler = (id) => {
    dispatch({ type: 'DELETE', id });
  };

  return (
    <div>
      <h1>My TodoList</h1>
      <AddTodo addTodoFunction={addTodoFunctionHandler} />
      <Todos
        todos={todos}
        removeTodo={removeHandler}
        setComplete={setCompleteHandler}
      />
    </div>
  );
};

export default App;
