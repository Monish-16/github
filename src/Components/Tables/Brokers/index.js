import React, {
    useState,
    useEffect
} from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccordionBody from 'react-bootstrap/esm/AccordionBody';
import CorpoarateOffice from './corpoarateOffice';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import BillToform from './BillToform';
import PayToForm from './PayToForm';
import { useDispatch } from 'react-redux';
import { toast } from "react-toastify";
import Paper from '@mui/material/Paper';
import { getBrokerStart, createBrokerStart, updateBrokerStart } from '../../../Actions/brokerAction';
import { corporateOfficeInitialValue, initalValueBill, initalValuepay, contact } from '../../../Utils/initial';


export default function ControlledAccordions({ open, handleClose, editData, Mode }) {
    const [expanded, setExpanded] = React.useState(false);
    const dispatch = useDispatch();
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const [brokerData, setbrokerData] = useState(corporateOfficeInitialValue);
    const [billdata, setbilldata] = useState(initalValueBill);
    const [payData, setPayData] = useState(initalValuepay);
    const [ContactData, setContactData] = useState(contact);

    const onChangeCorp = (e) => {
        const { value, name, id, checked } = e.target;
        setbrokerData({ ...brokerData, [name]: value, [id]: checked })
    };
    // console.log(brokerData);

    // const onChangeCheck = (e) => {
    //     const { checked, id } = e.target;
    //     setbrokerData({ ...brokerData, [id]: checked })
    // }

    const onChangeBill = (e) => {
        const { value, name } = e.target;
        setbilldata({ ...billdata, [name]: value })
    }
    const onChangePay = (e) => {
        const { value, name } = e.target;
        setPayData({ ...payData, [name]: value })
    }

    // onchange contact

    const onChange = (e) => {
        const { value, name } = e.target;
        setContactData({ ...ContactData, [name]: value })
    }
    // console.log(ContactData);

    const Brook = ((Object.keys(brokerData).length && Object.keys(billdata).length && Object.keys(payData).length) > 0)
    // console.log(Brook)

    const CorpObj = {
        DOT_Number: brokerData.DOT_Number,
        Comments: brokerData.Comments,
        DUNS_Number: brokerData.DUNS_Number,
        Entity_Type_Id: 3,
        Federal_Tax_ID: brokerData.Fax,
        IsActive: brokerData.IsActive,
        IsCarrier: false,
        IsDeleted: false,
        IsEdi: false,
        IsEntityAdmin: false,
        IsW9_YN: brokerData.IsW9_YN,
        LegalName: brokerData.LegalName,
        MC_Number: brokerData.MC_Number,
        SCAC: brokerData.SCAC,
        Type: "Broker",
        dbaName: brokerData.dbaName,
        Address_Id: {
            Address1: brokerData.Address1,
            Address2: brokerData.Address2,
            City: brokerData.City,
            Fax: brokerData.Fax,
            IsActive: false,
            Phone: brokerData.Phone,
            State: brokerData.State,
            Type: 14,
            Zipcode: brokerData.Zipcode,
        },
        Contacts: [{
            Department_Id: ContactData.Department_Id,
            Email: ContactData.Email,
            Entity_Type: 1,
            Extension: ContactData.Extension,
            IsActive: false,
            IsSendInviteEmail: false,
            Mobile: ContactData.Mobile,
            Name: ContactData.Name,
            Phone: ContactData.Phone,
            Title: ContactData.Title,
            Type: ContactData.Type
        }]
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (Brook) {
            const PostData = {
                // CorpoarateOffice: CorpObj,
 }
            dispatch(createBrokerStart(PostData))
            toast.success(" Broker Data Added Successfully");
            setTimeout(() => dispatch(getBrokerStart()), 2000);
        }


    }

    return (
        <Paper sx={{ width: '100%' }}>
            <Accordion
                open={open}
                onClose={handleClose}>
                <div>
                    <Accordion
                        style={{ overflow: 'hidden' }}
                        expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                        >
                            <Typography sx={{ width: '33%', flexShrink: 0 }}>
                                Corporate Office
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <AccordionBody>
                                <CorpoarateOffice brokerData={brokerData} onChangeCorp={onChangeCorp}
                                    ContactData={ContactData}
                                    onChange={onChange}
                                />
                            </AccordionBody>
                        </AccordionDetails>

                    </Accordion>
                    <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2bh-content"
                            id="panel2bh-header"
                        >
                            <Typography sx={{ width: '33%', flexShrink: 0 }}>Bill To</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <BillToform onChangeBill={onChangeBill} billdata={billdata} />
                        </AccordionDetails>
                    </Accordion>

                    <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel3bh-content"
                            id="panel3bh-header"
                        >
                            <Typography sx={{ width: '33%', flexShrink: 0 }}>
                                Pay To
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <PayToForm onChangePay={onChangePay} payData={payData} />
                        </AccordionDetails>
                    </Accordion>

                    <DialogActions>
                        <Button onClick={handleClose} color="secondary"
                            variant='outlined'
                        >Cancel</Button>

                        <Button color="primary"
                            onClick={handleFormSubmit}
                            // onClick={(MasterData) => handleFormSubmit(MasterData)}
                            variant='contained'>
                            Save
                        </Button>

                    </DialogActions>

                </div>

            </Accordion>
        </Paper>
    )
}
