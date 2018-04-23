import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

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
      textAlign: 'center',
      height: '100vh',
      background: 'pink'
    }

    return (
      <ClassRenderer>
        {style => (
          <main className="App">
            {this.header()}
            <div className={style(containerStyles)}>
            </div>
          </main>
        )}
      </ClassRenderer>
    );
  }
}

export default App;
