import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import { useDispatch } from 'react-redux';
import { toast } from "react-toastify";
import Slide from '@mui/material/Slide';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { deletePurchaseStart, getPurchaseStart } from '../../../Actions/purchaseActions';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function DeletePurchase(props) {

  const dispatch = useDispatch();

  const delObj = {
    Id: props.purchase.Id,
    Invoice_Number: props.purchase.Invoice_Number,
    PurchaseJournal_Number: props.purchase.PurchaseJournal_Number,
    Date: props.purchase.Date,
    Vendor_Name: props.purchase.Vendor_Name,
    PayTo: props.purchase.PayTo,
    Amount: props.purchase.Amount,
    PJType: props.purchase.PJType,
    Carrier_Pro: props.purchase.Carrier_Pro,
    Note: props.purchase.Note,
    Status: props.purchase.Status,
    isDeleted: true,
  }
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = (e) => {
    e.preventDefault();
    if (props.Mode === "delete") {
      dispatch(deletePurchaseStart(delObj))
      setOpen(false);
      toast.success(" Successfully deleted ")
      setTimeout(() => dispatch(getPurchaseStart()), 2000)

    }
  }

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        <DeleteOutlineIcon />
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >

        <DialogContent>

          <DialogContentText id="alert-dialog-slide-description">
            Are You sure want to delete?
          </DialogContentText>
        </DialogContent>
        <DialogActions>

          <Button
            onClick={handleDelete}
          >Yes</Button>
          <Button onClick={handleClose}>No</Button>


        </DialogActions>
      </Dialog>
    </div>
  );
}