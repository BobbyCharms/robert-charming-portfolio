import React from 'react';
// import { useState } from 'react';
import logo from './logo.svg';
import './App.css';                       
import Nav from './components/header/nav';


function App() {
  return (
    <div className="App">
      <React.Fragment>
        < Nav />
      </React.Fragment>
      <main className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p
          className="App-link"
          //href="https://reactjs.org"
          // Opens page in a new tab
          target="_blank"
          // Prevents the new page from interacting with the page it's being opened from 
          rel="noopener noreferrer"
        >
          More Coming Soon
        </p>
      </main>
    </div>
  );
}

export default App;
