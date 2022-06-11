import './ToDoList.css';

import CompletedToDo from "./CompletedToDo";
import InProgressToDo from "./InProgressToDo";
import NewToDo from "./NewToDo";
import ToDoItem from "./ToDoItem"


export default function ToDoList({listOfToDos, listOfComments}) {

  const newItems = () => {
    const newToDoItem = listOfToDos.filter(listOfToDo => listOfToDo.status_id === 1)

    return newToDoItem
  }

  const pendingItems = () => {
    const pendingToDoItem = listOfToDos.filter(listOfToDo => listOfToDo.status_id === 2)

    return pendingToDoItem
  }

  const completedItems = () => {
    const completedToDoItem = listOfToDos.filter(listOfToDo => listOfToDo.status_id === 2)

    return completedToDoItem
  }
  
  return(
    <div className="toDoFlex">
      <NewToDo newItems={newItems()} listOfComments={listOfComments}/>
      <InProgressToDo pendingItems={pendingItems()} listOfComments={listOfComments}/>
      <CompletedToDo completedItems={completedItems()} listOfComments={listOfComments}/>
    </div>
  )
}