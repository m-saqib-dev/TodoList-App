import TodoList from '../../component/TodoList';
import useShowQuote from './hooks/useShowQuote';
import Quotes from './components/Quotes';
import FormConnected from '../../component/form';
const Home = () => {

  const {currentQuote} = useShowQuote()

  return (
    <>
    <div className='flex justify-center items-center flex-col shrink-0 py-5 gap-y-3'>
      <Quotes quotes={currentQuote.quote} author={currentQuote.author} />
    <FormConnected/>
      <TodoList/>
    </div>
    </>
  );
}

export default Home;
