import * as React from 'react';
import { useState, useEffect } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CooperativeForm from './CooperativeForm';
import BillToForm from './BillToForm';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import PayToForm from './payToform';
import { getBrokerStart, createBrokerStart, updateBrokerStart } from '../../../Actions/brokerAction';

import { useDispatch } from 'react-redux';
import { toast } from "react-toastify";
import { contact, coOP, billTo, initalValuepay } from "../../../Utils/ini";

export default function FormContainer({ edit, mode, open, handleClose }) {

    const dispatch = useDispatch();
    
    const [expanded, setExpanded] = useState(false);
    const [billData, setBillData] = useState(billTo);
    const [payData, setPayData] = useState(initalValuepay);
    const [corp, setCorp] = useState(coOP);
    const [corpCon, setCorpCon] = useState(contact);


    useEffect(() => {
        if (mode && Object.keys(edit).length > 0) {
            const edi = {
                id: edit.corporateoffice ? edit.corporateoffice.id : "",
                LegalName: edit.corporateoffice ? edit.corporateoffice.LegalName : "",
                DOT_Number: edit.corporateoffice ? edit.corporateoffice.DOT_Number : "",
                DUNS_Number: edit.corporateoffice ? edit.corporateoffice.DUNS_Number : "",
                MC_Number: edit.corporateoffice ? edit.corporateoffice.MC_Number : "",
                Federal_Tax_ID: edit.corporateoffice ? edit.corporateoffice.Federal_Tax_ID : "",
                dbaName: edit.corporateoffice ? edit.corporateoffice.dbaName : "",
                Comments: edit.corporateoffice ? edit.corporateoffice.Comments : "",
                IsEdi: edit.corporateoffice ? Boolean(Number(edit.corporateoffice.IsEdi)) : "",
                IsW9_YN: edit.corporateoffice ? Boolean(Number(edit.corporateoffice.IsW9_YN)) : "",
                IsActive: edit.corporateoffice ? Boolean(Number(edit.corporateoffice.IsActive)) : "",
                Id: edit.corporateoffice ? edit.corporateoffice.Address_Id[0].Id : "",
                Address1: edit.corporateoffice ? edit.corporateoffice.Address_Id[0].Address1 : "",
                Address2: edit.corporateoffice ? edit.corporateoffice.Address_Id[0].Address2 : "",
                SCAC: edit.corporateoffice ? edit.corporateoffice.SCAC : "",
                City: edit.corporateoffice ? edit.corporateoffice.Address_Id[0].City : "",
                Phone: edit.corporateoffice ? edit.corporateoffice.Address_Id[0].Phone: "0",
                State: edit.corporateoffice ? edit.corporateoffice.Address_Id[0].State : "",
                Type: edit.corporateoffice ? edit.corporateoffice.Address_Id[0].Type : "",
                Zipcode: edit.corporateoffice ? edit.corporateoffice.Address_Id[0].Zipcode : "",
                Fax: edit.corporateoffice ? edit.corporateoffice.Address_Id[0].Fax : "0",
            }
            const ContactEdi = {
                Name: edit.corporateoffice.contacts ? edit.corporateoffice.contacts[0].Name : "",
                Type: edit.corporateoffice.contacts ? edit.corporateoffice.contacts[0].Type : "",
                Email: edit.corporateoffice.contacts ? edit.corporateoffice.contacts[0].Email : "",
                Phone: edit.corporateoffice.contacts ? edit.corporateoffice.contacts[0].Phone : "",
                Title: edit.corporateoffice.contacts ? edit.corporateoffice.contacts[0].Title : "",
                Mobile: edit.corporateoffice.contacts ? edit.corporateoffice.contacts[0].Mobile : "",
                IsActive: edit.corporateoffice.contacts ? edit.corporateoffice.contacts[0].IsActive : "",
                Entity_Id: 2141,
                Extension: edit.corporateoffice.contacts ? edit.corporateoffice.contacts[0].Extension : "",
                IsDeleted: false,
                Entity_Type: edit.corporateoffice.contacts ? edit.corporateoffice.contacts[0].Entity_Type : "",
                Department_Id: edit.corporateoffice.contacts ? edit.corporateoffice.contacts[0].Department_Id : "",
                IsSendInviteEmail: "false"
            }
            const BillEdi = {
                ContactEmail: edit.corporateoffice.BillTo ? edit.corporateoffice.BillTo[0].ContactEmail : "",
                ContactName: edit.corporateoffice.BillTo ? edit.corporateoffice.BillTo[0].ContactName : "",
                ContactPhone: edit.corporateoffice.BillTo ? edit.corporateoffice.BillTo[0].ContactPhone : "",
                Comments: edit.corporateoffice.BillTo ? edit.corporateoffice.BillTo[0].Comments : "",
                Terms: edit.corporateoffice.BillTo ? edit.corporateoffice.BillTo[0].Terms : "",
                Address1: edit.corporateoffice.BillTo ? edit.corporateoffice.BillTo[0].Address_Id[0].Address1 : "",
                Address2: edit.corporateoffice.BillTo ? edit.corporateoffice.BillTo[0].Address_Id[0].Address2 : "",
                City: edit.corporateoffice.BillTo ? edit.corporateoffice.BillTo[0].Address_Id[0].City : "",
                State: edit.corporateoffice.BillTo ? edit.corporateoffice.BillTo[0].Address_Id[0].State : "",
                Phone: edit.corporateoffice.BillTo ? edit.corporateoffice.BillTo[0].Address_Id[0].Phone : "",
                Zipcode: edit.corporateoffice.BillTo ? edit.corporateoffice.BillTo[0].Address_Id[0].Zipcode : "",
                Fax: edit.corporateoffice.BillTo ? edit.corporateoffice.BillTo[0].Address_Id[0].Fax : "",

            }

            const payEdi ={
                ContactName: edit.corporateoffice.InvoiceTo ? edit.corporateoffice.InvoiceTo[0].ContactName : "",
                ContactPhone: edit.corporateoffice.InvoiceTo ? edit.corporateoffice.InvoiceTo[0].ContactPhone : "",
                ContactEmail: edit.corporateoffice.InvoiceTo ? edit.corporateoffice.InvoiceTo[0].ContactEmail : "",
                Comments: edit.corporateoffice.InvoiceTo ? edit.corporateoffice.InvoiceTo[0].Comments : "",
                Terms: edit.corporateoffice.InvoiceTo ? edit.corporateoffice.InvoiceTo[0].Terms : "",
                Address1: edit.corporateoffice.InvoiceTo ? edit.corporateoffice.InvoiceTo[0].Address_Id[0].Address1 : "",
                Address2: edit.corporateoffice.InvoiceTo ? edit.corporateoffice.InvoiceTo[0].Address_Id[0].Address2 : "",
                City: edit.corporateoffice.InvoiceTo ? edit.corporateoffice.InvoiceTo[0].Address_Id[0].City : "",
                State: edit.corporateoffice.InvoiceTo ? edit.corporateoffice.InvoiceTo[0].Address_Id[0].State : "",
                Phone: edit.corporateoffice.InvoiceTo ? edit.corporateoffice.InvoiceTo[0].Address_Id[0].Phone : "",
                Zipcode: edit.corporateoffice.InvoiceTo ? edit.corporateoffice.InvoiceTo[0].Address_Id[0].Zipcode : "",
                Fax: edit.corporateoffice.InvoiceTo ? edit.corporateoffice.InvoiceTo[0].Address_Id[0].Fax : "",           
            }

            setCorp(edi);
            setCorpCon(ContactEdi);
            setBillData(BillEdi);
            setPayData(payEdi);


        }

    }, [mode, edit])

    const onChangeCon = (e) => {
        const { value, name } = e.target;
        setCorpCon({ ...corpCon, [name]: value })
    };
    const onChange = (e) => {
        const { value, name } = e.target;
        setBillData({ ...billData, [name]: value });
    };
    const onCorpChange = (e) => {
        const { value, name, id, checked } = e.target;
        setCorp({ ...corp, [name]: value, [id]: checked })
    };

    const onChangePay = (e) => {
        const { value, name } = e.target;
        setPayData({ ...payData, [name]: value })
    }

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
const condi = ((Object.keys(corp).length
        && Object.keys(billData).length &&
        Object.keys(corpCon).length
        && Object.keys(payData).length) > 0)

    const handleSubmit = (e) => {
        e.preventDefault();
        if (condi) {
            const CoopObj = {
                DOT_Number: corp.DOT_Number,
                Comments: corp.Comments,
                DUNS_Number: corp.DUNS_Number,
                Entity_Type_Id: 3,
                Federal_Tax_ID: corp.Fax,
                IsActive: corp.IsActive,
                IsCarrier: false,
                IsDeleted: false,
                IsEdi: corp.IsEdi,
                IsEntityAdmin: false,
                IsW9_YN: corp.IsW9_YN,
                LegalName: corp.LegalName,
                MC_Number: corp.MC_Number,
                SCAC: corp.SCAC,
                Type: "",
                Id: corp.id,
                dbaName: corp.dbaName,
                Address_Id: {
                    Id: corp.Id,
                    Address1: corp.Address1,
                    Address2: corp.Address2,
                    City: corp.City,
                    Fax: corp.Fax,
                    IsActive: false,
                    Phone: corp.Phone,
                    State: corp.State,
                    Type: 14,
                    Zipcode: corp.Zipcode,
                },
                Contacts: [{
                    Department_Id: corpCon.Department_Id,
                    Email: corpCon.Email,
                    Entity_Type: 3,
                    Extension: corpCon.Extension,
                    IsActive: false,
                    IsSendInviteEmail: false,
                    Mobile: corpCon.Mobile,
                    Name: corpCon.Name,
                    Phone: corpCon.Phone,
                    Title: corpCon.Title,
                    Type: corpCon.Type
                }]
            };
            const billObj = {
                Bill_Address_Id: {
                    Address1: billData.Address1,
                    Address2: billData.Address2,
                    City: billData.City,
                    Fax: billData.Fax,
                    IsActive: false,
                    Phone: billData.Phone,
                    State: billData.State,
                    Type: 16,
                    Zipcode: billData.Zipcode,
                },
                Comments: billData.Comments,
                ContactEmail: billData.ContactEmail,
                ContactName: billData.ContactName,
                ContactPhone: billData.ContactPhone,
                IsActive: false,
                Phone: billData.Phone,
                Terms: billData.Terms,
                Type: 19,
            };

            const PayValueData = {
                Bill_Address_Id: {
                    Address1: payData.Address1,
                    Address2: payData.Address2,
                    City: payData.City,
                    Fax: payData.Fax,
                    IsActive: false,
                    Phone: payData.Phone,
                    State: payData.State,
                    Type: 17,
                    Zipcode: payData.Zipcode,
                },
                Comments: payData.Comments,
                ContactEmail: payData.ContactEmail,
                ContactName: payData.ContactName,
                ContactPhone: payData.ContactPhone,
                IsActive: false,
                Phone: payData.Phone,
                Terms: payData.Terms,
                Type: 21,
            };


            const postData = {
                CorporateOffice: CoopObj,
                BillTo: billObj,
                InvoiceTo: PayValueData,

            };
            const updateData = {
                CorporateOffice: CoopObj,
                BillTo: billObj,
                InvoiceTo: PayValueData,

            };
            if (mode) {
                setTimeout(() => dispatch(updateBrokerStart(updateData)), 500);
                toast.success("Broker updated successfully");
            } else {
                setTimeout(() => dispatch(createBrokerStart(postData)), 500);
                toast.success("Broker added successfully");
            };
            setTimeout(() => dispatch(getBrokerStart()), 2000)
            handleClose();

        };
    };
    return (
        <div>

            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} className="accordion-item show">
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                    className='accordion-header'
                >
                    <Typography sx={{ width: '33%', flexShrink: 0 }} className="accordion-button">
                        Corporate Office
                    </Typography>

                </AccordionSummary>
                <AccordionDetails>
                    <CooperativeForm onCorpChange={onCorpChange} onChangeCon={onChangeCon} corp={corp} corpCon={corpCon} />
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} className="accordion-item">
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>BillTo</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <BillToForm onChange={onChange} billData={billData} />
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} className="accordion-item">
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>Pay To</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <PayToForm onChangePay={onChangePay} payData={payData} />
                </AccordionDetails>
            </Accordion>

            <DialogActions>
                <form>
                    <Button
                        className="cancel_Btn"
                        variant='contained'
                        onClick={handleClose}
                    >
                        Cancel
                    </Button>
                    <Button
                        // type="submit"
                        className="save_Btn"
                        variant='contained'
                        onClick={handleSubmit}
                    >
                        {mode ? "Update" : "Save"}
                    </Button>
                </form>
            </DialogActions>

        </div>
    );
}
