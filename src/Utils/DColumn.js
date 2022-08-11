

// export const COLUMNS =  [



//       {
//         Header: 'Store',
//         accessor: 'store',


//       },
//       {
//         Header: 'City',
//         accessor: 'city',
//       },
//       {
//         Header: 'State',
//         accessor: 'state',
//       },
//       {
//         Header: 'Shipper',
//         accessor: 'shipper',
//       },
//       {
//         Header: 'Weight',
//         accessor: 'deliveredWeight',
//       },
//       {
//         Header: 'Planned Delivery Target Date',
//         accessor: 'plannedDeliveryTargetDate',
//       },
//       {
//         Header: 'Planned Delivery Start',
//         accessor: 'plannedDeliveryStartDatetime',
//       },
//       {
//         Header: 'Planned Delivery End',
//         accessor: 'plannedDeliveryEndDatetime',
//       },
//       {
//         Header: 'Actual Delivery Start',
//         accessor: 'actualDeliveryStartDatetime',
//       },          
//       {
//         Header: 'Actual Delivery End',
//         accessor: 'actualDeliveryEndDatetime',
//       },
//       // {
//       //   Header: 'IsinterLineOn',
//       //   accessor: 'isInterlineOn',
//       // },
//       {
//         Header: 'Status',
//         accessor: 'statusID',
//       },



// ]

// export const COLUMNS=[
//   {
//     name:"Store",
//     selector : row =>row.store,sortable:true,
//   },
//   {
//     name:"City",
//     selector : row =>row.city,sortable:true,
//   },
//   {
//     name:"State",
//     selector : row =>row.state,sortable:true,
//   },
//   {
//     name:"Shipper",
//     selector : row =>row.shipper,sortable:true,
//   },
// ]

////// mui Datatable

import AttachEmailSharpIcon from '@mui/icons-material/AttachEmailSharp';
import moment from 'moment'

export const columns = [
    {
        name: 'store',
        label: 'Store',
        options: {

        },

    },
    {
        name: "city",
        label: "City",
        options: {
            filter: true,
            sort: true,



        },
    },

    {
        name: "state",
        label: "State",
        options: {
            filter: true,
            sort: true,


        },

    },
    {
        name: "shipper",
        label: "Shipper",
        options: {
            filter: true,
            sort: true,


        },

    },
    {
        name: "deliveredWeight",
        label: "Weight",
        options: {
            filter: true,
            sort: true,


        }
    },
    {
        name: "plannedDeliveryTargetDate",
        label: "Planned Delivery Target",
        options: {
            filter: true,
            sort: true,
            customBodyRender: (value) => {
                return <div>{value ? moment(value).format('MM/DD/YYYY') : ''}</div>;
            },

        }
    },
    {
        name: "plannedDeliveryStartDatetime",
        label: "Planned Delivery Start Datetime",
        options: {
            filter: true,
            sort: true,
            customBodyRender: (value) => {
                return <div>{value ? moment(value).format('MM/DD/YYYY') : ''}</div>;
            },

        }
    },
    {
        name: "plannedDeliveryEndDatetime",
        label: "Planned Delivery End Datetime",
        options: {
            filter: true,
            sort: true,
            customBodyRender: (value) => {
                return <div>{value ? moment(value).format('MM/DD/YYYY') : ''}</div>;
            },

        }
    },
    {
        name: "actualDeliveryStartDatetime",
        label: "Actual Delivery Start Datetime",
        options: {
            filter: true,
            sort: true,
            customBodyRender: (value) => {
                return <div>{value ? moment(value).format('MM/DD/YYYY') : ''}</div>;
            },

        }

    },
    {
        name: "actualDeliveryEndDatetime",
        label: "Actual Delivery End Datetime",
        options: {
            filter: true,
            sort: true,
            customBodyRender: (value) => {
                return <div>{value ? moment(value).format('MM/DD/YYYY') : ''}</div>;
            },

        }
    },
    {
        name: 'statusID',
        label: 'Status ID',
        options: {
            filter: true,
            sort: true,


        }
    },
    {
        name: "Actions",
        label: 'Actions',
        options: {
            customBodyRender: (value, tableMeta, updateValue) => {
                return (
                    <AttachEmailSharpIcon>
                    </AttachEmailSharpIcon>
                );
            }
        },
    }




]


// mui table

// const columns = [
//   { title: "Store", field: "store", sorting: false, filtering: false, cellStyle: { background:"#009688" }, headerStyle: { color: "#fff" } },
//   { title: "city", field: "city", filterPlaceholder: "filter" },
// ] 