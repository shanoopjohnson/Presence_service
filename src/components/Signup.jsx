import React, { useCallback } from "react";
import { withRouter } from "react-router";
import app from "../firebase";
import '../styles/Landing.css';

const SignUp = ({ history }) => {
  const handleSignUp = useCallback(async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      await app
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
      history.push("/");
    } catch (error) {
      alert(error);
    }
  }, [history]);

  return (
    <div className="login-box">
      <h2>Sign up</h2>

  
      <form onSubmit={handleSignUp} className='login-form'>
          <input name="email" type="email" placeholder="Email" />
     
          <input name="password" type="password" placeholder="Password" />
        <input type="submit" name="SignUp"></input>
      </form>
    </div>
  );
};

export default withRouter(SignUp);
