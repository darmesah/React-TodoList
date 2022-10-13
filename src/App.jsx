import AddTodo from './components/AddTodo';
import TodoCategories from './components/TodoCategories';
import Todos from './components/Todos';

const App = () => {
  return (
    <div>
      <h1>My TodoList</h1>
      <TodoCategories />
      <AddTodo />
      <Todos />
    </div>
  );
};

export default App;
