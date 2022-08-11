import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import DatePicker from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
// import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import InputLabel from '@mui/material/InputLabel';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import Select from "@material-ui/core/Select";
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
// import { Form, Row, Col } from "react-bootstrap";
import { toast } from "react-toastify";
import EditIcon from '@mui/icons-material/Edit';
import { getPurchaseStart, updatePurchaseStart } from '../../../Actions/purchaseActions';
import moment from 'moment';
import { Form, Row, Col } from "react-bootstrap";
import CurrencyInput from "react-currency-input-field";

export default function PurchaseEdit(props) {
    const id = props.purchase.Id
    const Invoice_Number = props.purchase.Invoice_Number
    const PurchaseJournal_Number = props.purchase.PurchaseJournal_Number
    const Date = props.purchase.Date
    const Vendor_Name = props.purchase.Vendor_Name
    const PayTo = props.purchase.PayTo
    const Amount = props.purchase.Amount
    const PJType = props.purchase.PJType
    const Carrier_Pro = props.purchase.Carrier_Pro
    const Note = props.purchase.Note
    const Status = props.purchase.Status
    // const isDeleted = props.purchase.isDeleted


    const [InvoiceNumber, setInvoiceNumber] = useState(Invoice_Number);
    const [PurchaseJournalNumber, setPurchaseJournalNumber] = useState(PurchaseJournal_Number);
    const [DateValue, setDateValue] = useState(Date);
    const [VendorName, setVendorName] = useState(Vendor_Name);
    const [PayTovalue, setPayTovalue] = useState(PayTo);
    const [AmountValue, setAmountValue] = useState(Amount);
    const [PJTypeValue, setPJTypeValue] = useState(PJType);
    const [CarrierProValue, setCarrierProValue] = useState(Carrier_Pro);
    const [NoteValue, setNoteValue] = useState(Note);
    const [StatusValue, setStatusValue] = useState(Status)

    const [open, setOpen] = useState(false);
    const [yesChecked, setYesChecked] = useState(false);
    const [disablePro, setDisablePro] = useState('accounts_payable' ? false : true);
    const [noChecked, setNoChecked] = useState(true);


    const purchaseValue = {
        Id: id,
        Invoice_Number: InvoiceNumber,
        PurchaseJournal_Number: PurchaseJournalNumber,
        Date: DateValue,
        Vendor_Name: VendorName,
        PayTo: PayTovalue,
        Amount: AmountValue,
        PJType: PJTypeValue,
        Carrier_Pro: CarrierProValue,
        Note: NoteValue,
        Status: StatusValue,
    }


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

    const handleOnValueChange = (newValue) => {
        if (newValue === undefined) {
            setAmountValue(0);
        } else {
            setAmountValue(newValue);
        }
    };



    const Purchases = useSelector(state => state.fetchPurchases.purchases)
    const Lookups = useSelector(state => state.fetchLookup.lookup)
 
    const [tableData, setTableData] = useState(Purchases);

    useEffect(() => {
        if (Purchases && Purchases.length > 0) {

            const temp = [];
            Purchases.filter((f) => f.isDeleted !== true).map((v) => {
                const entity = Lookups && Lookups.find((h) => h.id === v.Status)
                Object.assign(v, { InvoiceStatus: entity ? entity.displayText : '' });
                return temp.push(v)
            })
            setTableData(temp)
        }
    }, [Purchases, Lookups]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (props.Mode === "edit") {
            dispatch(updatePurchaseStart(purchaseValue))
            toast.success("data updated successfully")
            setTimeout(() => dispatch(getPurchaseStart()), 2000)
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

                <form onSubmit={handleSubmit}>
                    <TextField
                        value={PurchaseJournalNumber}
                        name="PurchaseJournal_Number"
                        type="text"
                        onChange={(e) => setPurchaseJournalNumber(e.target.value)}
                        label="PurchaseJournalNumber"
                        required
                        fullWidth
                        margin="dense"
                        variant="outlined"
                        autoFocus
                    />
                    <TextField
                        value={VendorName}
                        name=" Vendor_Name"
                        type="text"
                        onChange={(e) => setVendorName(e.target.value)}
                        label="VendorName"
                        required
                        fullWidth
                        margin="dense"
                        variant="outlined"
                        autoFocus
                    />

                    {/* <TextField
                        value={AmountValue}
                        name=" Amount"
                        type="number"
                        onChange={(e) => setAmountValue(e.target.value)}
                        label="Amount"
                        required
                        fullWidth
                        margin="dense"
                        variant="outlined"
                        autoFocus
                    /> */}

                    <Form.Group as={Row} className="mb-3" controlId="Amount">
                        <Form.Label column sm="9">Amount</Form.Label>
                        <Col sm="9">
                            <CurrencyInput
                                id="Amount"
                                name="Amount"
                                prefix="$"
                                value={AmountValue}
                                onValueChange={handleOnValueChange}
                                step={1}

                            />

                        </Col>
                    </Form.Group>

                    <TextField

                        value={PayTovalue == null ? '' : PayTovalue}
                        name=" PayTo"
                        type="Text"
                        onChange={(e) => setPayTovalue(e.target.value)}
                        label="Pickup Name"
                        required
                        fullWidth
                        margin="dense"
                        variant="outlined"
                        autoFocus
                    />
                    <FormControl>
                        <FormLabel id="demo-radio-buttons-group-label">Link to Pro/Invoice # ?</FormLabel>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="female"
                            name="radio-buttons-group"
                        >
                            <FormControlLabel value="Yes" control={<Radio />} label="Yes"
                                onClick={(e) => { setYesChecked(true); setNoChecked(false); setProEnable(e) }}
                                checked={yesChecked}
                                readOnly
                            />
                            <FormControlLabel value="No" control={<Radio />} label="No"
                                onClick={(e) => { setYesChecked(false); setNoChecked(true); setProEnable(e) }}
                                checked={noChecked}
                                readOnly
                            />

                        </RadioGroup>
                    </FormControl>

                    <TextField
                        value={PJTypeValue}
                        name=" PJType"
                        type="Text"
                        onChange={(e) => setPJTypeValue(e.target.value)}
                        label="BLS Pro Number"
                        required
                        fullWidth
                        margin="dense"
                        variant="outlined"
                        disabled={disablePro}
                        autoFocus
                    />

                    <TextField
                        value={CarrierProValue == null ? '' : CarrierProValue}
                        name=" Carrier_Pro"
                        type="Text"
                        onChange={(e) => setCarrierProValue(e.target.value)}
                        label="Carrier Pro #"
                        required
                        fullWidth
                        margin="dense"
                        variant="outlined"
                        autoFocus
                    />

                    <TextField
                        value={moment(DateValue).format('yyyy-MM-DD')}
                        name=" Date"
                        type="date"
                        onChange={(e) => setDateValue(e.target.value)}
                        label="Invoice Date"
                        required
                        fullWidth
                        margin="dense"
                        variant="outlined"
                        autoFocus
                    />
                    <Grid item xs={3}>
                        <InputLabel id="Status" >Status</InputLabel>
                        <Select
                            labelId="Status"
                            className="input_field"
                            id="Status"
                            label="Status"
                            value={StatusValue || ''}
                            variant="outlined"
                            onChange={(e) => setStatusValue(e.target.value)}
                        >
                            <MenuItem >
                                <em>None</em>
                            </MenuItem>
                            {tableData.map((entity, Id) => (
                                <MenuItem key={Id} value={entity.Status}>
                                    {entity.InvoiceStatus}
                                </MenuItem>
                            ))}
                        </Select>
                    </Grid>

                    <TextField
                        value={NoteValue == null ? '' : NoteValue}
                        name=" Note"
                        type="textarea"
                        onChange={(e) => setNoteValue(e.target.value)}
                        label="Note/Descrption*"
                        required
                        fullWidth
                        margin="dense"
                        variant="outlined"
                        autoFocus
                    />

                    <DialogActions>
                        <Button onClick={handleClose} variant="outlined" className='Btn1'>Cancel</Button>
                        <Button type="submit" onClick={handleClose} variant="outlined" className='Btn2'>Update</Button>
                    </DialogActions>
                </form>
            </Dialog>
        </>
    )

}



