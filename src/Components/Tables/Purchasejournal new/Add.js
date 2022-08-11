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



import { Form, Row, Col } from "react-bootstrap";


const PurchaseAdd = ({ open, handleClose, data, onChange, handleFormSubmit }) => {
    const { id, Invoice_Number, PurchaseJournal_Number, Date, Vendor_Name, Consignee, PayTo, Amount, PJType,
        Carrier_Pro, Status, Note
    } = data;



    const Purchases = useSelector(state => state.fetchPurchases.purchases)
    const Lookups = useSelector(state => state.fetchLookups.lookups)
    const Invoices = useSelector(state => state.fetchInvoices.invoices)
    const [tableData, setTableData] = useState(Purchases);
    const [yesChecked, setYesChecked] = useState(false);
    const [disablePro, setDisablePro] = useState('accounts_payable' ? true : false);
    const [noChecked, setNoChecked] = useState(true);
    const inputMaximumLength = 25;
    const [PurchaseJournalNumber, setPurchaseJournal_Number] = useState("");
    const [VendorName, setVendor_Name] = useState("");

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

    // const handleOnValueChange = (newValue) => {
    //     if (newValue === undefined) {
    //         setAmount(0);
    //     } else {
    //         setAmount(newValue);
    //     }
    // };

    const onPurchaseSearch = (searchTerms) => {
        setPurchaseJournal_Number(searchTerms)
        // our api to fetch the search result
        // console.log("search ", searchTerms);
    }
    const onSearch = (searchTerm) => {
        setVendor_Name(searchTerm);

    };





    return (
        <>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {id ? "Update PurchaseJournal Entry" : 'Create PurchaseJournal Entry'}
                </DialogTitle>
                <Form >
                    <Row className="d-block-sm">
                        {/* <Form.Group as={Row} className="mb-3" controlId=" PurchaseJournal_Number">
                            <Form.Label column sm="9">Purchase Journal </Form.Label>
                            <Col sm="9">
                                <Form.Control name="PJ_Number" maxLength={inputMaximumLength}
                                    value={PurchaseJournal_Number || ''}
                                    onChange={(e) => setPurchaseJournal_Number(e.target.value)}
                                    type="text"
                                    placeholder={"Purchase Journal"}
                                    disabled={false}
                                />
                                
                            </Col>
                        </Form.Group> */}



                        <Form.Group as={Row} className="mb-3" controlId="Vendor_Name">
                            <Form.Label column > Purchase Journal</Form.Label>
                            <Col sm="9">
                                <Form.Control
                                    type="text" value={PurchaseJournal_Number} style={{
                                        width: "100%",
                                    }}
                                    onChange={(e) => onChange(e)}
                                    autoComplete="off"
                                />


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
                                                {item.PurchaseJournal_Number}
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
                                    onChange={(e) => onChange(e)} />


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
                                    onChange={(e) => onChange(e)}
                                    // onValueChange={handleOnValueChange}
                                    step={1}

                                />

                            </Col>
                        </Form.Group>

                        <br />
                        <Form.Group as={Row} className="mb-3" controlId="PayTo">
                            <Form.Label column sm="9">{'Purchase' ? 'PayTo' : 'Bill'}</Form.Label>
                            <Col sm="9">
                                <Form.Control name=" PayTo" maxLength={inputMaximumLength}
                                    value={PayTo}
                                    id="PayTo"
                                    onChange={(e) => onChange(e)}
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
                                    id="PJType"
                                    value={PJType}
                                    onChange={(e) => onChange(e)}
                                    disabled={disablePro}
                                    placeholder="Select Pro/Invoice Number"
                                >

                                    {/* <option value={PJType} key="PJType">Select</option>
                                    <option value={PJType} >AP-Cus-2022-0507</option>
                                    <option value={PJType} >AP-Cus-2022-0506</option> */}
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
                                <Form.Control name=" Carrier_Pro" maxLength={inputMaximumLength} id="Carrier_Pro"
                                    value={Carrier_Pro}
                                    onChange={(e) => onChange(e)}
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
                                    id="Date"
                                    onChange={(e) => onChange(e)}
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
                                onChange={(e) => onChange(e)}
                                variant="outlined"

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
                                    value={Note}
                                    onChange={(e) => onChange(e)}
                                    className="form-control">
                                </Form.Control>
                            </Col>
                        </Form.Group>
                        </Row>
                </Form>


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
        </>
    );
}

export default PurchaseAdd;