import './App.css';
import AddToDo from './components/AddToDo';
import ToDoList from './components/ToDoList';
import { useState, useEffect } from 'react';


function App() {


  const [toDos, setToDos] = useState([])

  useEffect(()=> {

  }, [])

  return (
    <div className="App">
      <AddToDo />
      <ToDoList />
    </div>
  );
}

export default App;
