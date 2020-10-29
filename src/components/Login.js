import React from 'react';
import { Button } from '@material-ui/core';
import { auth, provider } from '../firebase';
import { useStateValue } from '../context/StateProvider';
import { actionTypes } from '../context/reducer';
import '../styles/Login.css';

function Login() {
  const [state, dispatch] = useStateValue();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://cdn.freebiesupply.com/logos/thumbs/2x/slack-logo-thumb.png"
          alt=""
        />
        <h1>Sign in to Slack Clone</h1>
        <p>jorgedev.slack.com</p>
        <Button onClick={signIn}>Sign In with Google</Button>
      </div>
    </div>
  );
}

export default Login;
