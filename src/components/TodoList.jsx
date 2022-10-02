import classes from './TodoList.module.css';

import bin from '../images/bin.png';

const TodoList = (props) => {
  const completeClass = !props.completed
    ? classes.item
    : `${classes.item} ${classes.cross}`;

  return (
    <li onClick={props.setComplete} className={completeClass}>
      {props.todo}{' '}
      <button onClick={props.removeTodo} className={classes.button}>
        <img src={bin} alt="bin" />
      </button>
    </li>
  );
};
export default TodoList;
