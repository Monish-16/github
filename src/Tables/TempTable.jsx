import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { getTempalateStart } from '../Actions/templateAction';
// import CircularProgress from '@mui/material/CircularProgress';
import Addtemplate from './AddTemplate';
import EditTemp from './EditTemplate';
import Box from '@mui/material/Box';
import DeleteTemp from './DeleteTemp';
import { Styles } from "../CSS/Styles"

const TempTable = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTempalateStart());
    }, [dispatch])
    const templates = useSelector(state => state.fetchTemplate.template);
    // const loading = useSelector(state => state.fetchTemplate.loading)
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
                <Addtemplate />
                <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                    <Styles >
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell scope="col" className='header'>Type</TableCell>
                                    <TableCell scope="col" className='header'>Subject</TableCell>
                                    <TableCell scope="col" className='header'>Body</TableCell>
                                    <TableCell scope="col" className='header'>Status</TableCell>
                                    <TableCell scope="col" className='header'>Event Name</TableCell>
                                    <TableCell scope="col" className='header'>Action</TableCell>
                                </TableRow>
                            </TableHead>
                            {templates && templates.map((template, index) => (
                                <TableBody key={index} >
                                    <TableRow>
                                        <TableCell>{template.type.toString() === "48"
                                            ? "email"
                                            : template.isActive.toString() === "49"
                                                ? "sms"
                                                : "sms"
                                        }
                                        </TableCell>
                                        <TableCell>{template.subject}</TableCell>
                                        <TableCell>{template.bodyText}</TableCell>
                                        <TableCell>
                                            {template.isActive.toString() === "true"
                                                ? "Active"
                                                : template.isActive.toString() === "false"
                                                    ? "InActive"
                                                    : "InActive"
                                            }
                                        </TableCell>
                                        <TableCell>{template.eventName}</TableCell>
                                        <TableCell> {template.isDeleted}
                                            <Box sx={{ display: "flex" }}>
                                                <EditTemp template={template} Modes={"edit"} />
                                                <DeleteTemp template={template} Mode={"delete"} />
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

export default TempTable; 