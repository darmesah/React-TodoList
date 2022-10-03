import { useContext } from 'react';
import TodosContext from '../context/todolist-context';
import TodoList from './TodoList';

import classes from './Todos.module.css';

const Todos = (props) => {
  const { todos } = useContext(TodosContext);
  return (
    <ul className={classes.todos}>
      {todos.map((todo) => (
        <TodoList
          key={todo.id}
          id={todo.id}
          todo={todo.name}
          completed={todo.completed}
          // removeTodo={props.removeTodo.bind(null, todo.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
