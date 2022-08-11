import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import { Form, Row, Col } from "react-bootstrap";
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import DialogTitle from '@mui/material/DialogTitle';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

const BootstrapDialogTitle = (props) => {
    const { children, onClose, ...other } = props;

    return (
        <DialogTitle sx={{
            m: 0, p: 2,
            backgroundColor: '#be1e2d', color: 'white', fontSize: 'bold'
        }} {...other}>
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8, color: 'white', fontSize: 'bold'
                    }}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </DialogTitle>
    );
};

BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
};

//function dialog box
const depart = [
    { id: 15, value: "Accounts Payable/receivables" },
    { id: 14, value: "PoolLocations" },
    { id: 13, value: "TLS Lane awarded" }
]

const type = [
    { id: 13, value: 'Other' },
    { id: 12, value: 'Operations' },
    { id: 11, value: 'Terminal' },
    { id: 10, value: 'Account/Sales Rep' },
    { id: 9, value: 'Executive Level' },
    { id: 8, value: 'Additional Contact' },
    { id: 7, value: 'Secondary Contact' },
    { id: 6, value: 'Primary Contact' },

]
const tit = [
    { id: 1, value: 'Mr' },
    { id: 2, value: 'Mrs' },
]

const ContactDialog = ({ onChange, ContactData }) => {
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);

    };

    return (
        <>
            <div className="listing crp-table mt-3">
                <div style={{ display: "flex" }}>

                    <h3 style={{
                        color: 'black', justifyContent: 'center', fontSize: '15px', width: '95%', margin: '10px'
                    }}>Contact Details</h3>
                    <Grid align="right">
                        <Button variant="standard" className="addPop" color="skyblue"
                            onClick={handleClickOpen}
                        ><AddIcon className='addicon' />ADD</Button>
                    </Grid>


                </div>

            </div>
            <div>
                <BootstrapDialog
                    onClose={handleClose}
                    aria-labelledby="customized-dialog-title"
                    open={open}
                    maxWidth="xl"
                >
                    <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
                        Add Contact Information
                    </BootstrapDialogTitle>
                    <DialogContent >

                        <Form >

                            <Row className="mb-3 d-block">
                                <Form.Group as={Row} controlId="Type">
                                    <Form.Label > Type <span className="required">*</span> </Form.Label>
                                    <Col >
                                        <Form.Control
                                            as="select"
                                            name="Type"
                                            value={ContactData.Type}
                                            onChange={(e) => onChange(e)}
                                            disabled={false}  >
                                            {type.map((t) => (
                                                <option key={t.id}
                                                    value={t.id}>{t.value}</option>

                                            ))}
                                        </Form.Control>

                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row}>
                                    <Form.Label > Department </Form.Label>
                                    <Col >
                                        <Form.Select
                                            // as="select"
                                            type="number"
                                            autoComplete='nope'
                                            name="Department_Id"
                                            value={ContactData.Department_Id}
                                            onChange={(e) => onChange(e)}
                                            disabled={false}

                                        >
                                            {depart.map((d) => (
                                                <option key={d.id}
                                                    value={d.id}>{d.value}</option>

                                            ))}
                                        </Form.Select>

                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} controlId=" Name">
                                    <Form.Label > Name<span className="required">*</span> </Form.Label>
                                    <Col >
                                        <Form.Control
                                            name="Name"
                                            value={ContactData.Name}
                                            onChange={(e) => onChange(e)}
                                            disabled={false}
                                            placeholder="Enter Name"
                                        />


                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} controlId=" Title">
                                    <Form.Label > Title<span className="required">*</span> </Form.Label>
                                    <Col >
                                        <Form.Control
                                            as="select"
                                            name="Title"
                                            value={ContactData.Type}
                                            onChange={(e) => onChange(e)}
                                            disabled={false}
                                        >
                                            {tit.map((ti) => (
                                                <option key={ti.id}
                                                    value={ti.id}>{ti.value}</option>

                                            ))}

                                        </Form.Control>
                                    </Col>
                                </Form.Group>
                            </Row>


                            <Row className="mb-3 d-block">
                                <Form.Group as={Row} controlId=" Extension">
                                    <Form.Label >Corporate office Ext </Form.Label>
                                    <Col >
                                        <Form.Control
                                            name="Extension"
                                            value={ContactData.Extension}
                                            placeholder="ext"
                                            onChange={(e) => onChange(e)}
                                            disabled={false}
                                        />

                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} controlId=" Phone">
                                    <Form.Label > Phone </Form.Label>
                                    <Col >
                                        <Form.Control
                                            value={ContactData.Phone}
                                            name="Phone"
                                            onChange={(e) => onChange(e)}
                                            placeholder="Enter Phone"
                                            disabled={false}
                                        />

                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} controlId=" Mobile">
                                    <Form.Label > Mobile </Form.Label>
                                    <Col >
                                        <Form.Control
                                            name="Mobile"
                                            value={ContactData.Mobile}
                                            placeholder='Enter Mobile'
                                            onChange={(e) => onChange(e)}
                                            disabled={false}
                                        />

                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} controlId=" Email">
                                    <Form.Label > Email </Form.Label>
                                    <Col >
                                        <Form.Control
                                            name="Email"
                                            value={ContactData.Email}
                                            placeholder='Enter Email'
                                            onChange={(e) => onChange(e)}
                                            disabled={false}
                                        />

                                    </Col>
                                </Form.Group>

                            </Row>

                        </Form>

                    </DialogContent>
                    <DialogActions>
                        <Button
                            style={{ backgroundColor: '#be1e2d', color: 'white' }}
                            autoFocus onClick={handleClose}>
                            Submit
                        </Button>
                    </DialogActions>
                </BootstrapDialog>
            </div>
        </>
    )
}

export default ContactDialog;