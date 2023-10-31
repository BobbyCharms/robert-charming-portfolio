import React from 'react';
// import { useState } from 'react';
import logo from './logo.svg';
import './App.css';                       
import Nav from './components/header/nav';
import Project from './components/projects/project';


function App() {
  return (
    <div className="App">
      < Nav />
      <main className="App-header">
        <Project />
          <div>
            <h3>Project Two</h3>
            <img src={logo} className="App-logo" alt="logo" />
            <p
              className="App-link"
              //href="https://reactjs.org"
              // Opens page in a new tab
              target="_blank"
              // Prevents the new page from interacting with the page it's being opened from 
              rel="noopener noreferrer"
            >
              More Coming Soon, So Get Excited!
            </p>
          </div>
      </main>
    </div>
  );
}

export default App;
