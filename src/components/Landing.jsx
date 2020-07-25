import React, { useContext,useCallback } from "react";
import {  Redirect ,withRouter} from "react-router-dom";
import app from "../firebase";
import {AuthContext} from  '../Auth';

import '../styles/Landing.css';



function Landing({history}){
   
    
        const handleLogin = useCallback(
          async event => {  
            event.preventDefault();
            const { email, password } = event.target.elements;
            try {
               
              await app
                .auth()
                .signInWithEmailAndPassword(email.value, password.value);
              history.push("/");
            } catch (error) {
              alert(error);
            }
          },
          [history]
        );
      
        const { currentUser } = useContext(AuthContext);
      
        if (currentUser) {
          return <Redirect to="/" />;
        }
return (


    
    <div className='login-box'>
        <h2>Welcome</h2> 
        <form onSubmit={handleLogin} className='login-form'>
              <input type="text" placeholder="Username" name="email" /> 
    
              <input type="password" placeholder="Password" name="password" /> 
              <br/>
              <input type="submit" value="Login"/>
        </form>
    </div>

);

    }



    export default withRouter(Landing);