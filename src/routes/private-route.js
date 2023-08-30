import { Outlet, Navigate } from "react-router-dom";
import { Header } from "../components";

import PropTypes from "prop-types"
import { useEffect } from "react";

const PrivateRoute = ({ children, ...rest }) => {

  const user = localStorage.getItem('codeburgue:userData');

  const userAdmin = JSON.parse(user).admin


  if (userAdmin) {
    
  } else {
   
  }


 
  return (
    <>
      {!userAdmin && <Header />}
      {user ? <Outlet /> : <Navigate to="/login" />}
    </>
  );
};

export default PrivateRoute;

PrivateRoute.propTypes = {
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),
  isAdmin: PropTypes.bool
}