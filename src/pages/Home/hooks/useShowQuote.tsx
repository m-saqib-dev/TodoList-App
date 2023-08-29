import { useState, useEffect } from "react";
import quotesData from "../../../data/quotesData.json"
const useShowQuote = () => {
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
  return {currentQuote}
}

export default useShowQuote