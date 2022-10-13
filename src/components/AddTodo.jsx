import { useContext } from 'react';
import { useRef } from 'react';
import TodosContext from '../context/todolist-context';

import classes from './AddTodo.module.css';

const AddTodo = (props) => {
  const { addTodo } = useContext(TodosContext);

  const todoInputRef = useRef('');
  const categoryInputRef = useRef('');

  const addTodoHandler = (e) => {
    e.preventDefault();

    const enteredTodoText = todoInputRef.current.value;
    const enteredCategoryText = categoryInputRef.current.value;

    if (enteredTodoText.trim() === '') {
      return console.log('empty');
    }

    const newTodo = {
      id: Math.random(),
      name: enteredTodoText,
      category: enteredCategoryText,
      completed: false,
    };

    addTodo(newTodo);

    todoInputRef.current.value = '';
    categoryInputRef.current.value = '';
  };

  return (
    <form className={classes.form} onSubmit={addTodoHandler}>
      <div className={classes.input_cont}>
        <label htmlFor="todo">Todo:</label>
        <input type="text" name="todo" id="todo" ref={todoInputRef} />
        <label htmlFor="todo">Category:</label>
        <input
          type="text"
          name="category"
          id="category"
          ref={categoryInputRef}
        />
      </div>

      <button type="submit">Add Todo</button>
    </form>
  );
};

export default AddTodo;
