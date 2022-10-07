import TodoList from './TodoList';
import { useSelector } from 'react-redux';

import classes from './Todos.module.css';

const Todos = (props) => {
  const todos = useSelector((state) => state.todos.todos);

  return (
    <ul className={classes.todos}>
      {todos.map((todo) => (
        <TodoList key={todo.id} {...todo} />
      ))}
    </ul>
  );
};

export default Todos;
