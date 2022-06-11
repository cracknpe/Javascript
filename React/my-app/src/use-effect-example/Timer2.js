import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

function Timer2() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let timer = setTimeout(() => {
    setCount((count) => count + 1);
  }, 1000);

  return () => {
      console.log("clean up");
      clearTimeout(timer);
  }
  }, []);

  return <h1>I've rendered {count} times!</h1>;
}

export default Timer2