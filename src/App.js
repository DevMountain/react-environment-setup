import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          // <a href="http://localhost:3030/auth/login"> Login </a>
          <a href="{process.env.REACT_APP_BASEURL}/auth/login"> Login </a>
          <br/>
          <a href="{process.env.REACT_APP_BASEURL}/auth/logout"> Logout </a>
          <br/>
          Notice I cannot get the port enviroment variable,
          This is safety measure from React to make sure they dont get variables
          they dont want you to have access to
          -- {process.env.PORT} --
          <br/>
          We can get the NODE_ENV property -- {process.env.NODE_ENV} --
          <br/>
          Or anything that starts with REACT_APP_ -- {process.env.REACT_APP_JUST_BECAUSE} --
          <br/>
        </p>
      </div>
    );
  }
}

export default App;
