import React from 'react';
import { Button } from '@material-ui/core';
import '../styles/Login.css';

function Login() {
  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://cdn.freebiesupply.com/logos/thumbs/2x/slack-logo-thumb.png"
          alt=""
        />
        <h1>Sign in to Slack Clone</h1>
        <p>jorgedev.slack.com</p>
        <Button>Sign In with Google</Button>
      </div>
    </div>
  );
}

export default Login;
