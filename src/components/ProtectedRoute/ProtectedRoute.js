import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const ProtectedRoute = ({component: Component, ...props}) => (
  <Route path={props.path}>
    {
      () => props.isLoggedIn ? <Component {...props} /> : <Redirect to="/" />
    }
  </Route>
);

export default ProtectedRoute;
