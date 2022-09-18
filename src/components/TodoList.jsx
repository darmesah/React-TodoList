import classes from './TodoList.module.css';

const TodoList = (props) => {
  const itemStyle = !props.completed
    ? classes.item
    : classes.item + ' ' + classes.cross;

  return (
    <li className={itemStyle} onClick={props.removeTodo}>
      {props.todo}
    </li>
  );
};
export default TodoList;
