import { useDispatch, useSelector } from "react-redux";
import { completeTodo, removeTodo, updateTodo } from "../../features/todoSlice";
import { RootState } from "../../store/rootReducer";
import TodoItem from "./todoItem"; // Make sure the import path is correct

const TodoList = () => {
 

  

  const todos = useSelector((state: RootState) => state.todos);
  const dispatch = useDispatch();

  const handleRemoveTodo = (id: string) => {
    dispatch(removeTodo(id));
  };

  const handleCheckTodo = (id: string, completed: boolean) => {
    dispatch(completeTodo({ id, completed }));
  };
  const handleUpdateTodo = (id:string,title:string,todo:string)=>{
    console.log()
    dispatch(updateTodo({id,title,todo}))
  }

  return (
    <>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onRemove={handleRemoveTodo}
          onComplete={handleCheckTodo}
          onUpdate={handleUpdateTodo}
        />
      ))}
    </>
  );
};

export default TodoList;
