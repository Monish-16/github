import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { TextField } from '@material-ui/core';
import InputLabel from '@mui/material/InputLabel';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import '../../../CSS/Common.scss';

export default function EventForm({ open, handleClose, data, onChange, handleFormSubmit }) {

  const { id, name, description, isActive } = data;
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth
        maxWidth='md'
      >
        <DialogTitle id="alert-dialog-title" className='addTitle'>
          {id ? "Update Event" : 'Add Event'}
        </DialogTitle>
        <DialogContent>
          <form>
            <InputLabel className='input_label'>name</InputLabel>
            <TextField
              id="name"
              value={name}
              onChange={(e) => onChange(e)}
              placeholder='Enter Event Name'
              variant='outlined'
              margin='dense'
              fullWidth
            />
            <InputLabel className='input_label'>description</InputLabel>
            <TextField
              id="description"
              value={description}
              onChange={(e) => onChange(e)}
              placeholder='Enter Event Description'
              variant='outlined'
              margin='dense' fullWidth
            />
            <FormControlLabel label='Status' control={<Checkbox checked={isActive} onChange={(e) => onChange(e)} name="isActive" />} />
          </form>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}            
            className="cancel_Btn"
            variant='contained'
          >Cancel</Button>
          <Button
            onClick={() => handleFormSubmit(data)}
            className="save_Btn"
            variant='contained'>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}