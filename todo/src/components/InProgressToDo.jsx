import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ToDoItem from "./ToDoItem";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function InProgressToDo({
  pendingItems,
  createComment,
  deletePost,
  listOfComments,
  changeStatusToCompleted,
  changeStatusToNew,
}) {
  const pendingItem = pendingItems.map((item) => {
    return (
      <ToDoItem
        key={item.id}
        item={item.message}
        status={item.status_id}
        id={item.id}
        deletePost={deletePost}
        createComment={createComment}
        listOfComments={listOfComments}
        changeStatusToCompleted={changeStatusToCompleted}
        changeStatusToNew={changeStatusToNew}
      ></ToDoItem>
    );
  });

  // console.log(pendingItems)
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent className="progressToDoCard">
        <p>Pending Tasks</p>
        {pendingItem}
      </CardContent>
    </Card>
  );
}
