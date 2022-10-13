import { useGlobalContext } from '../context/todolist-context';
import './TodoCategories.css';

const TodoCategories = () => {
  const { todos, filterTodo } = useGlobalContext();

  const categories = ['All', ...new Set(todos.map((todo) => todo.category))];

  return (
    <div className="button-cont">
      {categories.map((category, index) => {
        return (
          <div className="button-cont" key={index}>
            <button onClick={() => filterTodo(category)}>{category}</button>
          </div>
        );
      })}
    </div>
  );
};

export default TodoCategories;
