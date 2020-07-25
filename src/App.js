import React from 'react';
import {BrowserRouter as Router } from 'react-router-dom';
import Home from './components/Home.jsx';
import * as ROUTES from './constants/routes'
import PrivateRoute from './PrivateRoute';
import { AuthProvider } from "./Auth";


function App() {
  return (
    <AuthProvider>
<Router>
<PrivateRoute exact path={ROUTES.LANDING} component={Home}/>

    </Router>
    </AuthProvider>
  );
}

export default App;
