import { useRef } from 'react';

import classes from './AddTodo.module.css';

const AddTodo = (props) => {
  const todoInputRef = useRef('');

  const addTodoHandler = (e) => {
    e.preventDefault();

    const enteredTodoText = todoInputRef.current.value;

    if (enteredTodoText.trim() === '') {
      return console.log('empty');
    }

    const newTodo = {
      id: Math.random(),
      name: enteredTodoText,
      completed: false,
    };

    props.addTodoFunction(newTodo);

    todoInputRef.current.value = '';
  };

  return (
    <form className={classes.form} onSubmit={addTodoHandler}>
      <label htmlFor="todo">Todo:</label>
      <input type="text" name="todo" id="todo" ref={todoInputRef} />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default AddTodo;
