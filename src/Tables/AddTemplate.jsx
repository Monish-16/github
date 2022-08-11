import React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import AddIcon from '@mui/icons-material/Add';
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { createTemplateStart, getTempalateStart } from '../Actions/templateAction';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import InputLabel from '@mui/material/InputLabel';
import '../../../CSS/common.css';
import MenuItem from '@mui/material/MenuItem';
// import DialogContent from '@mui/material/DialogContent';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

// const initialFValues = {
//   Type: '',
//   Subject: '',
//   BodyText: '',
//   IsActive: false,
//   EventId: "",
// }

const AddTemplate = () => {
  const [open, setOpen] = useState(false);
  const [Subject, setSubject] = useState("");
  const [BodyText, setBodyText] = useState("");
  const [Type, setType] = useState("");
  const [eventId, setEventId] = useState("");
  const [isActive, setIsActive] = useState(false);

  const formValue = {
    BodyText: BodyText,
    EventId: eventId,
    IsActive: true,
    IsDeleted: false,
    Subject: Subject,
    Type: Type,
    Id: 0,
  }
console.log(formValue);
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
  const Events = useSelector(state => state.fetchEvents.events);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formValue) {
      dispatch(createTemplateStart(formValue))
      toast.success("event added successfully")
      setTimeout(() => dispatch(getTempalateStart()), 2000)
      console.log(formValue)
    }
  }

  return (
    <div>
      <Button variant="standard" onClick={handleClickOpen} className="addPop">
        <AddIcon />Add Notification
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
                  value={Type}
                  variant="outlined"
                  fullWidth
                  onChange={(e) => setType(e.target.value)}
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
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
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
                  value={Subject}
                  name="Subject"
                  type="text"
                  onChange={(e) => setSubject(e.target.value)}
                  required
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel label='Status'
                  control={<Checkbox checked={isActive} onChange={handleChange} />}
                />
              </Grid>
              <Grid item xs={12}>
                <InputLabel className="labelField">BodyText*</InputLabel>
                <TextField
                  value={BodyText}
                  name="BodyText"
                  type="text"
                  onChange={(e) => setBodyText(e.target.value)}
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
            <Button type="submit" onClick={handleClose} variant="outlined" className='Btn2'>Save</Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
};

export default AddTemplate;
// import * as React from 'react';
// import Button from '@mui/material/Button';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogTitle from '@mui/material/DialogTitle';
// import AddIcon from '@mui/icons-material/Add';
// import CloseIcon from '@mui/icons-material/Close';
// import '../../../CSS/common.css';
// import Controls from "../../../Forms/conrols/Controls";
// import { useForm, Form } from '../../../Forms/Form/useForm';
// import { useDispatch, useSelector } from "react-redux";
// import { toast } from "react-toastify";
// import { createTemplateStart, getTempalateStart } from '../../../Actions/templateAction';
// import InputLabel from '@mui/material/InputLabel';
// import TextField from '@mui/material/TextField';

// const initialFValues = {
//   Type: '',
//   Subject: '',
//   BodyText: '',
//   IsActive: false,
//   EventId: "",
// }

// const TypeSelect = () => ([
//   { id: 48, title: 'email' },
//   { id: 49, title: 'sms' },
// ]);
// const EventSelect = () => ([
//   { id: "Rates expiration", title: 'Rates expiration' },
//   { id: '204 ASN Received', title: '204 ASN Received' },
//   { id: 'Invite User', title: 'Invite User' },
//   { id: 'MDS File Processed', title: 'MDS File Processed' },
// ]);

// export default function AddTemplate() {
//   const [open, setOpen] = React.useState(false);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };
//   const handleClose = () => {
//     setOpen(false);
//   };
//   const {
//     values,
//     handleInputChange,
//     resetForm
//   } = useForm(initialFValues, true);
//   console.log(values)
//   const dispatch = useDispatch();
//   const Events = useSelector(state => state.fetchEvents.events);

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     dispatch(createTemplateStart(values));
//     toast.success("event added successfully");
//     setTimeout(() => dispatch(getTempalateStart()), 1000)
//   }

//   return (
//     <div>
//       <Button variant="standard" className="addPop" onClick={handleClickOpen} >
//         <AddIcon className='addicon' />Add Notification
//       </Button>

//       <Dialog open={open} onClose={handleClose}>
//         <DialogTitle className="addTitle" >Subscribe
//           <Button variant="standard" onClick={handleClose} style={{ marginLeft: 395 }}><CloseIcon /></Button>
//         </DialogTitle>
//         <DialogContent >
//           <Form onSubmit={handleSubmit}>
//             <InputLabel>Type*</InputLabel>
//             <Controls.Select
//               name="Type"
//               value={values.Type}
//               onChange={handleInputChange}
//               options={TypeSelect()}
//             />
//             <InputLabel>EventName*</InputLabel>
//             <Controls.Select
//               name="EventId"
//               value={values.EventId}
//               onChange={handleInputChange}
//               options={EventSelect()}
//             />
//             <InputLabel>Subject*</InputLabel>
//             <Controls.Input
//               name="Subject"
//               value={values.Subject}
//               onChange={handleInputChange}
//             />
//             <InputLabel>BodyText*</InputLabel>
//             <Controls.Input
//               name="BodyText"
//               value={values.BodyText}
//               onChange={handleInputChange}
//             />
//             {/* <InputLabel>BodyText*</InputLabel> */}
//             <Controls.Checkbox
//               name="IsActive"
//               label="IsActive"
//               value={values.IsActive}
//               onChange={handleInputChange}
//             />
//             <DialogActions>
//               <Controls.Button
//                 type="submit"
//                 text="Save"
//                 onClick={handleClose}
//               />
//               <Controls.Button
//                 text="Cancel"
//                 color="default"
//                 onClick={handleClose} />
//             </DialogActions>
//           </Form>
//         </DialogContent>
//       </Dialog>
//     </div>
//   );
// }