import {  FormEvent, useState } from "react"
import { CustomModal } from "../modals/CustomModal";

interface FormProps  {
    onSubmit:(title:string,todo:string) => void
}

const Form = (props:FormProps) => {
    const [title, setTitle] = useState('');
    const [todo, setTodo] = useState('')
    const [isEmpty,setIsEmpty] = useState(false)
    const {onSubmit} = props
    const handleSubmit = (e:FormEvent) => {
      e.preventDefault();
      const target = e.target as HTMLButtonElement;
      if (target.name === 'reset') {
        setTitle('');
        setTodo('');
      }else if(title&&todo){
        onSubmit(title,todo)
        setIsEmpty(false)
      }else{
        setIsEmpty(true)
      }
    }

  return (
    
    <CustomModal>
    <CustomModal.Header>
      Create Todo
    </CustomModal.Header>
    <CustomModal.Body>
    <form onSubmit={handleSubmit} className=" p-4 flex flex-col gap-2 w-full">
        <div>
            <label htmlFor="Todo_Heading" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Todo Heading</label>
            <input type="text" id="Todo_Heading" onChange={(e)=> setTitle(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={title} placeholder="Give a Heading" required/>
        </div>
        <div>
            <label htmlFor="Todo" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Todo</label>
            <input type="text" id="Todo" onChange={(e)=>setTodo(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={todo} placeholder="Write Todo" required/>
        </div>
        <CustomModal.Footer>
          
    <button name="reset" onClick={handleSubmit} type="button" className=" border hover:bg-red-700 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-600 rounded">
  reset
</button>
        <button onClick={handleSubmit} type="submit" className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
  Save
</button>
        
    

    
    
    </CustomModal.Footer>
{isEmpty?<h1 className="text-red-600">make sure you fill all the fields</h1>:''}
    </form>
    </CustomModal.Body>
    
  </CustomModal>
  )
}

export default Form