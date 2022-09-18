import TodoList from './TodoList';

import classes from './Todos.module.css';

const Todos = (props) => {
  return (
    <ul className={classes.todos}>
      {props.todos.map((todo) => (
        <TodoList
          key={todo.id}
          todo={todo.name}
          removeTodo={props.removeTodo.bind(null, todo.id)}
          completed={todo.completed}
        />
      ))}
    </ul>
  );
};

export default Todos;
