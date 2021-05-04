// import logo from './logo.svg';
// import './App.css';
import {useState} from 'react'
import Header from './components/Header';
import Tasks from './components/Tasks'

function App() {
  const [tasks] = useState([
    {
        id:1, description:'task 1', day:'today'
    },
    {
        id:2, description:'task 2'
    },
    {
        id:3, description:'task 3'
    },
    {
        id:4, description:'task 4'
    },
    {
        id:5, description:'task 5'
    },
])
  return (
    <div className="container">
      <h1>Hello World!! (from react) </h1>
      <Header title="myApplication" />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
