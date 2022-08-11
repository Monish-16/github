import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPurchaseStart } from '../../../Actions/purchaseActions';
import { getLookupStart } from '../../../Actions/lookupAction';
// import {getInvoiceStart} from '../../Actions/InvoiceAction';
import Paper from '@mui/material/Paper';
import { Styles } from '../../customcss/Style';
import PurchaseAdd from './Add2purchase';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import moment from 'moment';
import { Box } from '@mui/material';
import DeletePurchase from './DeletePurchase';
import PurchaseEdit from './Edit2purchase';


export const PurchaseJournalTable = () => {
    const Purchases = useSelector(state => state.fetchPurchases.purchases)
    // const Invoices = useSelector(state => state.fetchInvoices.invoices)
    const Lookups = useSelector(state => state.fetchLookup.lookup)
    const [TableData, setTableData] = useState(Purchases);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPurchaseStart());
        dispatch(getLookupStart());
      
    }, [dispatch])
   


    useEffect(() => {
        if (Purchases && Purchases.length > 0) {

            const temp = [];
            Purchases.filter((f) => f.isDeleted !== true).map((v) => {
                const entity = Lookups && Lookups.find((h) => h.id === v.Status)
                // const toss = Invoices && Invoices.find((h) => h.PJType=== v.invoiceType)
                Object.assign(v, { InvoceStatus: entity ? entity.displayText : '' });
                // Object.assign(v,{ pjstatus:toss? toss.invoiceType : ''})
                return temp.push(v)
            })
            setTableData(temp)
        }
    }, [Purchases, Lookups]);

    return (
        <>
            <h3 style={{
                backgroundColor: '#be1e2d', color: 'white', justifyContent: 'center', fontSize: '15px', height: '45px', margin: '10px'
            }}>Purchase Journal LISTING</h3>
            <div className='container' style={{ margin: "auto", width: '100%', alignItems: 'center' }}>
                <PurchaseAdd />
                <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                    <Styles>
                        <TableContainer >
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell scope="col" className='header'>Invoice Number</TableCell>
                                        <TableCell scope="col" className='header'>Purchase Journal Number</TableCell>
                                        <TableCell scope="col" className='header'>Invoice Date</TableCell>
                                        <TableCell scope="col" className='header'>Customer</TableCell>
                                        <TableCell scope="col" className='header'>Consignee</TableCell>
                                        <TableCell scope="col" className='header'>Pickup Name</TableCell>
                                        <TableCell scope="col" className='header'>Invoice Status</TableCell>
                                        <TableCell scope="col" className='header'>Invoice Amount</TableCell>
                                        <TableCell scope="col" className='header'>Type</TableCell>
                                        <TableCell scope="col" className='header'>Trailer Number</TableCell>
                                        <TableCell scope="col" className='header'>Actions</TableCell>
                                        {/* <TableCell scope="col" className='header'>Actions</TableCell> */}
                                    </TableRow>
                                </TableHead>
                                {TableData && TableData.map((purchase, Id) => (
                                    <TableBody key={Id} >
                                        <TableRow>
                                            <TableCell>{purchase.Invoice_Number}</TableCell>
                                            <TableCell>{purchase.PurchaseJournal_Number}</TableCell>
                                            <TableCell>{moment(purchase.Date).format('yyyy-MM-DD')}</TableCell>
                                            <TableCell>{purchase.Vendor_Name}</TableCell>
                                            <TableCell>{purchase.Consignee}</TableCell>
                                            <TableCell>{purchase.PayTo}</TableCell>
                                            <TableCell>{purchase.InvoceStatus}</TableCell>
                                            <TableCell>{purchase.Amount}</TableCell>
                                            <TableCell>{purchase.PJType}</TableCell>
                                            <TableCell>{purchase.TrailerNumber}</TableCell>

                                            <TableCell>
                                                <Box sx={{ display: 'flex' }}>

                                                    {/* <EditPurchase purchase={purchase} Mode={"edit"}/> */}
                                                    <PurchaseEdit purchase={purchase} Mode={"edit"} />
                                                    <DeletePurchase purchase={purchase} Mode={"delete"} />
                                                </Box>
                                            </TableCell>




                                        </TableRow>
                                    </TableBody>
                                ))}
                            </Table>
                        </TableContainer>
                    </Styles>
                </Paper>
            </div>
        </>
    )
}

export default PurchaseJournalTable; 