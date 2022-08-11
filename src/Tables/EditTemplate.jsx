import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { updateTemplateStart, getTempalateStart } from '../Actions/templateAction';
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import EditIcon from '@mui/icons-material/Edit';
import MenuItem from '@mui/material/MenuItem';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import Box from '@mui/material/Box';

const EditTemp = (props) => {
  const type = props.template.type;
  const subject = props.template.subject;
  const bodyText = props.template.bodyText;
  const isActive = props.template.isActive;
  const eventId = props.template.EventId;
  const [types, setTypes] = useState(type);
  const [EventId, setEventId] = useState("");
  const [subjects, setSubjects] = useState(subject);
  const [body, setBody] = useState(bodyText);
  const [isActives, setIsActives] = useState(isActive);
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleChange = (event) => {
    setIsActives(event.target.checked)
  };
  const Events = useSelector(state => state.fetchEvents.events);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (props.Modes === "edit") {
      const tempObjs = {
        id: props.template.id,
        Type: types,
        Subject: subjects,
        BodyText: body,
        IsActive: isActives,
        eventId: EventId,
      }
      dispatch(updateTemplateStart(tempObjs))
      setTimeout(() => dispatch(getTempalateStart()), 1000)
      toast.success(" Successfully Updated ")
    }
  };

  return (
    <>
      <Button variant="primary" onClick={handleClickOpen}>
        <EditIcon />
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth
        maxWidth='md'
      >
        <DialogTitle className='addTitle'>Notification Entry</DialogTitle>
        <form onSubmit={handleSubmit}>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <InputLabel className="labelField">Type*</InputLabel>
                <TextField
                  select
                  className="input_field"
                  value={types}
                  variant="outlined"
                  fullWidth
                  onChange={(e) => setTypes(e.target.value)}
                >
                  <MenuItem value=" ">none</MenuItem>
                  <MenuItem value={48} >email</MenuItem>
                  <MenuItem value={49} >sms</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={6}>
                <InputLabel className="labelField">Event Name*</InputLabel>
                <TextField
                  select
                  className="input_field"
                  id="entity_Id"
                  value={eventId}
                  variant="outlined"
                  fullWidth
                  onChange={(e) => setEventId(e.target.value)}
                >
                  <MenuItem value=""><em>None</em></MenuItem>
                  {Events.map((event) => (
                    <MenuItem key={event.id} value={event.id}>
                      {event.name}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12}>
                <InputLabel className="labelField">Subject*</InputLabel>
                <TextField
                  value={subjects}
                  name="Subject"
                  type="text"
                  onChange={(e) => setSubjects(e.target.value)}
                  required
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel label='Status'
                  control={<Checkbox checked={isActives} onChange={handleChange} />}
                />
              </Grid>
              <Grid item xs={12}>
                <InputLabel className="labelField">BodyText*</InputLabel>
                <TextField
                  value={body}
                  name="BodyText"
                  type="text"
                  onChange={(e) => setBody(e.target.value)}
                  // multiline
                  // rows={5}
                  // rowsMax={300}
                  fullWidth
                  variant="outlined"
                />
              </Grid>
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
};

export default EditTemp;