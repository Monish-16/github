import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getEventsStart, createEventStart, updateEventStart } from '../../../Actions/eventAction';
import Paper from '@mui/material/Paper';
import { Styles } from '../../../CSS/TableStyle';
import MUIDataTable from "mui-datatables";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import EventForm from './EventForm';
import { toast } from "react-toastify";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';


const Event = () => {

  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const initialValue = {
    name: '',
    description: '',
    isActive: false
  }
  let Events = useSelector(state => state.fetchEvents.events);
  const [formData, setFormdata] = useState(initialValue);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setFormdata(initialValue);
  };
  useEffect(() => {
    dispatch(getEventsStart());
  }, [dispatch]);

  const handleUpdate = (Id) => {
    const eventData = Events.find((e) => e.id === Id);
    setFormdata(eventData);
    handleClickOpen();
    // console.log(eventData);
  };

  const handleDelete = (Id) => {
    const eventData = Events.find((e) => e.id === Id);
    // const da = eventData.isDeleted;   
    if (Object.keys(eventData).length > 0) {
      const confirm = window.confirm("Are you sure, you want to Delete this Event row ?");
      eventData.isDeleted = true;
      if (confirm) {
        dispatch(updateEventStart(eventData));
        toast.success("Event Deleted Success ");
        setTimeout(() => dispatch(getEventsStart()), 2000);
      }
    }
  }

  const onChange = (e) => {
    const { value, id, checked, name } = e.target;
    setFormdata({ ...formData, [id]: value, [name]: checked })
  }

  const handleFormSubmit = (formData) => {
    if (formData.id) {
      dispatch(updateEventStart(formData))
      handleClose();
      toast.success("Event Updated successfully");
      setTimeout(() => dispatch(getEventsStart()), 2000);
    } else {
      dispatch(createEventStart(formData));
      // console.log(formData)
      handleClose();
      toast.success("Event Added Successfully");
      setTimeout(() => dispatch(getEventsStart()), 2000);
    }

  };

  const columns = [
    {
      name: 'name',
      label: 'Event Name',
    },
    {
      name: 'description',
      label: 'Event Description',
    },
    {
      name: 'isActive',
      label: 'Status',
      // type:'boolean',
      options: {
        customBodyRender: (value) => {
          return (
            <div>
              {value.toString() === "true"
                ? "Active"
                : value.toString() === "false"
                  ? "InActive"
                  : "InActive"}
            </div>
          );
        },
      }
    },
    {
      name: "id",
      label: 'Actions',
      options: {
        customBodyRender: (value, tableMeta) => {
          return (
            <div>
              <Tooltip title="Edit">
                <IconButton onClick={() => handleUpdate(value)} >
                  <EditIcon
                    color="info"
                  />
                </IconButton>
              </Tooltip>
              <Tooltip title="Delete">
                <IconButton onClick={() => handleDelete(value)}>
                  <DeleteIcon
                    color="error"
                  />
                </IconButton>
              </Tooltip>
            </div>
          );
        }
      },
    },
  ];



  const options = {
    exportButton: true,
    filter: true,
    filterType: "dropdown",
    responsive: "standard",
    fixedSelectColumn: false,
    resizableColumns: false,
    rowsPerPageOptions: [5, 10, 15, 30, 50, 100],
    jumpToPage: true,
    textLabels: {
      pagination: {
        next: "Next >",
        previous: "< Previous",
        rowsPerPage: "Total items Per Page",
        displayRows: "of"
      }
    },
  };
  return (
    <div>
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <Typography className='tab_head'>Event Listing</Typography>
        <div>
          <Grid align="right">
            <Button variant="standard" className="addPop" onClick={handleClickOpen}><AddIcon className='addicon' />Add Event</Button>
          </Grid>
          <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <Styles>
              <MUIDataTable
                data={Events}
                columns={columns}
                options={options}
              />
            </Styles>
          </Paper>

          <EventForm
            open={open}
            handleClose={handleClose}
            data={formData}
            onChange={onChange}
            handleFormSubmit={handleFormSubmit}
          />
        </div>
      </Paper>
    </div>
  )
}

export default Event;