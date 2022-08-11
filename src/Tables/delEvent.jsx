import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { updateEventStart, getEventsStart } from '../../../Actions/eventAction';
import DialogActions from '@mui/material/DialogActions';
import DeleteIcon from '@mui/icons-material/Delete';
import DialogContent from '@mui/material/DialogContent';

const DeleteEvent = (props) => {
    const [open, setOpen] = useState(false);

    const dispatch = useDispatch();
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (props.Mode === "delete") {
            const eventObjs = {
                id: props.event.id,
                name: props.event.name,
                description: props.event.description,
                isActive: props.event.isActive,
                isDeleted: true,
            }
            setTimeout(() =>dispatch(updateEventStart(eventObjs)), 500)
            setTimeout(() => dispatch(getEventsStart()), 2000)
            toast.success(" Successfully deleted ")
        }
    };

    return (
        <>
            <Button variant="primary" onClick={handleClickOpen}>
                <DeleteIcon />
            </Button>
            <Dialog
                fullWidth
                maxWidth='sm'
                open={open}
                onClose={handleClose}
            >
                <DialogTitle style={{ backgroundColor: "#be1e2d", color: "#FFFFFF" }}>Are You Want To Delete</DialogTitle>
                <DialogContent >
                    <DialogActions >
                        <form onSubmit={handleSubmit}>
                            <Button onClick={handleClose} variant="outlined" className='Btn1'>No</Button>
                            <Button type="submit" onClick={handleClose} variant="outlined" className='Btn2'>Yes</Button>
                        </form>
                    </DialogActions>
                </DialogContent>
            </Dialog>
        </>
    );
}

export default DeleteEvent;