import React from 'react';
import { useDispatch } from 'react-redux';
// import { useNavigate } from "react-router-dom";
import { logOut } from '../../Actions/authActions';
import { Link } from '@material-ui/core';
import { toast } from "react-toastify";


function Logouts() {
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const handleClick = () => {
    dispatch(logOut());
    localStorage.removeItem("token")
    // navigate("/")
    toast.success("logout success")
  };
  return (
    <>      
      <Link to="first" className='Link' onClick={handleClick}>Log out</Link>
    </>
  );
}

export default Logouts;