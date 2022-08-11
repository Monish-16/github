import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import InputLabel from '@mui/material/InputLabel';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import Select from "@material-ui/core/Select";
import MenuItem from '@mui/material/MenuItem';
import CurrencyInput from "react-currency-input-field";
import Grid from '@mui/material/Grid';
import AddIcon from '@mui/icons-material/Add';
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { getPurchaseStart, createPurchaseStart } from '../../../Actions/purchaseActions';
import Card from '@mui/material/Card';
import { Form, Row, Col } from "react-bootstrap";


const PurchaseAdd = () => {

    const [open, setOpen] = useState(false);
    const [Id, setId] = useState(0);
    const [Invoice_Number, setInvoice_Number] = useState(0)
    const [PurchaseJournal_Number, setPurchaseJournal_Number] = useState("");
    const [Vendor_Name, setVendor_Name] = useState("");
    const [Amount, setAmount] = useState(0);
    const [PayTo, setPayTo] = useState("");
    const [PJType, setPJType] = useState("");
    const [Date, setDate] = useState("");
    const [Note, setNote] = useState("")
    const [Carrier_Pro, setCarrier_Pro] = useState("");
    const [Status, setStatus] = useState("")
    const [yesChecked, setYesChecked] = useState(false);
    const [disablePro, setDisablePro] = useState('accounts_payable' ? true : false);
    const [noChecked, setNoChecked] = useState(true);
    const inputMaximumLength = 25;

    const purchaseValue = {
        PurchaseJournal_Number, Vendor_Name, Amount,
        PayTo, PJType, Date, Id, Note, Status, Carrier_Pro,
        Invoice_Number
    }

    const dispatch = useDispatch();
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const Purchases = useSelector(state => state.fetchPurchases.purchases)
    const Lookups = useSelector(state => state.fetchLookup.lookup)
    const Invoices = useSelector(state => state.fetchInvoice.invoices)
    const [tableData, setTableData] = useState(Purchases);


    useEffect(() => {
        if (Purchases && Purchases.length > 0) {

            const temp = [];
            Purchases.filter((f) => f.isDeleted !== true).map((v) => {
                const entity = Lookups && Lookups.find((h) => h.id === v.Status)
                const toss = Invoices && Invoices.find((h) => h.PJType === v.invoiceType)
                Object.assign(v, { InvoiceStatus: entity ? entity.displayText : '', proNum: toss ? toss.proNumber : '' });
                return temp.push(v)
            })
            setTableData(temp)
        }
    }, [Purchases, Lookups, Invoices]);

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
            setAmount(0);
        } else {
            setAmount(newValue);
        }
    };

    const onChange = (event) => {
        setVendor_Name(event.target.value);

    };
    const onChangePurchase = (e) => {
        setPurchaseJournal_Number(e.target.value)
    }
    const onSearch = (searchTerm) => {
        setVendor_Name(searchTerm);

    };

    const onPurchaseSearch = (searchTerms) => {
        setPurchaseJournal_Number(searchTerms)
        // our api to fetch the search result
        // console.log("search ", searchTerms);
    }



    const handleSubmit = (e) => {
        e.preventDefault();
        if (purchaseValue) {
            dispatch(createPurchaseStart(purchaseValue))
            toast.success("Purchase Journal added successfully")
            setTimeout(() => dispatch(getPurchaseStart()), 2000)
        }
    }

    return (
        <>
            <Button variant="standard" onClick={handleClickOpen} style={{ color: "#0000FF", marginLeft: "950px" }}>
                <AddIcon />Add Purchase Journal
            </Button>
            <Dialog
                max-width="xl"
                open={open} onClose={handleClose}
            >
                <DialogTitle style={{ backgroundColor: "#be1e2d", color: "#FFFFFF" }}> Purchase Journal Entry</DialogTitle>
                <Form onSubmit={handleSubmit}>
                    <Row className="d-block-sm">
                   

                        <Form.Group as={Row} className="mb-3" controlId="Vendor_Name">
                            <Form.Label column > Purchase Journal</Form.Label>
                            <Col sm="9">
                                <Form.Control
                                    type="text" value={PurchaseJournal_Number} style={{
                                        width: "100%",
                                    }}
                                    autoComplete="off"
                                    onChange={onChangePurchase} />


                                <div className="dropdown">
                                    {Purchases
                                        .filter((item) => {
                                            const searchTerms = PurchaseJournal_Number.toLowerCase();
                                            const fullName = item.PurchaseJournal_Number.toLowerCase();

                                            return (
                                                searchTerms &&
                                                fullName.startsWith(searchTerms) &&
                                                fullName !== searchTerms
                                            );
                                        })
                                        .slice(0, 10)
                                        .map((item) => (
                                            <div
                                                onClick={() => onPurchaseSearch(item.PurchaseJournal_Number)}
                                                className="dropdown-row"
                                                key={item.Id}
                                            >
                                                <Card>
                                                    {item.PurchaseJournal_Number}
                                                </Card>
                                            </div>
                                        ))}
                                </div>

                            </Col>
                        </Form.Group>



                        <Form.Group as={Row} className="mb-3" controlId="Vendor_Name">
                            <Form.Label column > Customer Name</Form.Label>
                            <Col sm="9">
                                <Form.Control
                                    type="text" value={Vendor_Name} style={{
                                        width: "100%",
                                    }}
                                    autoComplete="off"
                                    onChange={onChange} />


                                <div className="dropdown">
                                    {Purchases
                                        .filter((item) => {
                                            const searchTerm = Vendor_Name.toLowerCase();
                                            const fullName = item.Vendor_Name.toLowerCase();

                                            return (
                                                searchTerm &&
                                                fullName.startsWith(searchTerm) &&
                                                fullName !== searchTerm
                                            );
                                        })
                                        .slice(0, 10)
                                        .map((item) => (
                                            <div
                                                onClick={() => onSearch(item.Vendor_Name)}
                                                className="dropdown-row"
                                                key={item.Id}
                                            >
                                                {item.Vendor_Name}
                                            </div>
                                        ))}
                                </div>

                            </Col>
                        </Form.Group>
                        <br />

                        <Form.Group as={Row} className="mb-3" controlId="Amount">
                            <Form.Label column sm="9">Amount</Form.Label>
                            <Col sm="9">
                                <CurrencyInput
                                    id="Amount"
                                    name="Amount"
                                    prefix="$"
                                    value={Amount}
                                    onValueChange={handleOnValueChange}
                                    step={1}
                                    maxLength={inputMaximumLength}
                                />

                            </Col>
                        </Form.Group>

                        <br />
                        <Form.Group as={Row} className="mb-3" controlId="PayTo">
                            <Form.Label column sm="9">{'Purchase' ? 'PayTo' : 'Bill'}</Form.Label>
                            <Col sm="9">
                                <Form.Control name=" PayTo" maxLength={inputMaximumLength}
                                    value={PayTo || ''}
                                    onChange={(e) => setPayTo(e.target.value)}
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
                                    value={PJType}
                                    disabled={disablePro}
                                    placeholder="Select Pro/Invoice Number"
                                    onChange={(e) => {
                                        setPJType(e.target.value)
                                    }}>

                                    
                                    <option value="" key="pronumber" disabled defaultValue={true}>Select</option>
                                    {
                                        tableData?.length > 0 && tableData.map((item) => {
                                            return (
                                                <option value={item.Id} key={item.Id}>{item.proNumber}</option>
                                            )
                                        })
                                    }



                                </Form.Control>
                            </Col>



                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId=" Carrier_Pro">
                            <Form.Label column sm="9"> Carrier Pro</Form.Label>
                            <Col sm="9">
                                <Form.Control name=" Carrier_Pro" maxLength={inputMaximumLength}
                                    value={Carrier_Pro || ''}
                                    onChange={(e) => setCarrier_Pro(e.target.value)}
                                    type="text"

                                />
                            </Col>
                        </Form.Group>
                        <br />
                        <Form.Group as={Row} className="mb-3" controlId="Date">
                            <Form.Label column sm="9"> Date</Form.Label>
                            <Col sm="9">
                                <Form.Control name="Date" maxLength={inputMaximumLength}
                                    value={Date}
                                    onChange={(e) => setDate(e.target.value)}
                                    type="date"

                                />
                            </Col>
                        </Form.Group>
                        <br />
                        <Grid item xs={3}>
                            <InputLabel id="Status">Status</InputLabel>
                            <Select
                                labelId="Status"
                                className="input_field"
                                id="Status"
                                label="Status"
                                value={Status}
                                variant="outlined"
                                onChange={(e) => setStatus(e.target.value)}
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

                        <br />
                        <Form.Group as={Row} className="mb-3" controlId="Note">
                            <Form.Label column sm="3">Description / Note: </Form.Label>
                            <Col sm="9">
                                <Form.Control
                                    as="textarea"
                                    name="Note"
                                    value={Note || ''}
                                    onChange={(e) => setNote(e.target.value)}
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

export default PurchaseAdd;