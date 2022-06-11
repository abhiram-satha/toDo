import './App.css';
import AddToDo from './components/AddToDo';
import ToDoList from './components/ToDoList';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {

  
  const [toDos, setToDos] = useState([])

  useEffect(()=> {
    async function getPosts() {
      const results = await axios('http://localhost:8080/api/posts')
      setToDos(results.data.posts)
    }

    getPosts()
  }, [])

  const createNewToDo = (event) => {
    event.preventDefault();

    const userInput = event.target[0].value
    axios.post('http://localhost:8080/api/posts', {
      user_id: 1,
      message: userInput,
      status_id: 1
    })
  }

  return (
    <div className="App">


      <AddToDo createNewToDo={createNewToDo}/>

      {toDos.length >= 1 && <ToDoList listOfToDos={toDos}/>}
      
    </div>
  );
}

export default App;
