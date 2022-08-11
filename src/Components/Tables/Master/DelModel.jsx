import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import DeleteIcon from '@mui/icons-material/Delete';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from "react-toastify";
import { getBrokerStart, updateBrokerStart } from '../../../Actions/brokerAction';



export default function DeleteModal({ DeleteId }) {
    const [open, setOpen] = React.useState(false);
    const dispatch = useDispatch();
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    let bro = useSelector(state => state.fetchBrokers.brokers);

    const handleBrokerDelete = () => {
        const DelData = bro.find((e) => e.corporateoffice.id === DeleteId);
        if (Object.keys(DelData).length > 0) {
            const CoopObj = {
                DOT_Number: DelData.corporateoffice.DOT_Number,
                Comments: DelData.corporateoffice.Comments,
                DUNS_Number: DelData.corporateoffice.DUNS_Number,
                Entity_Type_Id: 1,
                Federal_Tax_ID: DelData.corporateoffice.Federal_Tax_ID,
                IsActive: true,
                IsCarrier: false,
                IsDeleted: true,
                IsEdi: true,
                IsEntityAdmin: false,
                IsW9_YN: true,
                LegalName: DelData.corporateoffice.LegalName,
                MC_Number: DelData.corporateoffice.MC_Number,
                SCAC: "",
                Type: "",
                Id: DelData.corporateoffice.id,
                dbaName: DelData.corporateoffice.dbaName,
                Address_Id: {
                    Id: DelData.corporateoffice.Address_Id[0].Id,
                    Address1: DelData.corporateoffice.Address_Id[0].Address1,
                    Address2: DelData.corporateoffice.Address_Id[0].Address2,
                    City: DelData.corporateoffice.Address_Id[0].City,
                    Fax: DelData.corporateoffice.Address_Id[0].Fax,
                    IsActive: false,
                    Phone: DelData.corporateoffice.Address_Id[0].Phone,
                    State: DelData.corporateoffice.Address_Id[0].State,
                    Type: 14,
                    Zipcode: DelData.corporateoffice.Address_Id[0].Zipcode,
                    IsDeleted: true,
                },
                Contacts: [{
                    Department_Id: DelData.corporateoffice.contacts[0].Department_Id,
                    Email: DelData.corporateoffice.contacts[0].Email,
                    Entity_Type: 1,
                    Extension: DelData.corporateoffice.contacts[0].Extension,
                    IsActive: false,
                    IsSendInviteEmail: false,
                    Mobile: DelData.corporateoffice.contacts[0].Mobile,
                    Name: DelData.corporateoffice.contacts[0].Name,
                    Phone: DelData.corporateoffice.contacts[0].Phone,
                    Title: DelData.corporateoffice.contacts[0].Title,
                    Type: DelData.corporateoffice.contacts[0].Type
                }]
            };
            const billObj = {
                Bill_Address_Id: {
                    Address1: DelData.corporateoffice.BillTo[0].Address_Id[0].Address1,
                    Address2: DelData.corporateoffice.BillTo[0].Address_Id[0].Address2,
                    City: DelData.corporateoffice.BillTo[0].Address_Id[0].City,
                    Fax: DelData.corporateoffice.BillTo[0].Address_Id[0].Fax,
                    IsActive: false,
                    IsDeleted: true,
                    Phone: DelData.corporateoffice.BillTo[0].Address_Id[0].Phone,
                    State: DelData.corporateoffice.BillTo[0].Address_Id[0].State,
                    Type: 16,
                    Zipcode: DelData.Zipcode,
                },
                Comments: DelData.corporateoffice.BillTo[0].Comments,
                ContactEmail: DelData.corporateoffice.BillTo[0].ContactEmail,
                ContactName: DelData.corporateoffice.BillTo[0].ContactName,
                ContactPhone: DelData.corporateoffice.BillTo[0].ContactPhone,
                IsActive: false,
                Phone: DelData.corporateoffice.BillTo[0].Phone,
                Terms: DelData.corporateoffice.BillTo[0].Terms,
                Type: 19,
                IsDeleted: true,
            };
            const payObj = {
                Bill_Address_Id: {
                    Address1: DelData.corporateoffice.InvoiceTo[0].Address_Id[0].Address1,
                    Address2: DelData.corporateoffice.InvoiceTo[0].Address_Id[0].Address2,
                    City: DelData.corporateoffice.InvoiceTo[0].Address_Id[0].City,
                    Fax: DelData.corporateoffice.InvoiceTo[0].Address_Id[0].Fax,
                    IsActive: false,
                    IsDeleted: true,
                    Phone: DelData.corporateoffice.InvoiceTo[0].Address_Id[0].Phone,
                    State: DelData.corporateoffice.InvoiceTo[0].Address_Id[0].State,
                    Type: 16,
                    Zipcode: DelData.Zipcode,
                },
                Comments: DelData.corporateoffice.InvoiceTo[0].Comments,
                ContactEmail: DelData.corporateoffice.InvoiceTo[0].ContactEmail,
                ContactName: DelData.corporateoffice.InvoiceTo[0].ContactName,
                ContactPhone: DelData.corporateoffice.InvoiceTo[0].ContactPhone,
                IsActive: false,
                Phone: DelData.corporateoffice.InvoiceTo[0].Phone,
                Terms: DelData.corporateoffice.InvoiceTo[0].Terms,
                Type: 19,
                IsDeleted: true,
            }
            const Delete = {
                CorporateOffice: CoopObj,
                BillTo: billObj,
                InvoiceTo: payObj,
            }
            dispatch(updateBrokerStart(Delete));
            toast.success("Broker Deleted Success ");
            setTimeout(() => dispatch(getBrokerStart()), 2000);
            handleClose();
            console.log(Delete)
        }
    }
    return (
        <div>

        <DeleteIcon color='error' onClick={handleClickOpen} />

        <Dialog
            open={open}
            onClose={handleClose}
            maxWidth="sm"
            fullWidth
        >
            <DialogTitle className='addTitle'>Are You Want To Delete</DialogTitle>

            <DialogActions>
                <form>
                    <Button
                        onClick={handleClose}
                        className="cancel_Btn"
                        variant='contained'
                    >
                        No
                    </Button>
                    <Button
                       onClick={handleBrokerDelete}
                        variant='contained'
                        className="save_Btn"
                    >
                        Yes
                    </Button>
                </form>
            </DialogActions>


        </Dialog>
    </div >

    );

}