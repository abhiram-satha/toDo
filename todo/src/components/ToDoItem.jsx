import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Comments from './Comments';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function ToDoItem({item, id, status, deletePost, listOfComments, createComment, changeStatusToPending, changeStatusToCompleted, changeStatusToNew}) {

  // console.log(status, item)

  
    
  return (
    <Card sx={{ minWidth: 200 }}>
      <CardContent>
      {item}
      <button onClick={(event)=>{deletePost(id, event)}}>Delete</button>
      <details>
        <summary>Details</summary>
        {status !== 1 && <button className="newToDoCard" onClick={(event)=>changeStatusToNew(id, event)}>New</button>}
        {status !== 2 && <button className="progressToDoCard" onClick={(event)=>changeStatusToPending(id, event)}>Pending</button>}
        {status !== 3 && <button className="completedToDoCard" onClick={(event)=>changeStatusToCompleted(id, event)}>Completed</button>}

        <Comments id={id} createComment={createComment} comments={listOfComments}></Comments>
      </details>
      </CardContent>
      
    </Card>
  );
}
