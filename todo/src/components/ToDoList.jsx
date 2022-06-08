import './ToDoList.css';

import CompletedToDo from "./CompletedToDo";
import InProgressToDo from "./InProgressToDo";
import NewToDo from "./NewToDo";


export default function ToDoList() {
  return(
    <div className="toDoFlex">
      <NewToDo />
      <InProgressToDo />
      <CompletedToDo />
    </div>
  )
}