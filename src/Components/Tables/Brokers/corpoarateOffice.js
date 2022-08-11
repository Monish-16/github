import React from 'react'
// import { Form, Row, Col } from "react-bootstrap";
// import FloatingLabel from "react-bootstrap/FloatingLabel";
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { Styles } from '../../customcss/Style';
import MUIDataTable from "mui-datatables";
import Paper from '@mui/material/Paper';
import { columns, options } from '../../../Utils/ContactCol';
import ContactDialog from '../Brokers/contactDialog';

const CorpoarateOffice = ({ onChangeCorp, onChange, ContactData, brokerData }) => {

    return (
        <div>
            <form>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={3}>
                        <Grid item xs={4}>
                            <InputLabel className='input_label'>Legal Name *</InputLabel>
                            <TextField
                                value={brokerData.LegalName || ""}
                                name='LegalName'
                                onChange={(e) => onChangeCorp(e)}
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
                                value={brokerData.Address1}
                                onChange={(e) => onChangeCorp(e)}
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
                                value={brokerData.Address2}
                                onChange={(e) => onChangeCorp(e)}
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
                                value={brokerData.City}
                                onChange={(e) => onChangeCorp(e)}
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
                                value={brokerData.State}
                                onChange={(e) => onChangeCorp(e)}
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
                                value={brokerData.Zipcode}
                                onChange={(e) => onChangeCorp(e)}
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
                                value={brokerData.Fax}
                                onChange={(e) => onChangeCorp(e)}
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
                                value={brokerData.Phone}
                                onChange={(e) => onChangeCorp(e)}
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
                                value={brokerData.dbaName}
                                onChange={(e) => onChangeCorp(e)}
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
                                value={brokerData.MC_Number}
                                onChange={(e) => onChangeCorp(e)}
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
                                value={brokerData.Federal_Tax_ID}
                                placeholder='Enter Building Floor'
                                variant='outlined'
                                margin='dense'
                                fullWidth
                                onChange={(e) => onChangeCorp(e)}
                            />
                        </Grid>
                        <Grid item xs={2.5}>
                            <InputLabel className='input_label'> DOT_Number</InputLabel>
                            <TextField
                                name='DOT_Number'
                                value={brokerData.DOT_Number}
                                onChange={(e) => onChangeCorp(e)}
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
                                value={brokerData.DUNS_Number}
                                onChange={(e) => onChangeCorp(e)}
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
                                value={brokerData.SCAC}
                                onChange={(e) => onChangeCorp(e)}
                                placeholder='Enter DUNS_Number'
                                variant='outlined'
                                margin='dense'
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={2.5}>
                            <InputLabel className='input_label'>IsActive(IsW9_YN)</InputLabel>
                            <FormControlLabel control={<Checkbox checked={brokerData.IsW9_YN} id="IsW9_YN" onChange={(e) => onChangeCorp(e)} />} />
                        </Grid>

                        <Grid item xs={2}>
                            <InputLabel className='input_label'>Is Active</InputLabel>
                            <FormControlLabel control={<Checkbox checked={brokerData.IsActive} id="IsActive" onChange={(e) => onChangeCorp(e)} />} />
                        </Grid>
                        <Grid item xs={12}>
                            <InputLabel className='input_label'>comments</InputLabel>
                            <TextareaAutosize
                                minRows={5}
                                name='Comments'
                                value={brokerData.Comments}
                                onChange={(e) => onChangeCorp(e)}
                                className='text_area'
                                placeholder='comments'
                            />
                        </Grid>
                        <Grid align="right" item xs={12}>
                            <ContactDialog ContactData={ContactData} onChange={onChange} />
                        </Grid>
                    </Grid>
                </Box>
            </form>

            <div>
                <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                    <Styles>
                        <MUIDataTable
                            columns={columns}
                            data={[ContactData]}
                            options={options}
                        />
                    </Styles>
                </Paper>
            </div>

        </div>

    )
}

export default CorpoarateOffice;