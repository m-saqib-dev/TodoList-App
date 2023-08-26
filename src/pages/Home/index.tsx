import { useState, useEffect } from 'react';
import Button from '../../component/button';
import TodoList from '../../component/TodoList';
import quotesData from '../../data/quotesData.json';

const Home = () => {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [currentQuote, setCurrentQuote] = useState(quotesData[currentQuoteIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuoteIndex(prevIndex => (prevIndex + 1) % quotesData.length);
    }, 10000);

    setCurrentQuote(quotesData[currentQuoteIndex]); // Update current quote here

    return () => {
      clearInterval(interval);
    };

  }, [currentQuoteIndex]); // Add currentQuoteIndex to the dependency array

  const onClickEm =()=>{
    console.log("asd")
  }

  return (
    <div className='flex justify-center items-center flex-col shrink-0 py-5 gap-y-3'>
<figure className="max-w-screen-md mx-auto h-64 flex items-center flex-col text-center">
    <svg className="w-10 h-10 mx-auto mb-3 text-gray-400 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
        <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
    </svg>
    <blockquote>
        <p className="text-2xl italic font-medium text-gray-900 dark:text-white">
          {currentQuote.quote}
          </p>
    </blockquote>
    <figcaption className="flex items-center justify-center mt-6 space-x-3">
        
        <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
            <cite className="pl-3 text-sm text-gray-500 dark:text-gray-400">author - </cite>
            <cite className="pr-3 font-medium text-gray-900 dark:text-white"> {currentQuote.author}</cite>
        </div>
    </figcaption>
</figure>

      <div className="border-red-100 border w-4/5 flex justify-center items-center h-40 rounded-md border-dashed">
        <Button type='create' onClick={onClickEm}/>
      </div>
      <TodoList/>
    </div>
  );
}

export default Home;
