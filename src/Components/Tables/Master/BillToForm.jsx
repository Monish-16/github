import React from 'react';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextareaAutosize from '@mui/material/TextareaAutosize';

const BillToForm = ({ onChange, billData }) => {
  
    return (
        <div>
            <form>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={3}>
                        <Grid item xs={2.4}>
                            <InputLabel className='input_label'> Contact name *</InputLabel>
                            <TextField
                                name='ContactName'
                                value={billData.ContactName || ''}
                                onChange={(e) => onChange(e)}
                                placeholder='Enter Contact name  '
                                variant='outlined'
                                margin='dense'
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={2.4}>
                            <InputLabel className='input_label'>Address(Street#,name) </InputLabel>
                            <TextField
                                name='Address1'
                                value={billData.Address1}
                                onChange={(e) => onChange(e)}
                                placeholder='Enter Address '
                                variant='outlined'
                                margin='dense'
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={2.4}>
                            <InputLabel className='input_label'>Address BuildingFloor </InputLabel>
                            <TextField
                                name='Address2'
                                value={billData.Address2}
                                onChange={(e) => onChange(e)}
                                placeholder='Enter bilding floor '
                                variant='outlined'
                                margin='dense'
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={2.4}>
                            <InputLabel className='input_label'> City</InputLabel>
                            <TextField
                                name='City'
                                value={billData.City}
                                onChange={(e) => onChange(e)}
                                placeholder='Enter City'
                                variant='outlined'
                                margin='dense'
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={2.4}>
                            <InputLabel className='input_label'>State</InputLabel>
                            <TextField
                                name='State'
                                value={billData.State}
                                onChange={(e) => onChange(e)}
                                placeholder='Enter State'
                                variant='outlined'
                                margin='dense'
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={2.4}>
                            <InputLabel className='input_label'>Zip Code *</InputLabel>
                            <TextField
                                name='Zipcode'
                                value={billData.Zipcode}
                                onChange={(e) => onChange(e)}
                                placeholder='Enter Zip Code '
                                variant='outlined'
                                margin='dense'
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={2.4}>
                            <InputLabel className='input_label'> Phone Number</InputLabel>
                            <TextField
                                name='Phone'
                                value={billData.Phone || ""}
                                onChange={(e) => onChange(e)}
                                placeholder='Enter Building Floor'
                                variant='outlined'
                                margin='dense'
                                fullWidth
                            />
                        </Grid>

                        <Grid item xs={2.4}>
                            <InputLabel className='input_label'> Contact Email *</InputLabel>
                            <TextField
                                name='ContactEmail'
                                value={billData.ContactEmail || ""}
                                onChange={(e) => onChange(e)}
                                placeholder='Enter Contact Email '
                                variant='outlined'
                                margin='dense'
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={2.4}>
                            <InputLabel className='input_label'>Contact Phone *</InputLabel>
                            <TextField
                                name='ContactPhone'
                                value={billData.ContactPhone || ""}
                                onChange={(e) => onChange(e)}
                                placeholder='Enter Contact Phone *'
                                variant='outlined'
                                margin='dense'
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={2.4}>
                            <InputLabel className='input_label'>Fax Number</InputLabel>
                            <TextField
                                name="Fax"
                                value={billData.Fax}
                                onChange={(e) => onChange(e)}
                                placeholder='Enter Fax Number'
                                variant='outlined'
                                margin='dense'
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <InputLabel className='input_label'> Terms</InputLabel>
                            <TextField
                                name='Terms'
                                value={billData.Terms}
                                onChange={(e) => onChange(e)}
                                placeholder='Enter Terms'
                                variant='outlined'
                                margin='dense'
                                fullWidth
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <InputLabel className='input_label'>comments</InputLabel>
                            <TextareaAutosize
                                name='Comments'
                                value={billData.Comments}
                                onChange={(e) => onChange(e)}
                                minRows={6}
                                className='text_area'
                                placeholder='comments'
                            />
                        </Grid>
                    </Grid>
                </Box>
            </form>
        </div>
    )
}

export default BillToForm;