import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBrokerStart } from '../../../Actions/brokerAction';
import { Styles } from '../../customcss/Style';
import MUIDataTable from "mui-datatables";
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';
import DeleteModal from '../Master/DelModel';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import FormContainer from '../Master/FormContainer';

const BrokerTable = () => {
    const dispatch = useDispatch();

    const [toggle, setToggle] = useState(true);
    const [edit, setEdit] = useState("");
    const [mode, setMode] = useState(false)
    const [id, setId] = useState(0);

    const handleClickOpen = () => {
        setToggle(false);
        setMode(false);
    };
    const handleClose = () => {
        setToggle(true);
       
    }

    useEffect(() => {
        dispatch(getBrokerStart())
    }, [dispatch])

    let bro = useSelector(state => state.fetchBrokers.brokers);
    // console.log(bro)

    const list = []
    bro.forEach(broker => {
        list.push({
            id: broker.corporateoffice.id,
            LegalName: broker.corporateoffice.LegalName,
            MC_Number: broker.corporateoffice.MC_Number,
            Federal_Tax_ID: broker.corporateoffice.Federal_Tax_ID,
            DOT_Number: broker.corporateoffice.DOT_Number,
            SCAC: broker.corporateoffice.SCAC,
            City: broker.corporateoffice.Address_Id ? broker.corporateoffice.Address_Id[0].City : '',
            Zipcode: broker.corporateoffice.Address_Id ? broker.corporateoffice.Address_Id[0].Zipcode : '',
            Phone: broker.corporateoffice.Address_Id ? broker.corporateoffice.Address_Id[0].Phone : '',

        })

    })

    const handleUpdate = (Id) => {
        const BrokersData = bro.find((e) => e.corporateoffice.id === Id);
        setToggle(false)
        setEdit(BrokersData);
        setMode(true);
    };

     const handleDelete = (Id) => {
        setId(Id);
    }

    const options = {
        exportButton: true,
        filter: true,
        filterType: "dropdown",
        responsive: "standard",
        fixedSelectColumn: false,
        resizableColumns: false,
        selectableRows: "none",
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
            name: 'LegalName',
            label: ' Legal Name',
        },
        {
            name: "MC_Number",
            label: "MC#"
        },
        {
            name: "Federal_Tax_ID",
            label: "Fed Tax ID"
        },
        {
            name: "DOT_Number",
            label: "DOT#"
        },
        {
            name: "SCAC",
            label: "SCAC#"
        },
        {
            name: "City",
            label: "City"
        },
        {
            name: "Zipcode",
            label: "Zipcode"
        },
        {
            name: "Phone",
            label: "Phone Number"
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
                            <IconButton onClick={() => handleDelete(value)}>
                                <DeleteModal DeleteId={id} />
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
            <div>

                <h3 style={{
                    backgroundColor: '#be1e2d', color: 'white', justifyContent: 'center', fontSize: '15px', height: '45px', margin: '10px'
                }}>Broker LIsting</h3>

            </div>

            {toggle ? (
                <>
                    <Grid align="right">
                        <Button variant="standard" className="addPop" color="primary"
                            onClick={handleClickOpen}
                        >
                            <AddIcon className='addicon' />
                            ADD Broker
                        </Button>
                    </Grid>

                    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                        <Styles>
                            <MUIDataTable
                                data={list}
                                columns={columns}
                                options={options}
                            />
                        </Styles>
                    </Paper>
                </>
            ) :

                (<>
                <FormContainer
                            handleClose={handleClose}
                            edit={edit} mode={mode}/>
</>
                )}
        </div>
    )
}

export default BrokerTable;
