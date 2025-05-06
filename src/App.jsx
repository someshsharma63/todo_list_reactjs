import { useState } from 'react'
import './App.css'

function App() {

  const[inp,setinp]=useState("")
  const[tasks,settask]=useState([])

  function changeInp(e)
  {
    setinp(e.target.value)
  }

  function addTask()
  {
    settask([...tasks,inp])
    setinp("")   //to blank the input
    
  }
  console.log(tasks);

  

  return (
    <>
     <div className='data'>
      <h2>To do list</h2>
      <input type="text" value={inp} onChange={changeInp} placeholder='Enter your task here'/><br></br>
      <button onClick={addTask}>Add task</button>

      <div className='resultlist'>
      <ul>
      {
        tasks.map((mytask)=>
        {
          return <li>{mytask}</li>
        })
      }
     </ul>
      </div>
  
     </div>
    </>
  )
}

export default App
