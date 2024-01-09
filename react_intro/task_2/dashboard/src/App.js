// App.js

import logo from './holberton_logo.jpg';
import './App.css';
import React from 'react';
import { getFullYear, getFooterCopy } from './utils';
import Notifications from './Notifications';

function App() {
  const handleLabelClick = (inputId) => {
    const inputElement = document.getElementById(inputId);
    if (inputElement) {
      inputElement.focus();
    }
  };

  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        
        <label htmlFor="email" onClick={() => handleLabelClick('email')}>
          Email:
        </label>
        <input type="email" id="email" name="email" required />
        <br />

        <label htmlFor="password" onClick={() => handleLabelClick('password')}>
          Password:
        </label>
        <input type="password" id="password" name="password" required />
        <br />
        
        <button>OK</button>
        
        <Notifications />
      </div>
      <div className="App-footer">
        <p>
          Copyright {getFullYear()} - {getFooterCopy(true)}
        </p>
      </div>
    </div>
  );
}

export default App;
