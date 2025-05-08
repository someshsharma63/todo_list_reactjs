import { useState } from 'react';
import { MdDelete } from "react-icons/md";
import { MdModeEditOutline } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import './App.css';

// STATE VARIABLES ARE IMMUTABLE CHANGE NAHI HO SKTA

function App() {
  const [inp, setinp] = useState('');   //inp: A state variable that holds the current text input from the user.
  const [tasks, settask] = useState([]);      //hold all task object
  const [isEditing, setIsEditing] = useState(false); //flag task being edited  
  const [editId, setEditId] = useState(null);   //store id of task

  function changeInp(e) {
    setinp(e.target.value);     //
  }

  function addTask() {
    if (inp.trim() === '') return; // Prevent adding empty tasks
    if (isEditing) {
      settask(
        tasks.map((task) =>
          task.id === editId ? { ...task, tasks: inp } : task
        )
      );
      setIsEditing(false);
      setEditId(null);
    } else {
      const obj = { id: Date.now(), tasks: inp };
      settask([...tasks, obj]);
    }
    setinp('');
  }
  
  function deleteTask(e,id)
  {
    const indexToDelete=tasks.findIndex((obj)=>
    {
      return obj.id===id
    })


     settask(tasks.filter((obj,index)=>
      {
        return index !=indexToDelete
      })) 
  }

  function editTask(e, id) {
    const taskToEdit = tasks.find((task) => task.id === id);
    setinp(taskToEdit.tasks);
    setIsEditing(true);
    setEditId(id);
  }
  

  return (
    <>
  
  <>
    <div className='data'>
      <h2>To do list</h2>
      <input
        type="text"
        value={inp}
        onChange={changeInp}
        placeholder='Enter your task here'
      />
      <br />
      <button onClick={addTask}>
        {isEditing ? 'Update Task' : 'Add Task'}
      </button>

      <div className='resultlist'>
        <ul>
          {tasks.map((obj) => (
            <li key={obj.id}>
              <span>
                <MdDelete onClick={(e) => deleteTask(e, obj.id)} />
                <MdModeEditOutline onClick={(e) => editTask(e, obj.id)} />
                <FaCheck />
                {obj.tasks}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </>
);

    </>
  );
}

export default App;
