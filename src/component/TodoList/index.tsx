import { useState } from 'react'
import Button from '../button'
import { AiOutlineCheckCircle, AiOutlineMenu, AiTwotoneClockCircle } from 'react-icons/ai'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/rootReducer'

const TodoList = () => {
  const todos = useSelector((state:RootState) => state.todos)
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
        <AiOutlineMenu className="m-1 sm:hidden"/>
        <div className=" max-sm:hidden">
  <Button type='check' onClick={()=>{}} />
  <Button type='trash'  onClick={()=>{}}/>
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