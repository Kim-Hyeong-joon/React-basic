import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  function onClick() {
    setCounter((current) => current + 1);
  }
  console.log("render");
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default App;
