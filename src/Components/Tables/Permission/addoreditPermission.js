import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import { useSelector } from 'react-redux';
import DialogTitle from '@mui/material/DialogTitle';
import { TextField } from '@material-ui/core';
import { MenuItem } from '@material-ui/core';

export default function PermissionDialog({ open, handleClose, data, onChange, handleFormSubmit }) {

    const { id, name, description, parentSetId } = data;

    // console.log("hi", data)
    const permissions = useSelector(state => state.fetchPermissions.permissions)
    return (
        <div>

            <Dialog
                open={open}
                onClose={handleClose}
              
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title"
                   style={{
                    backgroundColor:'#A80000'
                   }}>
                    {id ? "Update User" : 'Create User'}
                </DialogTitle>
                <DialogContent>
                    <form>
                        <TextField name="name" value={name}
                            onChange={(e) => onChange(e)}
                            placeholder='Enter Event Name' label=" Name" variant='outlined' margin='dense' fullWidth />

                        <TextField name="description" value={description}
                            onChange={(e) => onChange(e)} placeholder='Enter Event Description' label=" Description" variant='outlined' margin='dense' fullWidth />

                        <TextField select
                            name="parentSetId" 
                            value={parentSetId}
                            onChange={(e) => onChange(e)}
                            placeholder='Select' 
                            label="Parent" 
                            variant='outlined' 
                            margin='dense'
                             fullWidth >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            {permissions.map((permission) => (
                                <MenuItem key={permission.id} value={permission.parentSetId}>{permission.parentName}</MenuItem>
                            ))}
                        </TextField>
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="secondary"
                        variant='outlined'
                    >Cancel</Button>
                    <Button color="primary"
                        onClick={() => handleFormSubmit(data)}
                        variant='contained'>
                        Submit
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
