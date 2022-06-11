import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CommentCard from './CommentCard';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function ToDoItem({item, id, listOfComments}) {

  // console.log(listOfComments)

  
    const listOfComment = listOfComments.filter(commentObject => {
      return commentObject.post_id === id
      // console.log(listOfComment)
    }).map()
     const commentArray =  <CommentCard comment={listOfComment}>  </CommentCard>
  return (
    <Card sx={{ minWidth: 200 }}>
      <CardContent>
      {item}
      <details>
        <summary>Comment</summary>
        {commentArray}
      </details>
      </CardContent>
      
    </Card>
  );
}
