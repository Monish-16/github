import React from 'react';
import { useState } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useDispatch } from 'react-redux';
import { toast } from "react-toastify";
import { updateEventStart, getEventsStart } from '../Actions/eventAction';
import EditIcon from '@mui/icons-material/Edit';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const UpdateForm = (props) => {
  const name = props.event.name
  const description = props.event.description
  const isActive = props.event.isActive
  const [nameValue, setNameValue] = useState(name);
  const [DescriptionValue, setDescriptionValue] = useState(description);
  const [isActivevalue, setIsActivevalue] = useState(isActive);
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleChange = (event) => {
    setIsActivevalue(event.target.checked)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (props.Mode === "edit") {
      const eventObj = {
        id: props.event.id,
        name: nameValue,
        description: DescriptionValue,
        isActive: isActivevalue,
      }
      dispatch(updateEventStart(eventObj))
      toast.success(" Successfully Updated ")
      setTimeout(() => dispatch(getEventsStart()), 1000)
    }
  };

  return (
    <>
      <Button variant="primary" onClick={handleClickOpen}>
        <EditIcon />
      </Button>
      <Dialog      
        maxWidth='md'
        open={open}
        onClose={handleClose}
      >
        <DialogTitle style={{ backgroundColor: "#be1e2d", color: "#FFFFFF" }}>Add Event</DialogTitle>
        <form onSubmit={handleSubmit}>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <TextField
                  value={nameValue}
                  name="name"
                  type="text"
                  onChange={(e) => setNameValue(e.target.value)}
                  label="Name"
                  required 
                  fullWidth                
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  value={DescriptionValue}
                  name="description"
                  type="text"
                  onChange={(e) => setDescriptionValue(e.target.value)}
                  label="Description"
                  required
                  fullWidth                 
                />
              </Grid>
              <FormControlLabel label='isActive' control={<Checkbox checked={isActivevalue} onChange={handleChange} />} />
            </Grid>
          </Box>
          <DialogActions>
            <Button onClick={handleClose} variant="outlined" className='Btn1'>Cancel</Button>
            <Button type="submit" onClick={handleClose} variant="outlined" className='Btn2'>Update</Button>
          </DialogActions>
        </form>

      </Dialog>
    </>
  );
}

export default UpdateForm;