import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Icon, InlineIcon } from "@iconify/react";
import trophy from "@iconify/icons-mdi-light/trophy";

import firstPlaceMedal from "@iconify/icons-twemoji/1st-place-medal";
import airplane from "@iconify/icons-twemoji/airplane";
import airplaneArrival from "@iconify/icons-twemoji/airplane-arrival";
import airplaneDeparture from "@iconify/icons-twemoji/airplane-departure";
import helicopter from "@iconify/icons-twemoji/helicopter";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <div>
          <Icon icon={firstPlaceMedal} />&nbsp;
          <Icon icon={trophy} />&nbsp;&nbsp;&nbsp;
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
          &nbsp;&nbsp;&nbsp;<Icon icon={trophy} />&nbsp;
          <Icon icon={firstPlaceMedal} />
        </div>
        <div>
          <p><InlineIcon icon={helicopter} />&nbsp;
            <InlineIcon icon={airplaneDeparture} />&nbsp;<InlineIcon icon={airplane} />
            &nbsp;Please fasten your seatbelts&nbsp;
            <InlineIcon icon={airplane} rotate="1" />&nbsp;<InlineIcon icon={airplaneArrival} />
            &nbsp;<InlineIcon icon={helicopter} hFlip />
          </p>
        </div>
      </header>
    </div>
  );
}

export default App;
