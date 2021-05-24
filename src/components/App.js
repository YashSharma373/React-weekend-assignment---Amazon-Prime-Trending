import React, { useState } from "react";
import Slide from "./Slide";
import "../styles/App.css";

const App = ({ slides }) => {
  const [first, setFirst] = useState(true);
  const [last, setLast] = useState(false);
  const [count, setCount] = useState(0);

  // const length = slides.length;

  function handleNextClick() {
    setFirst(false);
    setCount(count + 1);
    if (count === 3) {
      setLast(true);
    }
  }
  function handlePrevious(){
      setCount(count-1);
      if(count===1){
        setFirst(true);
      }else if(count===4){
        setLast(false);
      }
  }

  function handleRestart() {
    setCount(0);
    setLast(false);
    setFirst(true);
  }
  return (
    <>
      <Slide content={slides[count]} />
      <button
        onClick={handleRestart}
        data-testid="button-restart"
        disabled={first}
      >
        Restart
      </button>
      <button
        onClick={handleNextClick}
        data-testid="button-next"
        disabled={last}
      >
        Next
      </button>
      <button 
      onClick={handlePrevious}
      data-testid="button-prev" disabled={first}>
        Previous
      </button>
    </>
  );
};

export default App;

