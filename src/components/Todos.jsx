import TodoList from './TodoList';

import classes from './Todos.module.css';

const Todos = (props) => {
  return (
    <ul className={classes.todos}>
      {props.todos.map((todo) => (
        <TodoList
          key={todo.id}
          id={todo.id}
          todo={todo.name}
          completed={todo.completed}
          completeTodo={props.completeTodo.bind(null, todo.id)}
          removeTodo={props.removeTodo.bind(null, todo.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
