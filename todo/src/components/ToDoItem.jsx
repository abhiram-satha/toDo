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

export default function ToDoItem({item, id, status, listOfComments, changeStatusToPending}) {

  console.log(status, item)

  
    
  return (
    <Card sx={{ minWidth: 200 }}>
      <CardContent>
      {item}
      <details>
        <summary>Comment</summary>
        {status !== 2 && <button onClick={(event)=>changeStatusToPending(id, event)}>Pending</button>}
        <Comments id={id} comments={listOfComments}></Comments>
      </details>
      </CardContent>
      
    </Card>
  );
}
