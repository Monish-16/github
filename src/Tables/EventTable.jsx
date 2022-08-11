import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getEventsStart } from '../Actions/eventAction';
import AddEvent from './AddEventForm';
import UpdateForm from './EditEvent';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
// import CircularProgress from '@mui/material/CircularProgress';
import { Styles } from "../CSS/Styles";
import DeleteEvent from "../Components/Tables/EventTable/delEvent";
import Box from '@mui/material/Box';


const EventTable = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getEventsStart());
    }, [dispatch])
    const Events = useSelector(state => state.fetchEvents.events);

    // const loading = useSelector(state => state.fetchEvents.loading)
    // if (loading) {
    //     return (
    //         <CircularProgress style={{ marginTop: "250px", marginLeft: "550px" }} role="status">
    //             <span className="visually-hidden">Loading...</span>
    //         </CircularProgress>
    //     );
    // }

    return (
        <div className='container' style={{ margin: "auto", width: '100%', alignItems: 'center' }}>

            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                <h3 style={{
                    backgroundColor: '#be1e2d', color: 'white', justifyContent: 'center', fontSize: '15px', height: '45px', margin: '10px'
                }}>Event Listing</h3>
                <AddEvent />
                <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                    <Styles >
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell scope="col" className='header'>Sl no</TableCell>
                                    <TableCell scope="col" className='header'>Event Name</TableCell>
                                    <TableCell scope="col" className='header'>Event Descrption</TableCell>
                                    <TableCell scope="col" className='header'>Status</TableCell>
                                    <TableCell scope="col" className='header'>Actions</TableCell>
                                </TableRow>
                            </TableHead>
                            {Events && Events.map((event, index) => (
                                <TableBody key={index} >
                                    <TableRow>
                                        <TableCell>{index + 1}</TableCell>
                                        <TableCell>{event.name}</TableCell>
                                        <TableCell>{event.description}</TableCell>
                                        <TableCell>
                                            {event.isActive.toString() === "true"
                                                ? "Active"
                                                : event.isActive.toString() === "false"
                                                    ? "InActive"
                                                    : "InActive"
                                            }
                                        </TableCell>
                                        <TableCell>{event.isDeleted}
                                            <Box sx={{ display: "flex" }}>
                                                <UpdateForm event={event} Mode={"edit"} />
                                                <DeleteEvent event={event} Mode={"delete"} />
                                            </Box>
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            ))}
                        </Table>
                    </Styles>
                </Paper>
            </Paper>
        </div>
    )
}

export default EventTable; 