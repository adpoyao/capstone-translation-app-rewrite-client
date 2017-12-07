import React from 'react';
import {Link, Redirect} from 'react-router-dom'

import Login from './log-in';
import Signup from './sign-up';

export default function Landing (props) {
  return (
    <div className="landing">
      
      <div className="landing-title">
        <h2>⍚ Text-to-Speech-Translation App</h2>
        <p className="tagline">Your travel companion: translating english text to foreign, spoken languages.</p>
      </div>
      
      <div className="landing-buttons">
        <Link to={'/login'}>
            <button className="home-sign-up" type="submit" name="signup-button">Sign Up</button>
        </Link>
        <Link to={'/signup'}>
            <button className="home-log-in" type="submit" name="login-button">Log In</button>
        </Link>
      </div>

    </div>
  )
}