import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

function Timer1() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      console.log(count+1);
      setCount((count) => count + 1);
    }, 1000);
  }, []); // <- add empty brackets here

  return <h1>I've rendered {count} times!</h1>;
}


export default Timer1;