import Tooltip from '@mui/material/Tooltip';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';

export const columns = [
    {
        name: 'Type',
        label: ' Type',
    },
    {
        name: 'Name',
        label: 'Name',
    },
    {
        name: 'Title',
        label: 'Title',
    },
    {
        name: 'Extension',
        label: 'Ext',
    },
    {
        name: 'Phone',
        label: 'Phone',
    },
    {
        name: 'Mobile',
        label: 'Mobile',
    },
    {
        name: 'Email',
        label: 'Email',
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

                            >
                                <EditIcon
                                    color="info"
                                />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Delete">
                            <IconButton

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

 export const options = {

    filter: true,
    filterType: "dropdown",
    responsive: "standard",
    selectableRows: "none",
    print: false,
    search: false,

    jumpToPage: false,
    pagination: false,

    MuiTableCell: {
        head: {
            backgroundColor: "red !important"
        }
    }
};