import TodoList from '../../component/TodoList';
import useShowQuote from './hooks/useShowQuote';
import Quotes from './components/Quotes';
// import Modal2 from '../../component/modals/Modal2';
import Form2 from '../../component/form/form2';
const Home = () => {


  const {currentQuote} = useShowQuote()
 

  const onSubmit = (title:string,todo:string) =>{
    alert(title+todo)
  }

  return (
    <>
    {/* <Modal modal={<Form onSubmit={onClick}/>}/>s */}
    <div className='flex justify-center items-center flex-col shrink-0 py-5 gap-y-3'>
      <Quotes quotes={currentQuote.quote} author={currentQuote.author} />
    <Form2 onSubmit={onSubmit}/>
      
      <TodoList/>
    </div>
    </>
  );
}

export default Home;
