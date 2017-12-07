import React from 'react';
import {connect} from 'react-redux';

import './nav.css';

export function Nav (props) {
  return (
    <header role="banner">
    <h1>TEXT TO SPEECH TRANSLATION APP</h1>
    <ul id="nav" className="nav-view">
        {/* TODO: INSERT DYNAMIC HEADER */}
        <li>Hello User!</li>
        <li><a href="" className="viewLogout">Logout</a></li>
      </ul>
  </header>
  )
}

const mapStateToProps = state => ({
  // insertState
});

export default connect(mapStateToProps)(Nav)