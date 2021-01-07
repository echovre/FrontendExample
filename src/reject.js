import React, { Component } from 'react';
import './App.css';

import { withRouter } from 'react-router-dom';
  
class Reject extends Component {

render(){
  return(
    <div className="wrapper">
      <h1>You have reached this page because you were not qualified Lorum Ipsem Lorum Ipsem </h1>
    </div>
  )
}
}

export default withRouter(Reject);
