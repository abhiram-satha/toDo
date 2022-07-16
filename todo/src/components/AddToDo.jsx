import "./AddToDo.css";

import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function AddToDo({ createNewToDo }) {
  return (
    <>
      <div className="background-blue">
        <Card sx={{ minWidth: 350 }} className="cardContent addNewToDo">
          <CardContent>
            <Box
              sx={{
                width: 500,
                maxWidth: "100%",
              }}
            ></Box>
            <form
              onSubmit={(event) => {
                createNewToDo(event);
              }}
            >
              <TextField
                onSubmit={(event) => {
                  createNewToDo(event);
                }}
                fullWidth
                placeholder="Add New Task"
                id="fullWidth"
              />
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
