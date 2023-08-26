import {FaPlus} from  "react-icons/fa";
import {AiOutlineCheckCircle,AiFillCheckCircle,AiOutlineEdit,AiOutlineCheck,AiOutlineDelete} from  "react-icons/ai";
const Button = ({type, onClick}:{type:string, onClick:()=>void}) => {
  return (
    <div className='button'>
        <button className="p-2 text-2xl" onClick={onClick}>
        {type === "check" ? <AiOutlineCheck /> 
        :type === "fillcheck" ? <AiFillCheckCircle />
        :type === "outlinecheck" ? <AiOutlineCheckCircle />
        :type === "create"? <FaPlus className="text-6xl"/>
        :type === "trash" ? <AiOutlineDelete /> 
        :<AiOutlineEdit />}
        </button>
    </div>
  )
}

export default Button