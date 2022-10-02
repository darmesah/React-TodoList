import classes from './TodoList.module.css';

import bin from '../images/bin.png';

const TodoList = (props) => {
  return (
    <li className={classes.item}>
      {props.todo}{' '}
      <button onClick={props.removeTodo} className={classes.button}>
        <img src={bin} alt="bin" />
      </button>
    </li>
  );
};
export default TodoList;
