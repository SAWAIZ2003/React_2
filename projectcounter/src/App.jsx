import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 const [counter,setCounter] = useState(1)
  // let counter = 5;
   
  const addValue = () => {
    if (counter < 22) {
      console.log("clicked", counter);
      setCounter(counter + 1);
    } else {
      console.log("Maximum value reached");
    }
  }

  const removeValue = () =>{
    setCounter(counter-1)
  }

  return (
    <>
     <h1>getting started</h1>
     <h2>Counter value : {counter}</h2>

      <button onClick={addValue}>Add {counter}</button>
      <br />
      <button
      onClick={removeValue}
      >Remove Value {counter}</button>
       <footer>{counter}</footer>
    </>
  )
}

export default App
