import "./AddToDo.css"

import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";


const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function AddToDo ({createNewToDo}) {
  return(
    <>
    <Card sx={{ minWidth: 350 }} className="cardContent addNewToDo">
      <CardContent >
      <form onSubmit={(event)=>{createNewToDo(event)}}>
      <input type="text" placeholder="Add New To Do"></input>
    </form>
      </CardContent>
    </Card>

    </>
  )
}