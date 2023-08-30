import { useState } from 'react'
import Button from '../button'
import { AiOutlineCheckCircle, AiOutlineMenu, AiTwotoneClockCircle } from 'react-icons/ai'

const TodoList = () => {
  const [viewMore,setViewMore] = useState("max-sm:line-clamp-2");

  return (
    <div className="flex w-4/5 bg-gradient-to-r from-slate-900 to-blue-950 p-1 my-2 rounded-md">
    <div className="p-1">
    <AiOutlineCheckCircle className="max-sm:text-lg text-2xl"/>
    </div>
      <div className="flex p-1 text-xs flex-col">
    <h1 onClick={()=>{setViewMore('')}} className={`w-full border ${viewMore} bg-gray-50 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo, unde. Assumenda, suscipit natus quibusdam autem optio earum minus tempora possimus nam iste, quo facere illum laudantium nobis veniam exercitationem animi dicta vero ea! Tenetur consequuntur impedit obcaecati at. At, nesciunt!
      </h1>
      <div className='flex gap-1 py-2'>
      <div>
            <h6 className="start-time">Created at : jun/21/2023 9:24 PM{}</h6>
      </div>
      <div>
            <h6 className="end-time">DeadLine : jun/26/2023 9:24 PM{}</h6>
            
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
  )
}

export default TodoList