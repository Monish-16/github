import React, { useState } from 'react';
// import LocalShippingIcon from '@mui/icons-material/LocalShipping';
// import AddBusinessIcon from '@mui/icons-material/AddBusiness';
// import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import '../../CSS/slide.scss';
import { menuItem } from '../../Utils/NavMenu';
// import Header from '../Header';


const Sidebar = ({ children }) => {
    const [isOpen, setIsOpen] = useState(true);
    const toggle = () => setIsOpen(!isOpen);
    // const menuItem = [
    //     {
    //         path: "/",
    //         name: "Dashboard",
    //         icon: <AddBusinessIcon />
    //     },
    //     {
    //         path: "/orderlist",
    //         name: "Orders",
    //         icon: <LocalShippingIcon />
    //     },
    //     {
    //         path: "/events",
    //         name: "Events",
    //         icon: <NotificationsNoneIcon />
    //     },
    //     {
    //         path: "/test",
    //         name: "Slide",
    //         icon: <NotificationsNoneIcon />
    //     },
    // ]
    return (
        <div>
            <div>
                {/* <Header /> */}
            </div>
            <div className="container-sidebar">
                <div style={{ width: isOpen ? "200px" : "80px" }} className="sidebar">
                    <div className="top_section">
                        {/* <h1 style={{display: isOpen ? "block" : "none"}} className="logo"></h1> */}
                        <div style={{ marginLeft: isOpen ? "120px" : "0px" }} className="bars">
                            <MenuIcon onClick={toggle} />
                        </div>
                    </div>
                    {
                        menuItem.map((item, index) => (
                            <NavLink to={item.path} key={index} className="link active" >
                                <div className="icon">{item.icon}</div>
                                <div style={{ display: isOpen ? "block" : "none" }} className="link_text">{item.name}</div>
                            </NavLink>
                        ))
                    }
                </div>
                <div className='main_container'>
                    <main className=''>{children}</main>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;