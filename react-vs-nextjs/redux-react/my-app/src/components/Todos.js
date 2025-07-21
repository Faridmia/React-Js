import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getAllTodos from "./services/actions/todosActionstwo";
const Todos = () => {
  const { isLoading, error, todos } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllTodos());
  }, []);

  return (
    <div>
      <h1>Todos app</h1>
      {isLoading && <h2>Loading...</h2>}
      {error && <h2>{error.message}</h2>}
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title} faridmia</li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
