import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import '../../../CSS/Common.scss';


export default function DeleteModel({ open, handleClose, delData, handleDelete }) {

    //   const { id, name, description, isActive } = data;
    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                fullWidth
                maxWidth='md'
            >
                <DialogTitle id="alert-dialog-title" className='addTitle'>
                    {/* {id ? "Update Event" : 'Add Event'} */}
                </DialogTitle>

                <DialogActions>
                    <Button
                        onClick={handleClose}
                        className="cancel_Btn"
                        variant='contained'
                    >
                        No
                    </Button>
                    <Button
                        onClick={() => handleDelete(delData)}
                        className="save_Btn"
                        variant='contained'>
                        Yes
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};