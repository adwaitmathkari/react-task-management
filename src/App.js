// import logo from './logo.svg';
// import './App.css';
import { useState } from 'react'
import Header from './components/Header';
import Tasks from './components/Tasks'

function App() {

  let date = (new Date(Date.now())).toDateString();
  const [tasks, setTasks] = useState([
    {
      id: 1, description: 'task 1', day: date, reminder: true
    },
    {
      id: 2, description: 'task 2', day: date, reminder: true
    },
    {
      id: 3, description: 'task 3', day: date, reminder: false
    },
    {
      id: 4, description: 'task 4', day: date, reminder: true
    },
    {
      id: 5, description: 'task 5', day: date, reminder: false
    },
  ])

  const deleteTask = (id) => {
    console.log('delete', id)
    setTasks(tasks.filter((t) => t.id !== id))
  }

  const toggleReminder = (id) => {
    console.log('double clicking')
    setTasks(tasks.map((task)=>{
      return task.id === id? {...task, reminder:!task.reminder}: task
    }))
  }
  
  return (
    <div className="container">
      <h1>Hello World!! (from react) </h1>
      <Header title="myApplication" />
      <Tasks tasks={tasks} onDelete={deleteTask} toggleReminder={toggleReminder}/>
    </div>
  );
}

export default App;
