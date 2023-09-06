import { FC, useState } from 'react';
import Input from '../input';
import Button from '../button';
import { AiFillCheckCircle, AiOutlineCheckCircle, AiOutlineMenu } from 'react-icons/ai';
import { Todo } from '../../features/todoSlice';

interface TodoItemProps {
    todo: Todo; // Define your Todo interface
    onRemove: (id: string) => void;
    onComplete: (id: string, completed: boolean) => void;
    onUpdate:(id:string,title:string,todo:string,completed:boolean) => void
  }

const TodoItem:FC<TodoItemProps> = ({ todo, onRemove, onComplete ,onUpdate}) => {
  const [editMode, setEditMode] = useState(false);
  const [editedTodo, setEditedTodo] = useState(todo);

  const handleEdit = () => {
    setEditMode(true);
  };
  // const handleUpdate = ({id,title,todo}:Todo) =>{
  //   onUpdate(editedTodo.id,editedTodo.title,editedTodo.completed)
  // }
  const handleSave = () => {
    // Perform logic to update the todo item (e.g., dispatch an action)
    
    onUpdate(editedTodo.id,editedTodo.title,editedTodo.todo,editedTodo.completed)
    setEditMode(false);
  };

  return (
    <div className="flex w-4/5 bg-gradient-to-r from-slate-900 to-blue-950 p-1 my-2 rounded-md">
      <div className="p-1">
        {todo.completed ? (
          <AiFillCheckCircle className="max-sm:text-lg text-2xl" />
        ) : (
          <AiOutlineCheckCircle className="max-sm:text-lg text-2xl" />
        )}
      </div>
      <div className="flex p-1 text-xs w-full flex-col">
        {editMode ? (
          <div className="flex flex-col border">
            <Input
              type="text"
              value={editedTodo.title}
              onChange={(e) =>
                setEditedTodo({ ...editedTodo, title: e.target.value })
              }
            />
            <Input
              type="text"
              value={editedTodo.todo}
              onChange={(e) =>
                setEditedTodo({ ...editedTodo, todo: e.target.value })
              }
            />
            <button type="button" onClick={handleSave}>
              Save
            </button>
          </div>
        ) : (
          <div className="flex flex-col border">
            <h1 className="max-sm:line-clamp-1 leading-5 my-2 text-lg border-l-4 px-1">
              {todo.title}
            </h1>
            <p className="max-sm:line-clamp-3">{todo.todo}</p>
          </div>
        )}
        <div className="flex justify-around border-t-2 my-2 border-b-2">
          <div>
            <h6 className="text-center px-2">Created at <br /> jun/21/2023 9:24 PM{}</h6>
          </div>
          <div>
            <h6 className="text-center px-2">Deadline<br /> jun/26/2023 9:24 PM{}</h6>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <button name="menu" onClick={handleEdit}>
          <AiOutlineMenu className="m-1 sm:hidden" />
        </button>
        <div className={`max-sm:${editMode ? 'hidden' : 'block'}`}>
          <Button type="check" onClick={() => onComplete(todo.id, true)} />
          <Button type="trash" onClick={() => onRemove(todo.id)} />
          <Button type="edit" onClick={handleEdit} />
        </div>
      </div>
    </div>
  );
};

export default TodoItem