import React from 'react';
import { useState } from 'react'
import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
import { useDispatch } from 'react-redux';
import { Form, Row, Col } from "react-bootstrap";
import { toast } from "react-toastify";
import EditIcon from '@mui/icons-material/Edit';
import { getPurchaseStart, updatePurchaseStart } from '../../Actions/purchaseAction';


export const EditPurchase = (props) => {

    const Invoice_Number = props.purchase.Invoice_Number
    const PurchaseJournal_Number = props.purchase.PurchaseJournal_Number
    const Date = props.purchase.Date
    const Vendor_Name = props.purchase.Vendor_Name
    const PayTo = props.purchase.PayTo
    const Amount = props.purchase.Amount
    const PJType = props.purchase.PJType
    const Carrier_Pro = props.purchase.Carrier_Pro
   const Note = props.purchase.Note
   const InvoceStatus = props.purchase.InvoceStatus

    const [InvoiceNumber, setInvoiceNumber] = useState(Invoice_Number);
    const [PurchaseJournalNumber, setPurchaseJournalNumber] = useState(PurchaseJournal_Number);
    const [DateValue, setDateValue] = useState(Date);
    const [VendorName, setVendorName] = useState(Vendor_Name);
    const [PayTovalue, setPayTovalue] = useState(PayTo);
    const [AmountValue, setAmountValue] = useState(Amount);
    const [PJTypeValue, setPJTypeValue] = useState(PJType);
    const [CarrierProValue, setCarrierProValue] = useState(Carrier_Pro);
    const [NoteValue, setNoteValue] = useState(Note);
    const [StatusValue,setStatusValue] = useState(InvoceStatus)
    const [open, setOpen] = useState(false);
    const [yesChecked, setYesChecked] = useState(true);
    const [disablePro, setDisablePro] = useState('accounts_payable' ? false : true);
    const [noChecked, setNoChecked] = useState(false);
    const inputMaximumLength = 25;

    const dispatch = useDispatch();
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const setProEnable = (e) => {
        if (e.target.checked && e.target.value === 'yes') {
            setDisablePro(false)
        }
        else {
            setDisablePro(true)
        }
    }



    const handleSubmit = (e) => {
        e.preventDefault();
        if (props.Mode === "edit") {
            const purchaseObj = {
                id: props.purchase.id,
                Invoice_Number:InvoiceNumber,
                PurchaseJournal_Number: PurchaseJournalNumber,
                Date: DateValue,
                Vendor_Name: VendorName,
                PayTo: PayTovalue,
                Amount: AmountValue,
                PJType: PJTypeValue,
                Carrier_Pro:CarrierProValue,
                Note:NoteValue,
                InvoceStatus:StatusValue
            }
            dispatch(updatePurchaseStart(purchaseObj));
            toast.success("Purchase Journal Updated successfully")
            setTimeout(() => dispatch(getPurchaseStart()), 800)
        }
    }



    return (
        <>
            <Button variant="standard" onClick={handleClickOpen} >
                <EditIcon />
            </Button>
            <Dialog
                max-width="lg"
                open={open} onClose={handleClose}
            >
                <DialogTitle style={{ backgroundColor: "#be1e2d", color: "#FFFFFF" }}> Update Purchase Journal Entry</DialogTitle>
                <Form onSubmit={handleSubmit}>
                    <Row className="d-block-sm">
                        <Form.Group as={Row} className="mb-3" controlId=" PurchaseJournal_Number">
                            <Form.Label column sm="9">Purchase Journal </Form.Label>
                            <Col sm="9">
                                <Form.Control name="Purchase_Journal_Number" maxLength={inputMaximumLength}
                                    value={PurchaseJournalNumber}
                                    onChange={(e) => setPurchaseJournalNumber(e.target.value)}
                                    type="text"
                                    placeholder={"Purchase Journal"}
                                    disabled={false}
                                />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="Vendor_Name">
                            <Form.Label column sm="9"> Customer Name</Form.Label>
                            <Col sm="9">
                                <Form.Control name=" Vendor_Name" maxLength={inputMaximumLength}
                                    value={VendorName}
                                    onChange={(e) => setVendorName(e.target.value)}
                                    type="text"
                                    placeholder={"name"}
                                    disabled={false}
                                />
                            </Col>
                        </Form.Group>
                        <br />
                        <Form.Group as={Row} className="mb-3" controlId="Amount">
                            <Form.Label column sm="9">Amount</Form.Label>
                            <Col sm="9">
                                <Form.Control name="Amount" maxLength={inputMaximumLength}
                                    value={AmountValue}
                                    onChange={(e) => setAmountValue(e.target.value)}
                                    type="number"
                                    placeholder="Amount"
                                    disabled={false}
                                />
                            </Col>
                        </Form.Group>

                        <br />
                        <Form.Group as={Row} className="mb-3" controlId="PayTo">
                            <Form.Label column sm="9">{'Purchase' ? 'PayTo' : 'Bill'}</Form.Label>
                            <Col sm="9">
                                <Form.Control name=" PayTo" maxLength={inputMaximumLength}
                                    value={PayTovalue}
                                    onChange={(e) => setPayTovalue(e.target.value)}
                                    type="text"
                                    disabled={false}
                                />
                            </Col>
                        </Form.Group>

                        <br />
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="3">Link to Pro/Invoice # ?</Form.Label>
                            <Col sm="9">
                                <Form.Check
                                    inline
                                    label="Yes"
                                    name="has_invoice"
                                    type="radio"
                                    value="yes"
                                    onClick={(e) => { setYesChecked(true); setNoChecked(false); setProEnable(e) }}
                                    checked={yesChecked}
                                    readOnly
                                >
                                </Form.Check>

                                <Form.Check
                                    inline
                                    label="No"
                                    name="has_invoice"
                                    type="radio"
                                    value="no"
                                    onClick={(e) => { setYesChecked(false); setNoChecked(true); setProEnable(e) }}
                                    checked={noChecked}
                                    readOnly
                                >
                                </Form.Check>

                            </Col>

                        </Form.Group>

                        <br />
                        <Form.Group as={Row} className="mb-3">
                            {/* <Form.Label column sm="3">Pro/Invoice#</Form.Label> */}
                            <Form.Label column sm="3">BLS Pro Number</Form.Label>
                            <Col sm="9">
                                <Form.Control
                                    as="select"
                                    className="form-select"
                                    value={PJTypeValue}
                                    disabled={disablePro}
                                    placeholder="Select Pro/Invoice Number"
                                    onChange={(e) => {
                                        setPJTypeValue(e.target.value)
                                    }}>

                                    <option value={PJTypeValue} key="PJType">Select</option>
                                    <option value={PJTypeValue} >AP-Cus-2022-0507</option>
                                    <option value={PJTypeValue} >AP-Cus-2022-0506</option>

                                </Form.Control>
                            </Col>

                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId=" Carrier_Pro">
                            <Form.Label column sm="9"> Carrier Pro</Form.Label>
                            <Col sm="9">
                                <Form.Control name=" Carrier_Pro" maxLength={inputMaximumLength}
                                    value={CarrierProValue}
                                    onChange={(e) => setCarrierProValue(e.target.value)}
                                    type="text"
                                    disabled={false}
                                />
                            </Col>
                        </Form.Group>
                        <br />
                        <Form.Group as={Row} className="mb-3" controlId="Date">
                            <Form.Label column sm="9"> Date</Form.Label>
                            <Col sm="9">
                                <Form.Control name="Date" maxLength={inputMaximumLength}
                                    value={DateValue}
                                    onChange={(e) => setDateValue(e.target.value)}
                                    type="date"
                                    disabled={false}
                                />
                            </Col>
                        </Form.Group>
                        <br />
                        <Form.Group as={Row} className="mb-3" controlId="Status">
                            <Form.Label column sm="3">Status</Form.Label>
                            <Col sm="9">
                                <Form.Control
                                    as="select"
                                    value={StatusValue}
                                    onChange={(e) => setStatusValue(e.target.value)}
                                    className="form-select"

                                
                                >
                        <option  value="select" key="status" defaultValue={true}>Select</option>
                                    <option value="Approve" key="Approve">Approve</option>
                                    <option value="Adjust" key="Adjust">Adjust</option>
                                    <option value="Hold" key="Hold">Hold</option>
                                    <option value="Decline "key="Decline">Decline</option>
                        </Form.Control>
                            </Col>
                        </Form.Group>

                        <br />
                        <Form.Group as={Row} className="mb-3" controlId="Note">
                            <Form.Label column sm="3">Description / Note: </Form.Label>
                            <Col sm="9">
                                <Form.Control
                                    as="textarea"
                                    name="Note"
                                    value={NoteValue}
                                    onChange={(e) => setNoteValue(e.target.value)}
                                    className="form-control">
                                </Form.Control>
                            </Col>
                        </Form.Group>



                        <DialogActions>
                            <Button onClick={handleClose} variant="outlined" className='Btn1'>Cancel</Button>
                            <Button type="submit" onClick={handleClose} variant="outlined" className='Btn2'>Save</Button>
                        </DialogActions>
                    </Row>
                </Form>
            </Dialog>
        </>
    );
}
