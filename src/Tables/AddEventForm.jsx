import React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import AddIcon from '@mui/icons-material/Add';
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { createEventStart, getEventsStart } from '../Actions/eventAction';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import '../../../CSS/common.css';
import InputLabel from '@mui/material/InputLabel';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const initialState = {
  name: "",
  description: "",
  isActive: false,
};

const AddEvent = () => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState(initialState.name);
  const [description, setDescription] = useState(initialState.description);
  const [isActive, setIsActive] = useState(initialState.isActive);

  const formValue = { name, description, isActive };
  const dispatch = useDispatch();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event) => {
    setIsActive(event.target.checked)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && description) {
      dispatch(createEventStart(formValue));
      toast.success("event added successfully");      
      setTimeout(() => dispatch(getEventsStart()), 1000);
    }
  }

  return (
    <>      
      <Button variant="standard" onClick={handleClickOpen} className="addPop">
        <AddIcon className='addicon' />Add Event
      </Button>
      <Dialog
        fullWidth
        maxWidth='md'
        open={open}
        onClose={handleClose}
      >
        <DialogTitle className='addTitle'>Add Event</DialogTitle>
        <form onSubmit={handleSubmit}>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <InputLabel className="labelField" >Name*</InputLabel>
                <TextField
                  value={name || ""}
                  name="name"
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={6}>
                <InputLabel className="labelField" >Description*</InputLabel>
                <TextField
                  value={description || ""}
                  name="description"
                  type="text"
                  onChange={(e) => setDescription(e.target.value)}
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel label='isActive' control={<Checkbox checked={isActive} onChange={handleChange} />} />
              </Grid>
            </Grid>
          </Box>
          <DialogActions>
            <Button onClick={handleClose} variant="outlined" className='Btn1'>Cancel</Button>
            <Button type="submit" onClick={handleClose} variant="outlined" className='Btn2'>Save</Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
}

export default AddEvent;
