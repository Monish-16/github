import React from 'react';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextareaAutosize from '@mui/material/TextareaAutosize';

const PayToForm = ({ onChangePay, payData }) => {
    return (
        <div>
            <form>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={3}>
                        <Grid item xs={2.4}>
                            <InputLabel className='input_label'> Contact name *</InputLabel>
                            <TextField
                                name='ContactName'
                                value={payData.ContactName}
                                onChange={(e) => onChangePay(e)}
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
                                value={payData.Address1}
                                onChange={(e) => onChangePay(e)}
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
                                value={payData.Address2}
                                onChange={(e) => onChangePay(e)}
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
                                value={payData.City}
                                onChange={(e) => onChangePay(e)}
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
                                value={payData.State}
                                onChange={(e) => onChangePay(e)}
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
                                value={payData.Zipcode}
                                onChange={(e) => onChangePay(e)}
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
                                value={payData.Phone || ""}
                                onChange={(e) => onChangePay(e)}
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
                                value={payData.ContactEmail || ""}
                                onChange={(e) => onChangePay(e)}
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
                                value={payData.ContactPhone || ""}
                                onChange={(e) => onChangePay(e)}
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
                                value={payData.Fax}
                                onChange={(e) => onChangePay(e)}
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
                                value={payData.Terms}
                                onChange={(e) => onChangePay(e)}
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
                                value={payData.Comments}
                                onChange={(e) => onChangePay(e)}
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

export default PayToForm;