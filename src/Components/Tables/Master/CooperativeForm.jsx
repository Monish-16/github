import React from 'react';
// import { useState } from 'react';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import MUIDataTable from "mui-datatables";
import { contactCol, options } from '../../../Utils/Columns';
import { Styles } from '../../../CSS/TableStyle';
import Contact from './Contacts';

const CusForm = ({ onCorpChange, onChangeCon, corp, corpCon }) => {
    return (
        <div>
            <form>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={3}>
                        <Grid item xs={4}>
                            <InputLabel className='input_label'>Legal Name *</InputLabel>
                            <TextField
                                value={corp.LegalName || ""}
                                name='LegalName'
                                onChange={(e) => onCorpChange(e)}
                                placeholder='Enter Legal Name'
                                variant='outlined'
                                margin='dense'
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <InputLabel className='input_label'>Address(Street#,name)</InputLabel>
                            <TextField
                                name='Address1'
                                value={corp.Address1}
                                onChange={(e) => onCorpChange(e)}
                                placeholder='Enter address'
                                variant='outlined'
                                margin='dense'
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <InputLabel className='input_label'>Address BuildingFloor</InputLabel>
                            <TextField
                                name='Address2'
                                value={corp.Address2}
                                onChange={(e) => onCorpChange(e)}
                                placeholder='Enter Building Floor'
                                variant='outlined'
                                margin='dense'
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={3}>
                            <InputLabel className='input_label'> City *</InputLabel>
                            <TextField
                                name='City'
                                value={corp.City}
                                onChange={(e) => onCorpChange(e)}
                                placeholder='Enter City '
                                variant='outlined'
                                margin='dense'
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={3}>
                            <InputLabel className='input_label'>State * </InputLabel>
                            <TextField
                                name='State'
                                value={corp.State}
                                onChange={(e) => onCorpChange(e)}
                                placeholder='Enter State '
                                variant='outlined'
                                margin='dense'
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={3}>
                            <InputLabel className='input_label'> Zip Code*</InputLabel>
                            <TextField
                                name='Zipcode'
                                value={corp.Zipcode}
                                onChange={(e) => onCorpChange(e)}
                                placeholder='Enter Zip Code'
                                variant='outlined'
                                margin='dense'
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={3}>
                            <InputLabel className='input_label'>Fax Number</InputLabel>
                            <TextField
                                name='Fax'
                                value={corp.Fax}
                                onChange={(e) => onCorpChange(e)}
                                placeholder='Enter Fax Number'
                                variant='outlined'
                                margin='dense'
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={3}>
                            <InputLabel className='input_label'> Phone Number</InputLabel>
                            <TextField
                                name='Phone'
                                value={corp.Phone}
                                onChange={(e) => onCorpChange(e)}
                                placeholder='Enter Building Floor'
                                variant='outlined'
                                margin='dense'
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={3}>
                            <InputLabel className='input_label'>DBA name </InputLabel>
                            <TextField
                                name='dbaName'
                                value={corp.dbaName}
                                onChange={(e) => onCorpChange(e)}
                                placeholder='Enter DBA name'
                                variant='outlined'
                                margin='dense'
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={3}>
                            <InputLabel className='input_label'> MC Number</InputLabel>
                            <TextField
                                name='MC_Number'
                                value={corp.MC_Number}
                                onChange={(e) => onCorpChange(e)}
                                placeholder='Enter MC Number'
                                variant='outlined'
                                margin='dense'
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={2.5}>
                            <InputLabel className='input_label'> Federal_Tax_ID</InputLabel>
                            <TextField
                                name='Federal_Tax_ID'
                                value={corp.Federal_Tax_ID}
                                placeholder='Enter Building Floor'
                                variant='outlined'
                                margin='dense'
                                fullWidth
                                onChange={(e) => onCorpChange(e)}
                            />
                        </Grid>
                        <Grid item xs={2.5}>
                            <InputLabel className='input_label'> DOT_Number</InputLabel>
                            <TextField
                                name='DOT_Number'
                                value={corp.DOT_Number}
                                onChange={(e) => onCorpChange(e)}
                                placeholder='Enter Building Floor'
                                variant='outlined'
                                margin='dense'
                                fullWidth
                            />
                        </Grid>

                        <Grid item xs={2.5}>
                            <InputLabel className='input_label'>DUNS_Number</InputLabel>
                            <TextField
                                name='DUNS_Number'
                                value={corp.DUNS_Number}
                                onChange={(e) => onCorpChange(e)}
                                placeholder='Enter DUNS_Number'
                                variant='outlined'
                                margin='dense'
                                fullWidth
                            />
                              </Grid>
                            <Grid item xs={2.5}>
                                <InputLabel className='input_label'>SCAC</InputLabel>
                                <TextField
                                    name='SCAC'
                                    value={corp.SCAC}
                                    onChange={(e) => onCorpChange(e)}
                                    placeholder='Enter SCAC'
                                    variant='outlined'
                                    margin='dense'
                                    fullWidth
                                />
                            </Grid>
                      
                        <Grid item xs={2.5}>
                            <InputLabel className='input_label'>IsActive(IsW9_YN)</InputLabel>
                            <FormControlLabel control={<Checkbox checked={corp.IsW9_YN} id="IsW9_YN" onChange={(e) => onCorpChange(e)} />} />
                        </Grid>

                        <Grid item xs={2}>
                            <InputLabel className='input_label'>Is Active</InputLabel>
                            <FormControlLabel control={<Checkbox checked={corp.IsActive} id="IsActive" onChange={(e) => onCorpChange(e)} />} />
                        </Grid>
                        <Grid item xs={12}>
                            <InputLabel className='input_label'>comments</InputLabel>
                            <TextareaAutosize
                                minRows={5}
                                name='Comments'
                                value={corp.Comments}
                                onChange={(e) => onCorpChange(e)}
                                className='text_area'
                                placeholder='comments'
                            />
                        </Grid>
                        <Grid align="right" item xs={12}>
                            <Contact onChangeCon={onChangeCon} corpCon={corpCon} />
                        </Grid>
                    </Grid>
                </Box>
            </form>

            <div>
                <Styles>
                    <MUIDataTable
                        data={[corpCon]}
                        columns={contactCol}
                        options={options}
                    />
                </Styles>
            </div>
        </div>
    )
}

export default CusForm;

