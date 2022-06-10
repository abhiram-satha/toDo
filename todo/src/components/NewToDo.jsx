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

export default function NewToDo({newItems}) {

  const newItem = newItems.map((item)=> {
    // console.log(item.message)
    return <ToDoItem item={item.message}></ToDoItem>
  })

  // console.log(newItems)
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
      This is New

        {newItem}
      </CardContent>
      
    </Card>
  );
}
