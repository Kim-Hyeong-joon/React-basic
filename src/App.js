import { useState, useEffect } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");
  function onClick() {
    setCounter((current) => current + 1);
  }
  function onChange(event) {
    setKeyword(event.target.value);
  }

  function iRunOnlyOnce() {
    console.log("i run only once");
  }
  function whenKeywordChange() {
    console.log("i run 'keyword' changes.");
  }
  function whenCounterChange() {
    console.log("i run 'counter' changes.");
  }
  useEffect(iRunOnlyOnce, []);
  useEffect(whenKeywordChange, [keyword]);
  useEffect(whenCounterChange, [counter]);

  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here.."
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default App;
