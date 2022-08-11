import { format } from 'date-fns';

export const COLUMNS = [
  {
    Header: 'Store',
    accessor: 'store',
  },
  {
    Header: 'City',
    accessor: 'city',
  },
  {
    Header: 'State',
    accessor: 'state',
  },
  {
    Header: 'Email',
    accessor: 'shipper',
  },
  {
    Header: 'ExpWeight',
    accessor: 'expectedWeight',
  },
  {
    Header: 'Over',
    accessor: 'brokerID',
  },
  {
    Header: 'Sort',
    accessor: 'sort',
  },
  {
    Header: 'Damaged',
    accessor: 'damaged',
  },
  {
    Header: 'StartArrival',
    accessor: 'shipperDeliveryStartDatetime',
    Cell: ({ value }) => {
      return format(new Date(value), 'dd/MM/yyyy')
    }
  },
  {
    Header: 'Status',
    accessor: 'delivery',
  },
  {
    Header: 'IsinterLineOn',
    accessor: 'isActive',
  },
  {
    Header: 'Actions',
    accessor: 'statusID',
  },
]

export const columns = [
  {
    name: 'intervals',
    label: 'intervals',
    options: {
      //   customBodyRender: (value) => {
      //     return (
      //       <div>
      //         {value.toString() === "91"
      //           ? "Every 2 Weeks"
      //           : value.toString() === "93"
      //             ? "Once a Week"
      //             : "Every Day"}
      //       </div>
      //     );
      //   },
    }
  },
  {
    name: 'scheduleTime',
    label: 'scheduleTime',
  },
];
export const options = {
  exportButton: false,
  filter: true,
  filterType: "dropdown",
  responsive: "standard",
  pagination: false,
  selectableRows: 'none',
  search: false,
  download: false,
  print: false
};

export const poolColumns = [
  {
    name: "poolLocationName",
    label: "LocationName",
  },
  {
    name: "Address1",
    label: "Address1",
  },
  {
    name: "City",
    label: "City",
  },
  {
    name: "State",
    label: "State",
  },
  {
    name: "Zipcode",
    label: "Zipcode",
  },
  {
    name: "IsActive",
    label: "Actions",
  },

]


export const contactCol = [
  {
    name: "Type",
    label: "Type",
  },
  {
    name: "Name",
    label: "Name",
  },
  {
    name: "Title",
    label: "Title",
  },
  {
    name: "Phone",
    label: "Phone",
  },
  {
    name: "Mobile",
    label: "Mobile",
  },
  {
    name: "Extension",
    label: "Extension",
  },
  {
    name: "Email",
    label: "Email",
  },
  {
    name: "id",
    label: "Actions",
  },
]

export const DcCol = [
  {
    name: "GroupNumber",
    label: "DCNumber",
  },
  {
    name: "City",
    label: "City",
  },
  {
    name: "State",
    label: "State",
  },
  {
    name: "Zipcode",
    label: "Zipcode",
  },
  {
    name: "IsActive",
    label: "Actions",
  },
]