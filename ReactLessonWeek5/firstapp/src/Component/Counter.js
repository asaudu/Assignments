import { useState } from "react";

const Counter = (props) => {
  const [count, setCount] = useState(0)

  function addCount() {
      setCount((count + 1));
  }

  function subCount() {
      if(count === 0) {
          console.log("Let's stay positive!")
      } else {
        setCount((count - 1));  
      }
  }

  function resetCount() {
    setCount((0))
}

  return(
    <>
      <h2>{count}</h2>
      <button onClick={subCount} className="button">-</button>
      <button onClick={addCount} className="button">+</button>
      <button onClick={resetCount} className="button">Reset</button>
    
    </>
  );
}

export default Counter;