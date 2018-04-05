import React, { Component } from 'react';
import { createRenderer } from 'fela'
import { Provider } from 'react-fela'
import logo from './logo.svg';
import './App.css';

import seriesJson from './json.js'
import SeriesCard from './components/series-card.jsx'
import ClassRenderer from './components/classRenderer.js'

class App extends Component {

  header() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
    )
  }

  render() {
    const containerStyles = {
      padding: '60px',
      textAlign: 'center'
    }

    return (
      <ClassRenderer>
        {style => (
          <div className="App">
            {this.header()}
            <div className={style(containerStyles)}>
              {seriesJson.map((series) => {
                return <SeriesCard series={series} />
              })}
            </div>
          </div>
        )}
      </ClassRenderer>
    );
  }
}

export default App;
