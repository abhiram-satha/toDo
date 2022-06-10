import './ToDoList.css';

import CompletedToDo from "./CompletedToDo";
import InProgressToDo from "./InProgressToDo";
import NewToDo from "./NewToDo";



export default function ToDoList({listOfToDos}) {

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
      <NewToDo newItems={newItems()}/>
      <InProgressToDo pendingItems={pendingItems()}/>
      <CompletedToDo completedItems={completedItems()}/>
    </div>
  )
}