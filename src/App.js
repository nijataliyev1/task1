import './App.css';
import { useState } from 'react';

function App() {
  let [display, setDisplay] = useState("none")
  let [display2, setDisplay2] = useState("none")
  let [warning, setWarning] = useState("")
  function clickText() {
    setDisplay(display == "none" ? "block" : "none")
  }
  function warningClick() {
    setWarning("red")
    alert("Warning")
  }
  function clickText1() {
    setDisplay2(display2 == "none" ? "block" : "none")
  }
  return (
    <div className="App">
      <button className='text' onClick={clickText}>Text</button>
      <button className={warning} onClick={warningClick}>Warning message</button>
      <button className='hint' onMouseEnter={clickText1} onMouseLeave={clickText1}>hint</button>
      <p className={display}>Text </p>
      <p className={display2}> ERROR </p>
    </div>
  );
}

export default App;
