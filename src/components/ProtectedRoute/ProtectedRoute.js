import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IsLoggedInContext } from '../../contexts/IsLoggedInContext';


const ProtectedRoute = ({ component: Component, ...props }) => {
  const isLoggedIn = useContext(IsLoggedInContext);

  return (

    <Route path={props.path}>
      {
        () => isLoggedIn ? <Component {...props} /> : <Redirect to="/" />
      }
    </Route>
  );
}

export default ProtectedRoute;
