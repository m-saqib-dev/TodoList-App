import { useState } from 'react'
import Button from '../button'
import { AiOutlineCheckCircle, AiOutlineMenu, AiTwotoneClockCircle } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store/rootReducer'
import { removeTodo } from '../../features/todoSlice'

const TodoList = () => {
  const todos = useSelector((state:RootState) => state.todos)
  const [showButtons, setShowButtons] = useState(false);
  const dispatch = useDispatch();
  const handleRemoveTodo = (id:string) => {
    dispatch(removeTodo(id));
  };

  const [viewMore,setViewMore] = useState({
    title:"max-sm:line-clamp-1",
    todo:"max-sm:line-clamp-3",
  });

  const viewMoreHandler = () => {
    if (viewMore.title === "" && viewMore.todo === "") {
      setViewMore({
        title: "max-sm:line-clamp-1",
        todo: "max-sm:line-clamp-3",
      });
    } else {
      setViewMore({
        title: "",
        todo: "",
      });
    }
  };
  const toggleButtons = () => {
    setShowButtons(!showButtons);
  };
  return (
    <>
    {todos.map((todos)=>(
    <div key={todos.id} className="flex w-4/5 bg-gradient-to-r from-slate-900 to-blue-950 p-1 my-2 rounded-md">
    <div className="p-1">
    <AiOutlineCheckCircle className="max-sm:text-lg text-2xl"/>
    </div>
      <div className="flex p-1 text-xs w-full flex-col">
        
      <div className='flex  flex-col border'>
        <h1 onClick={viewMoreHandler} className={`${viewMore.title} leading-5 my-2 text-lg border-l-4 px-1`}>
         {todos.title}
        </h1>
        <p onClick={viewMoreHandler} className={`${viewMore.todo}`}>
          {todos.todo}
        </p>
      </div>
      <div className='flex justify-around border-t-2 my-2 border-b-2'>
      <div>
            <h6 className="text-center px-2">Created at <br /> jun/21/2023 9:24 PM{}</h6>
      </div>
      <div>
            <h6 className="text-center px-2">Deadline<br /> jun/26/2023 9:24 PM{}</h6>
      </div>
      </div>
          </div>
    <div className="flex flex-col items-center">
      
      
      <button name='menu' onClick={toggleButtons}>
        <AiOutlineMenu className="m-1 sm:hidden"/>
      </button>
        
      <div
              className={`max-sm:${
                showButtons ? 'block' : 'hidden'
              }`}
            >
  <Button type='check' onClick={()=>{}} />
  <Button type='trash'  onClick={()=>handleRemoveTodo(todos.id)}/>
  <Button type='edit' onClick={()=>{}}/>
        </div>
        <div className=" py-2 text-xs flex flex-col items-center">
            <AiTwotoneClockCircle/>
            <h6>9:24</h6>
          </div>
    </div>
  </div>
  ))}
  </>
  )
}

export default TodoList