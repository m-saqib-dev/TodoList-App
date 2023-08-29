import { useState } from "react"

interface FormProps  {
    onSubmit:(title:string,todo:string) => void
}

const Form = (props:FormProps) => {
    const [title, setTitle] = useState('');
    const [todo, setTodo] = useState('')
    const {onSubmit} = props
    function handleSubmit() {
        onSubmit(title,todo)
        throw new Error("Function not implemented.")
    }

  return (
    
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-full">
        <div>
            <label htmlFor="Todo_Heading" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Todo Heading</label>
            <input type="text" id="Todo_Heading" onChange={(e)=> setTitle(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Give a Heading" required/>
        </div>
        <div>
            <label htmlFor="Todo" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Add Todo</label>
            <input type="text" id="Todo" onChange={(e)=>setTodo(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write Todo" required/>
        </div>
        <button onClick={handleSubmit} className="bg-blue-500 hidden hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
  Submit
</button>
    </form>
    
  )
}

export default Form