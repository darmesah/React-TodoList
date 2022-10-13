import { useContext } from 'react';
import TodosContext from '../context/todolist-context';
import TodoList from './TodoList';

import classes from './Todos.module.css';

const Todos = (props) => {
  const { filteredTodos } = useContext(TodosContext);
  return (
    <ul className={classes.todos}>
      {filteredTodos.map((todo) => (
        <TodoList
          key={todo.id}
          id={todo.id}
          todo={todo.name}
          completed={todo.completed}
        />
      ))}
    </ul>
  );
};

export default Todos;
