import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import { Form } from "react-bootstrap";
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

function Contact({ onChangeCon, corpCon }) {
    const [open, setOpen] = React.useState(false);
    // console.log("hi", corpCon)
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);        
    };


    const type = [
        { id: 10, value: "Account/Sales Rep" },
        { id: 8, value: "Additional Contact" },
        { id: 9, value: "Executive Level" },
        { id: 12, value: "Operations" },
        { id: 13, value: "Other" },
        { id: 11, value: "Terminal" },
        { id: 7, value: "Secondary Contact" },
        { id: 6, value: "Primary Contact" },
    ];
    const depart = [
        { id: 15, value: "Accounts Payable/receivables" },
        { id: 14, value: "PoolLocations" },
        { id: 13, value: "TLS Lane awarded" }
    ]

    function handleCloses() {
        setOpen(false);
    }

    return (
        <div>
            <Button variant="standard" className="addPop" onClick={handleClickOpen}>
                <AddIcon className='addicon' />Add
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                fullWidth
                maxWidth='md'
            >
                <DialogTitle className='addTitle'>
                    <div style={{ display: 'flex' }}>
                        <Typography variant="h5" component="div" style={{ flexGrow: 1 }}>
                            Add Contact Information
                        </Typography>
                        <Button
                            variant="standard"
                            onClick={handleClose}>
                            <CloseIcon />
                        </Button>
                    </div>
                </DialogTitle>
                <DialogContent>
                    <Form >
                        <Box sx={{ flexGrow: 1 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={3}>
                                    <Form.Group controlId="Type">
                                        <Form.Label> Type <span className="required">*</span> </Form.Label>
                                        <Form.Control
                                            as="select"
                                            name="Type"
                                            value={corpCon.Type}
                                            className='boot_input'
                                            onChange={(e) => onChangeCon(e)}
                                            disabled={false}  >
                                            {type.map((t) => (
                                                <option key={t.id}
                                                    value={t.id}>{t.value}</option>

                                            ))}
                                        </Form.Control>
                                    </Form.Group>
                                </Grid>
                                <Grid item xs={3}>
                                    <Form.Group controlId="Department_Id">
                                        <Form.Label > Department </Form.Label>

                                        <Form.Control
                                            as="select"
                                            name="Department_Id"
                                            value={corpCon.Department_Id}
                                            onChange={(e) => onChangeCon(e)}
                                            disabled={false}
                                        >
                                            {depart.map((depar) => (
                                                <option key={depar.id}
                                                    value={depar.id}>{depar.value}</option>
                                            ))}
                                        </Form.Control>

                                    </Form.Group>
                                </Grid>
                                <Grid item xs={3}>
                                    <Form.Group controlId=" Name">
                                        <Form.Label > Name<span className="required">*</span> </Form.Label>
                                        <Form.Control
                                            name="Name"
                                            value={corpCon.Name}
                                            onChange={(e) => onChangeCon(e)}
                                            disabled={false}
                                            placeholder="Enter Name"
                                        />
                                    </Form.Group>
                                </Grid>
                                <Grid item xs={3}>
                                    <Form.Group controlId=" Title">
                                        <Form.Label > Title<span className="required">*</span> </Form.Label>
                                        <Form.Control                                        
                                            as="select"
                                            name="Title"
                                            value={corpCon.Title}
                                            onChange={(e) => onChangeCon(e)}
                                            disabled={false}
                                        >
                                            <option value={1}>Mr</option>
                                            <option value={2} >Mrs</option>
                                        </Form.Control>
                                    </Form.Group>
                                </Grid>
                                <Grid item xs={3}>
                                    <Form.Group controlId=" Extension">
                                        <Form.Label >Corporate office Ext </Form.Label>
                                        <Form.Control
                                            name="Extension"
                                            type='number'
                                            value={corpCon.Extension}
                                            placeholder="ext"
                                            onChange={(e) => onChangeCon(e)}
                                            disabled={false}
                                        />

                                    </Form.Group>
                                </Grid>
                                <Grid item xs={3}>
                                    <Form.Group controlId=" Phone">
                                        <Form.Label > Phone </Form.Label>
                                        <Form.Control
                                            name="Phone"
                                            value={corpCon.Phone}
                                            onChange={(e) => onChangeCon(e)}
                                            placeholder="Enter Phone"
                                            disabled={false}
                                        />

                                    </Form.Group>
                                </Grid>
                                <Grid item xs={3}>
                                    <Form.Group controlId=" Mobile">
                                        <Form.Label > Mobile </Form.Label>
                                        <Form.Control
                                            name="Mobile"
                                            value={corpCon.Mobile}
                                            placeholder='Enter Mobile'
                                            onChange={(e) => onChangeCon(e)}
                                            disabled={false}
                                        />

                                    </Form.Group>
                                </Grid>
                                <Grid item xs={3}>
                                    <Form.Group controlId=" Email">
                                        <Form.Label > Email </Form.Label>
                                        <Form.Control
                                            name="Email"
                                            value={corpCon.Email}
                                            placeholder='Enter Email'
                                            onChange={(e) => onChangeCon(e)}
                                            disabled={false}
                                        />
                                    </Form.Group>
                                </Grid>
                            </Grid>
                        </Box>
                    </Form>
                </DialogContent>
                <DialogActions>
                    <Button type="submit"
                        className="save_Btn"
                        variant='contained'
                        onClick={() => {
                            handleCloses();                            
                        }}>Submit</Button>
                </DialogActions>
            </Dialog>
        </div >
    );
}
export default Contact;
