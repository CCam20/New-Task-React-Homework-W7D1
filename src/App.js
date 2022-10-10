import React, { useState } from 'react';
import './App.css';

function App() {

  const [tasks, setTasks] = useState([
    "Buy shopping", "Clean bathroom", "Car's MOT"
  ])

  const taskNodes = tasks.map((task, index) =>{
    return(
      <li key={index}><span>{task}</span></li>
    )
  })
  const [newTask, setNewTask] = useState("")

  const handleItemInput = (event) => {
    setNewTask(event.target.value)
  }
  const saveNewTask = (event) => {
    event.preventDefault();
    const copyTasks = [...tasks];
    copyTasks.push(newTask)
    setTasks(copyTasks)
    setNewTask("")
  }









  return (
    <div className="App">
    <h1>ToDo's</h1>
      
      <ul>
      {taskNodes}
      </ul>
      
      
      <form onSubmit={saveNewTask}>
      <label htmlFor='new-task'>Add a new task</label>
      <input id='new-task' type='text' value={newTask} onChange={handleItemInput} required />
      <input type="submit" value="Save New Task"/>
      </form>
   
    </div>
  );
}

export default App;
