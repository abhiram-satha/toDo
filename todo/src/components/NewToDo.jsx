import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ToDoItem from './ToDoItem';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '4px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function NewToDo({newItems, createComment, deletePost, listOfComments, changeStatusToPending, changeStatusToCompleted}) {
// console.log(newItems)
  const newItem = newItems.map((item)=> {
    // console.log(item)
    return <ToDoItem key={item.id} id={item.id} deletePost={deletePost} item={item.message} status={item.status_id} listOfComments={listOfComments} createComment={createComment} changeStatusToPending={changeStatusToPending} changeStatusToCompleted={changeStatusToCompleted}></ToDoItem>
  })

  // console.log(listOfComments)
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
      This is New

        {newItem}
      </CardContent>
      
    </Card>
  );
}
