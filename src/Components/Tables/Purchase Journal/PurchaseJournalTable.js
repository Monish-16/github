import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MUIDataTable from "mui-datatables";
import Paper from '@mui/material/Paper';
import { Styles } from '../../customcss/Style';
import moment from 'moment';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import PurchaseAdd from './AddoreditPurchase';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import { toast } from "react-toastify";
import { createPurchaseStart, updatePurchaseStart,getPurchaseStart } from '../../../Actions/purchaseActions';

const PurchaseTable = () => {
  const [open, setOpen] = useState(false);
  const initialValue = {
    Invoice_Number: '',
    PurchaseJournal_Number: '',
    Date: '',
    Vendor_Name: '',
    Consignee: '',
    PayTo: '',
    Amount: 0,
    PJType: '', Carrier_Pro: '', Status: '',
    Note: '',

  }
  const [formData, setFormdata] = useState(initialValue);
  const dispatch = useDispatch();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setFormdata(initialValue);
  };
  useEffect(() => {
    dispatch(getPurchaseStart());
  }, [dispatch])

  const fetchPurchase = useSelector(state => state.fetchPurchases.purchases)

  const onChange = (e) => {
    const { value, id, checked, name } = e.target;
    // const { checked, name } = e.target.checked;
    // console.log(value,id)
    setFormdata({ ...formData, [name]: value, [id]: checked })
  }

  const handleUpdate = (Id) => {
    const PurchaseData = fetchPurchase.find((e) => e.id === Id);
    setFormdata(PurchaseData);
    handleClickOpen();
    // console.log(eventData);
  };

  const handleDelete = (Id) => {
    const PurchaseData = fetchPurchase.find((e) => e.id === Id);

    if (Object.keys(PurchaseData).length > 0) {
      const confirm = window.confirm("Are you sure, you want to Delete this Event ?");
      PurchaseData.isDeleted = true;
      confirm && dispatch(updatePurchaseStart(PurchaseData));
      toast.success(" Events Deleted Successfully ")
      setTimeout(() => dispatch(getPurchaseStart()), 2000);
    }
  }



  const handleFormSubmit = (formData) => {
    if (formData.id) {
      dispatch(updatePurchaseStart(formData))
      handleClose();
      toast.success("Events Updated Successfully");
      setTimeout(() => dispatch(getPurchaseStart()), 2000);
    } else {
      dispatch(createPurchaseStart(formData));
      // console.log(formData)
      handleClose();
      toast.success(" Events Added Successfully ");
      setTimeout(() => dispatch(getPurchaseStart()), 2000);
    }

  };

  const columns = [
    {
      name: 'Invoice_Number',
      label: 'Invoice Number',
    },
    {
      name: 'PurchaseJournal_Number',
      label: 'Purchase Journal Number',
    },
    {
      name: 'Date',
      label: 'Invoice Date',
      options: {
        filter: true,
        sort: true,
        customBodyRender: (value) => {
          return <div>{value ? moment(value).format('MM/DD/YYYY') : ''}</div>;
        },
      }
    },
    {
      name: 'Vendor_Name',
      label: 'Customer',
    },
    {
      name: 'Consignee',
      label: 'Consignee',
    },
    {
      name: 'PayTo',
      label: 'Pickup Name',
    },
    {
      name: 'Amount',
      label: 'Invoice Amount',
    },
    {
      name: 'PJType',
      label: 'Type',
    },
    {
      name: 'Trailer Number',
      label: 'Trailer Number',
    },
    {
      name: "id",
      label: 'Actions',
      options: {
        customBodyRender: (value) => {
          return (
            <div>
              <Tooltip title="Edit">
                <IconButton onClick={() => handleUpdate(value)} >
                  <EditIcon
                    color="info"
                  />
                </IconButton>
              </Tooltip>
              <Tooltip title="Delete">
                <IconButton onClick={() => handleDelete(value)} >
                  <DeleteIcon
                    color="error"
                  />
                </IconButton>
              </Tooltip>
            </div>
          );
        }
      },
    },
  ]
  const options = {
    exportButton: true,
    filter: true,
    filterType: "dropdown",
    responsive: "standard",
    fixedSelectColumn: false,
    resizableColumns: false,
    rowsPerPageOptions: [5, 10, 15, 30, 50],
    jumpToPage: true,
    jumpToPagePosition: "left",
    textLabels: {
      pagination: {
        next: "Next >",
        previous: "< Previous",
        rowsPerPage: "Total items Per Page",
        displayRows: "of"
      }
    },
    MuiTableCell: {
      head: {
        backgroundColor: "red !important"
      }
    }
  };


  return (
    <>
      <h3 style={{
        backgroundColor: '#be1e2d', color: 'white', fontSize: '15px', height: '45px', margin: '10px',
      }}>PURCHASE LISTING</h3>
      <div className='container' style={{ margin: "auto", width: '100%', alignItems: 'center' }}>

        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
          <Grid align="right">
            <Button variant="standard" className="addPop" color="primary" onClick={handleClickOpen}><AddIcon className='addicon' />Add  Purchase Journal Entry</Button>
          </Grid>

          <Styles>
            <MUIDataTable
              data={fetchPurchase}
              columns={columns}
              options={options}
            />
          </Styles>
        </Paper>

        <PurchaseAdd
          open={open}
          handleClose={handleClose}
          data={formData}
          onChange={onChange}
          handleFormSubmit={handleFormSubmit}
        />
      </div>
    </>
  )
}

export default PurchaseTable;