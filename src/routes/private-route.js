import { Outlet, Navigate } from "react-router-dom";
import { Header } from "../components";

import PropTypes from "prop-types"


const PrivateRoute = ({ children,isAdmin }) => {

  const user = localStorage.getItem('codeburgue:userData');

  const userAdmin = JSON.parse(user)

  

  if (isAdmin && !userAdmin) {
    return  <Navigate to="/" />
  } 

 
  return (
    <>
      {isAdmin && <Header />}
      {user ? <Outlet /> : <Navigate to="/login" />}
    </>
  );
};

export default PrivateRoute;

PrivateRoute.propTypes = {
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),
  isAdmin: PropTypes.bool
}