import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import SingleComment from './SingleComment';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function Comments({id, comments}) {

  let comment = "";


  const aComment = 
      comments.filter(comment => {
        return comment.post_id === id
      }).map(comment => {
        // console.log(comment)
        return <SingleComment comment={comment.comment}></SingleComment>
      })

    
  
    
  return (
    <Card sx={{ minWidth: 200 }}>
      <CardContent>
        {aComment}
      </CardContent>
      
    </Card>
  );
}
