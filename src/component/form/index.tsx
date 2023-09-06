import Form from './Form'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { addTodo } from '../../features/todoSlice';
import { RootState } from '../../store/rootReducer';

const FormConnected = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todos);
  const handleSubmit = (title: string, todo: string) => {
    console.log('New Title:', title);
    console.log('Existing Todos:', todos);
    const completed = false;
    dispatch(addTodo({ title, todo ,completed}));
  };
  
  return (
    <>
        <Form onSubmit={handleSubmit}/>
    </>
  )
}

export default FormConnected