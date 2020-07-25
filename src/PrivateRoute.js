import React, { useContext } from "react";
import { Route } from "react-router-dom";
import { AuthContext } from "./Auth";
import Landing from './components/Landing.jsx';
const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  const {currentUser} = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={routeProps =>
        !!currentUser ? (
          <RouteComponent {...routeProps} />
        ) : (
          <Landing/>
        )
      }
    />
  );
};


export default PrivateRoute