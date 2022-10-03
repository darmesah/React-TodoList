import { useContext } from 'react';
import { BsTrash } from 'react-icons/bs';

import TodosContext from '../context/todolist-context';
import classes from './TodoList.module.css';

const TodoList = (props) => {
  const { id, todo, completed } = props;

  const todosCtx = useContext(TodosContext);

  const itemStyle = !completed
    ? classes.item
    : classes.item + ' ' + classes.cross;

  return (
    <li
      className={itemStyle}
      onClick={() => {
        todosCtx.toggleComplete(id);
      }}
    >
      {todo}
      <button
        onClick={() => {
          todosCtx.removeTodo(id);
        }}
      >
        <BsTrash />
      </button>
    </li>
  );
};
export default TodoList;
