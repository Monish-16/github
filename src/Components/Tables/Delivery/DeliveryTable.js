import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDeliveryStart } from '../../../Actions/deliveryActions';
import MUIDataTable from "mui-datatables";
import { columns } from '../../../Utils/DColumn';
import Paper from '@mui/material/Paper';
import { Styles } from '../../customcss/Style';


const DeliveryList = () => {

    const dispatch = useDispatch();
    const fetchorders = useSelector(state => state.fetchUsers.orders)


    useEffect(() => {
        dispatch(getDeliveryStart());
    }, [dispatch])

    const options = {
        exportButton: true,
        filter: true,
        filterType: "dropdown",
        responsive: "standard",
        fixedSelectColumn: false,
        resizableColumns: false,
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


    return (
        <div>
            <h3 style={{
                backgroundColor: '#be1e2d', color: 'white', fontSize: '15px', height: '45px', margin: '10px',
            }}>DELIVERY LISTING</h3>
            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                <Styles>
                    <MUIDataTable
                        data={fetchorders}
                        columns={columns}
                        options={options}
                    />
                </Styles>
            </Paper>
        </div>
    )
}

export default DeliveryList;

