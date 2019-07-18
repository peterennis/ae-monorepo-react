import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Icon, InlineIcon } from "@iconify/react";
import trophy from "@iconify/icons-mdi-light/trophy";
import airplane from "@iconify/icons-twemoji/airplane";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <div>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
          &nbsp;&nbsp;&nbsp;
          <a
            className="App-link"
            href="https://stenciljs.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn Stencil
          </a>
          &nbsp;&nbsp;&nbsp;
          <a
            className="App-link"
            href="https://iconify.design"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn Iconify
          </a>
          &nbsp;&nbsp;&nbsp;<Icon icon={trophy} />
        </div>
        <div>

          <p>Please fasten your seatbelts <InlineIcon icon={airplane} /></p>
        </div>
      </header>
    </div>
  );
}

export default App;
