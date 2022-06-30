import "./ToDoList.css";

import CompletedToDo from "./CompletedToDo";
import InProgressToDo from "./InProgressToDo";
import NewToDo from "./NewToDo";
import ToDoItem from "./ToDoItem";

export default function ToDoList({
  listOfToDos,
  deletePost,
  listOfComments,
  changeStatusToPending,
  changeStatusToCompleted,
  changeStatusToNew,
  createComment,
}) {
  const newItems = () => {
    const newToDoItem = listOfToDos.filter(
      (listOfToDo) => listOfToDo.status_id === 1
    );

    return newToDoItem;
  };

  const pendingItems = () => {
    const pendingToDoItem = listOfToDos.filter(
      (listOfToDo) => listOfToDo.status_id === 2
    );

    return pendingToDoItem;
  };

  const completedItems = () => {
    const completedToDoItem = listOfToDos.filter(
      (listOfToDo) => listOfToDo.status_id === 3
    );

    return completedToDoItem;
  };

  return (
    <div className="toDoFlex">
      <NewToDo
        newItems={newItems()}
        deletePost={deletePost}
        createComment={createComment}
        listOfComments={listOfComments}
        changeStatusToPending={changeStatusToPending}
        changeStatusToCompleted={changeStatusToCompleted}
      />
      <InProgressToDo
        pendingItems={pendingItems()}
        deletePost={deletePost}
        createComment={createComment}
        listOfComments={listOfComments}
        changeStatusToCompleted={changeStatusToCompleted}
        changeStatusToNew={changeStatusToNew}
      />
      <CompletedToDo
        completedItems={completedItems()}
        deletePost={deletePost}
        createComment={createComment}
        listOfComments={listOfComments}
        changeStatusToPending={changeStatusToPending}
        changeStatusToNew={changeStatusToNew}
      />
    </div>
  );
}
