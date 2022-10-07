import { BsTrash } from 'react-icons/bs';
import { useDispatch } from 'react-redux';

import { todoActions } from '../store/todos';
import classes from './TodoList.module.css';

const TodoList = ({ id, name: todo, completed }) => {
  const dispatch = useDispatch();

  const removeTodoHandler = (id) => {
    dispatch(todoActions.removeTodo(id));
  };

  const toggleCompleteHandler = (id) => {
    dispatch(todoActions.toggleComplete(id));
  };
  const itemStyle = !completed
    ? classes.item
    : classes.item + ' ' + classes.cross;

  return (
    <li
      className={itemStyle}
      onClick={() => {
        toggleCompleteHandler(id);
      }}
    >
      {todo}
      <button
        onClick={() => {
          removeTodoHandler(id);
        }}
      >
        <BsTrash />
      </button>
    </li>
  );
};
export default TodoList;
