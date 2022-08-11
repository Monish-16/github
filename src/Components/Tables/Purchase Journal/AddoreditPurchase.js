import React, { useState, useEffect } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import moment from 'moment';
import Select from "@material-ui/core/Select";
import { Form, Row, Col } from "react-bootstrap";
import CurrencyInput from "react-currency-input-field";
import Grid from '@mui/material/Grid';
import MenuItem from '@material-ui/core/MenuItem/MenuItem';
import { useSelector } from 'react-redux';
import InputLabel from '@mui/material/InputLabel';


const PurchaseAdd = ({ open, handleClose, data, onChange, handleFormSubmit }) => {
    const inputMaximumLength = 25;
    const { id, PurchaseJournal_Number, Date, Vendor_Name, PayTo, Amount, PJType,
        Carrier_Pro, Status, Note
    } = data;

    const [yesChecked, setYesChecked] = useState(false);
    const [disablePro, setDisablePro] = useState('accounts_payable' ? true : false);
    const [noChecked, setNoChecked] = useState(true);
    const fetchPurchase = useSelector(state => state.fetchPurchases.purchases)
    const LookData = useSelector(state => state.fetchLookup.lookup);
    const Invoices = useSelector(state => state.fetchInvoice.invoices)
    const [tableData, setTableData] = useState(fetchPurchase);


    useEffect(() => {
        if (fetchPurchase && fetchPurchase.length > 0) {

            const temp = [];
            fetchPurchase.filter((f) => f.isDeleted !== true).map((v) => {
                const entity = LookData && LookData.find((h) => h.id === v.Status)
                const toss = Invoices && Invoices.find((h) => h.PJType === v.invoiceType)
                Object.assign(v, { InvoiceStatus: entity ? entity.displayText : '', proNum: toss ? toss.proNumber : '' });
                return temp.push(v)
            })
            setTableData(temp)
        }
    }, [fetchPurchase, LookData, Invoices]);
    const setProEnable = (e) => {
        if (e.target.checked && e.target.value === 'yes') {
            setDisablePro(false)
        }
        else {
            setDisablePro(true)
        }
    }

    return (
        <>
            <Dialog
                open={open}
                onClose={handleClose}
                style={{ overflow: 'hidden' }}
            >
                <DialogTitle style={{ backgroundColor: "#be1e2d", color: "#FFFFFF" }}>
                    {id ? "Update PurchaseJournal Entry" : 'Create PurchaseJournal Entry'}
                </DialogTitle>
                <DialogContent>
                    <Form>
                        <Form.Group as={Row} className="mb-3" controlId="PurchaseJournal_Number">
                            <Form.Label column sm="1"> Purchase Journal # </Form.Label>
                            <Col sm="10">
                                <Form.Control
                                    as="select"
                                    value={PurchaseJournal_Number}
                                    name="PurchaseJournal_Number"
                                    onChange={(e) => onChange(e)}
                                    placeholder={" PurchaseJournal Number"}
                                    disabled={false}>
                                    {fetchPurchase.map((t) => (
                                        <option key={t.id} value={t.id}>{t.PurchaseJournal_Number}</option>
                                    ))}
                                </Form.Control>
                            </Col>
                        </Form.Group>
                        <br />
                        <Form.Group as={Row} className="mb-3" controlId="Vendor_Name">
                            <Form.Label column sm="1">Vendor Name</Form.Label>
                            <Col sm="10">
                                <Form.Control
                                    as="select"
                                    value={Vendor_Name}
                                    name="Vendor_Name"
                                    onChange={(e) => onChange(e)}
                                    placeholder={" Vendor Name "}
                                    disabled={false}>
                                    {fetchPurchase.map((ti) => (
                                        <option key={ti.id} value={ti.id}>{ti.Vendor_Name}</option>
                                    ))}
                                </Form.Control>
                            </Col>
                        </Form.Group>
                        <br />
                        <Form.Group as={Row} className="mb-3" controlId="Amount">
                            <Form.Label column sm="1">Amount</Form.Label>
                            <Col sm="10">
                                <CurrencyInput
                                    id="Amount"
                                    name="Amount"
                                    prefix="$"
                                    value={Amount}
                                    onChange={(e) => onChange(e)}
                                    step={1}
                                    maxLength={inputMaximumLength}
                                />

                            </Col>
                        </Form.Group>
                        <br />
                        <Form.Group as={Row} className="mb-3" controlId="PayTo">
                            <Form.Label column sm="1">{'Purchase' ? 'PayTo' : 'Bill'}</Form.Label>
                            <Col sm="10">
                                <Form.Control name=" PayTo"
                                    maxLength={inputMaximumLength}
                                    value={PayTo}
                                    onChange={(e) => onChange(e)}
                                    type="text"
                                    disabled={false}
                                />
                            </Col>
                        </Form.Group>

                        <br />
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="1">Link to Pro/Invoice # ?</Form.Label>
                            <Col sm="10">
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
                            <Form.Label column sm="1">BLS Pro Number</Form.Label>
                            <Col sm="10">
                                <Form.Control
                                    as="select"
                                    className="form-select"
                                    value={PJType}
                                    disabled={disablePro}
                                    placeholder="Select Pro/Invoice Number"
                                    onChange={(e) => onChange(e)}>


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
                        <br />
                        <Form.Group as={Row} className="mb-3" controlId=" Carrier_Pro">
                            <Form.Label column sm="1"> Carrier Pro</Form.Label>
                            <Col sm="10">
                                <Form.Control
                                    name=" Carrier_Pro"
                                    maxLength={inputMaximumLength}
                                    value={Carrier_Pro}
                                    onChange={(e) => onChange(e)}
                                    type="text"

                                />
                            </Col>
                        </Form.Group>
                        <br />
                        <Form.Group as={Row} className="mb-3" controlId="Date">
                            <Form.Label column sm="1"> Date</Form.Label>
                            <Col sm="10">
                                <Form.Control name="Date"
                                    value={moment(Date).format('MM/DD/YYYY')}
                                    maxLength={inputMaximumLength}
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
                                variant="outlined"
                                onChange={(e) => onChange(e)}
                            >
                                <MenuItem >
                                    <em>None</em>
                                </MenuItem>

                                {
                                    tableData.map((entity, Id) => (
                                        <MenuItem key={Id}
                                            value={entity.Status}>
                                            {entity.InvoiceStatus}
                                        </MenuItem>
                                    ))}

                            </Select>
                        </Grid>

                        <br />
                        <Form.Group as={Row} className="mb-3" controlId="Note">
                            <Form.Label column sm="1">Description / Note: </Form.Label>
                            <Col sm="10">
                                <Form.Control
                                    as="textarea"
                                    name="Note"
                                    value={Note}
                                    onChange={(e) => onChange(e)}
                                    className="form-control">
                                </Form.Control>
                            </Col>
                        </Form.Group>
                    </Form>
                </DialogContent>
                <DialogActions>

                    <Button onClick={handleClose}
                        style={{ backgroundColor: "black", color: "#FFFFFF" }}
                        variant='outlined'
                    >Cancel</Button>
                    <Button
                        style={{ backgroundColor: "#be1e2d", color: "#FFFFFF" }}
                        onClick={() => handleFormSubmit(data)}
                        variant='contained'>
                        Submit
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default PurchaseAdd;