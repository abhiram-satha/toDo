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
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function CompletedToDo({completedItems}) {

  const completedItem = completedItems.map(item => {
    return <ToDoItem key={item.id} item={item.message}></ToDoItem>
  })

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
      This is CompletedToDo
      {completedItem}
      </CardContent>
      
    </Card>
  );
}
