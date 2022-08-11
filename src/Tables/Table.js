import React from "react";
import { useTable, usePagination, useGlobalFilter } from "react-table";
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import { IconButton } from '@mui/material';
import Box from '@mui/material/Box';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TextField from '@mui/material/TextField';
import Logout from '../Components/Logout';
import logo from '../Assets/logo.png';

function OrderTable({ columns, data }) {
  const props = useTable(
    {
      columns,
      data,
      autoResetPage: false,
    },
    useGlobalFilter, // useGlobalFilter!
    usePagination
  );
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    setGlobalFilter,
    // pageCount,
    // state,
    page, // Instead of using 'rows', we'll use page,
    // which has only the rows for the active page

    // The rest of these things are super handy, too ;)
    canPreviousPage,
    canNextPage,
    pageOptions,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize, globalFilter }
  } = props;
  // console.log(props);
  React.useEffect(() => {
    // props.dispatch({ type: actions.resetPage })
    console.log(globalFilter);
  }, [globalFilter]);

  var N =(rows.length / pageSize);
  var options = [];

  for (var i = 1; i <= N; i++) {
    options.push(i);
  }
  var myInt = pageOptions;
    var intArr = Array.from((myInt));

  const [pages, setPages] = React.useState();
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-around',
            bgcolor: '#DFDFDF',
            borderRadius: 1,
          }}>
          <Box >
            <img src={logo} alt="logo" style={{
              height: 60,
              width: 230,

            }} />
          </Box>
          <Box>
            <TextField
              type="search"
              placeholder='Search Here....'
              value={globalFilter || ""}
              onChange={e => setGlobalFilter(e.target.value)}
            />
          </Box>
          <Box>
            <Logout />
          </Box>
        </Box>
        <Table {...getTableProps()}>
          <TableHead>
            {headerGroups.map(headerGroup => (
              <TableRow {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  <TableCell className="cell" {...column.getHeaderProps()}>
                    {column.render("Header")}
                    {/* Render the columns filter UI */}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableHead>
          <TableBody {...getTableBodyProps()}>
            {page.map((row, i) => {
              prepareRow(row);
              return (
                <TableRow {...row.getRowProps()}>
                  {row.cells.map(cell => {
                    return (
                      <TableCell className="cell" {...cell.getCellProps()}>{cell.render("Cell")}</TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Paper>
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-evenly',
            bgcolor: '#DFDFDE',
            borderRadius: 1,
          }}>

          <Box sx={{
            display: 'flex',
            justifyContent: 'space-between'
          }}>
            <InputLabel id="label">Jump to page</InputLabel>
            <Select
              open={open}
              onClose={handleClose}
              onOpen={handleOpen}
              label="Pages"
              defaultValue="1"
              value={pages}
              onChange={e => {
                const page = e.target.value
                gotoPage(page);
                setPages(page)
              }}>
              {intArr.map(option => (
                <MenuItem key={option} value={option} >
                  {option}
                </MenuItem>
              ))}
            </Select>
          </Box>
          <Box sx={{
            display: 'flex',
            justifyContent: 'space-between'
          }} >
            <InputLabel id="label">Rows per page</InputLabel>
            <Select
              value={pageSize}
              onChange={e => {
                setPageSize(Number(e.target.value))
              }}
            >
              {[5, 10, 15, 30, 50, 100].map(pageSize => (
                <MenuItem key={pageSize} value={pageSize}>
                  {pageSize}
                </MenuItem>
              ))}
            </Select>
          </Box>
          <Box>
            {/* <Button variant="contained" onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
                            {'<<'}
                        </Button>{' '} */}
            <IconButton onClick={() => previousPage()} disabled={!canPreviousPage}>
              {'<'}
            </IconButton>{' '}
            <IconButton onClick={() => nextPage()} disabled={!canNextPage}>
              {'>'}
            </IconButton>{' '}
            {/* <Button variant="contained" onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
                            {'>>'}
                        </Button>{' '} */}

            <span className="text-sm text-gray-700">
              Page <span className="font-medium">{(pageSize*(pageIndex+1)-(pageSize-1))}</span> - {""}
              <span className="font-medium">{pageSize*(pageIndex+1)} of {rows.length}</span>
            </span>
          </Box>

        </Box>
      </Paper>
    </>
  );
}

export default OrderTable