import "./App.css";
import AddToDo from "./components/AddToDo";
import ToDoList from "./components/ToDoList";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [toDos, setToDos] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    async function getPosts() {
      const results = await axios("http://localhost:8080/api/posts");
      setToDos(results.data.posts);
    }
    async function getComments() {
      const results = await axios("http://localhost:8080/api/comments");
      // console.log(results.data.comment)
      setComments(results.data.comment);
    }

    getPosts();
    getComments();
  }, []);

  const createNewToDo = (event) => {
    event.preventDefault();

    const userInput = event.target[0].value;
    axios
      .post("http://localhost:8080/api/posts", {
        user_id: 1,
        message: userInput,
        status_id: 1,
      })
      .then(() => {
        return axios("http://localhost:8080/api/posts");
      })
      .then((result) => setToDos(result.data.posts));

    event.target[0].value = "";
  };

  const changeStatusToPending = (id, event) => {
    event.preventDefault();

    axios
      .put(`http://localhost:8080/api/posts/${id}`, {
        status_id: 2,
      })
      .then(() => {
        return axios("http://localhost:8080/api/posts");
      })
      .then((result) => {
        setToDos(result.data.posts);
      });
  };

  const changeStatusToCompleted = (id, event) => {
    event.preventDefault();

    axios
      .put(`http://localhost:8080/api/posts/${id}`, {
        status_id: 3,
      })
      .then(() => {
        return axios("http://localhost:8080/api/posts");
      })
      .then((result) => {
        setToDos(result.data.posts);
      });
  };

  const changeStatusToNew = (id, event) => {
    event.preventDefault();

    axios
      .put(`http://localhost:8080/api/posts/${id}`, {
        status_id: 1,
      })
      .then(() => {
        return axios("http://localhost:8080/api/posts");
      })
      .then((result) => {
        setToDos(result.data.posts);
      });
  };

  const createComment = (id, event) => {
    event.preventDefault();

    const comment = event.target[0].value;
    axios.post(`http://localhost:8080/api/comments`, {
      comment,
      post_id: id 
    }).then(()=> {
      return axios("http://localhost:8080/api/comments")
    })
    .then((result)=> {
      setComments(result.data.comment)
    })
  };

  return (
    <div className="App">
      <AddToDo createNewToDo={createNewToDo} />

      {toDos.length >= 1 && (
        <ToDoList
          listOfToDos={toDos}
          listOfComments={comments}
          changeStatusToPending={changeStatusToPending}
          changeStatusToCompleted={changeStatusToCompleted}
          changeStatusToNew={changeStatusToNew}
          createComment={createComment}
        />
      )}
    </div>
  );
}

export default App;
