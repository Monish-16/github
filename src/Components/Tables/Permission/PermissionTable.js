import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPermissionStart, createPermissionStart, updatePermissionStart } from '../../../Actions/permissionActions';
import { Styles } from '../../customcss/Style';
import Paper from '@mui/material/Paper';
import MUIDataTable from "mui-datatables";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import PermissionDialog from './addoreditPermission';
import { toast } from "react-toastify";
import AddIcon from '@mui/icons-material/Add';


const PermissionTable = () => {
  const initialValue = {
    name: '',
    description: '',
    parentSetId: '',

  }
  const dispatch = useDispatch();
  const permissions = useSelector(state => state.fetchPermissions.permissions)
  const [open, setOpen] = useState(false);
  const [formData, setFormdata] = useState(initialValue);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setFormdata(initialValue);
  };


  useEffect(() => {
    dispatch(getPermissionStart())
  }, [dispatch])

  //handleupdate

  const handleUpdate = (Id) => {
    const permissionsData = permissions.find((e) => e.id === Id);
    setFormdata(permissionsData);
    handleClickOpen();

  };

  //onchange..
  const onChange = (e) => {
    const { value, name } = e.target;
    // const { checked, name } = e.target.checked;
    // console.log(value,id)
    setFormdata({ ...formData, [name]: value })
  }

  //handlesumit add and update.
  const handleFormSubmit = (formData) => {
    if (formData.id) {
      dispatch(updatePermissionStart(formData))
      handleClose();
      toast.success("Permission Updated Successfully");
      setTimeout(() => dispatch(getPermissionStart()), 2000);
    } else {
      dispatch(createPermissionStart(formData));
      // console.log(formData)
      handleClose();
      toast.success(" Permission Added Successfully ");
      setTimeout(() => dispatch(getPermissionStart()), 2000);
    }}
    

    //handledelete


    const handleDelete = (Id) => {
      const permissionsData = permissions.find((e) => e.id === Id);
      
      if (Object.keys(permissionsData).length > 0) {
        const confirm = window.confirm("Are you sure, you want to Delete this Permission?");
        permissionsData.isDeleted = true;
        confirm && dispatch(updatePermissionStart(permissionsData));
        toast.success(" Permission Deleted Successfully ")
        setTimeout(() => dispatch(getPermissionStart()), 2000);
      }
    }


  const options = {
    exportButton: true,
    filter: true,
    filterType: "dropdown",
    responsive: "standard",
    fixedSelectColumn: false,
    resizableColumns: false,
    selectableRows:"none",
    rowsPerPageOptions: [5, 10, 15, 30, 50, 100],
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


  const columns = [
    {
      name: 'name',
      label: ' Name',
    },
    {
      name: 'description',
      label: ' Description',
    },
    {
      name: 'parentName',
      label: ' Parent Name',
    },
    {
      name: "id",
      label: 'Actions',
      options: {
        customBodyRender: (value) => {
          return (
            <div>
              <Tooltip title="Edit">
                <IconButton 
                onClick={() => handleUpdate(value)}  
                >
                  <EditIcon
                    color="info"
                  />
                </IconButton>
              </Tooltip>
              <Tooltip title="Delete">
                <IconButton 
                onClick={() => handleDelete(value)}
                >
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


  return (
    <div>
      <h3 style={{
        backgroundColor: '#be1e2d', color: 'white', justifyContent: 'center', fontSize: '15px', height: '45px', margin: '10px'
      }}>Permission Listing</h3>
      <Grid align="right">
        <Button variant="standard" className="addPop" color="primary"
          onClick={handleClickOpen}
        ><AddIcon className='addicon' />ADD Permission</Button>
      </Grid>

      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <Styles>
          <MUIDataTable
            data={permissions}
            columns={columns}
            options={options}
          />
        </Styles>
      </Paper>
      <PermissionDialog
        open={open}
        handleClose={handleClose}
        data={formData}
        onChange={onChange}
        handleFormSubmit={handleFormSubmit} />
    </div>

  )
}


export default PermissionTable