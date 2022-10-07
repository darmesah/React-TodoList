import { useRef } from 'react';
import { useDispatch } from 'react-redux';

import { todoActions } from '../store/todos';
import classes from './AddTodo.module.css';

const AddTodo = (props) => {
  const todoInputRef = useRef('');

  const dispatch = useDispatch();
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

    dispatch(todoActions.addTodo(newTodo));

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
