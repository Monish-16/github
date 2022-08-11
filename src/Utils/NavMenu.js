
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PanToolAltIcon from '@mui/icons-material/PanToolAlt';
// import CoPresentIcon from '@mui/icons-material/CoPresent';
import InterpreterModeIcon from '@mui/icons-material/InterpreterMode';
import LoupeIcon from '@mui/icons-material/Loupe';
export const menuItem = [
    {
        path: "/",
        name: "Dashboard",
        icon: <AddBusinessIcon />
    },
    {
        path: "/brokers",
        name: "Brokers",
        icon: <LocalShippingIcon />
    },
    {
        path: "/event",
        name: "Event",
        icon: <CalendarMonthIcon />
    },

    {
        path: "/delivery",
        name: "Delivery",
        icon: <InterpreterModeIcon />
    },
    {
        path: "/permissions",
        name: "Permission",
        icon: <PanToolAltIcon />
    },
  
    // {
    //     path: "/lookup",
    //     name: "lookup",
    //     icon: <CoPresentIcon />
    // },
    {
        path: "/purchase",
        name: "Purchase Journal",
        icon: <LoupeIcon />
    },
]