import React, { Component } from 'react';
import './App.css';
import { store } from './stores';
import biteApple from './actions';

class App extends Component {
  constructor(props) {
    super(props);

    this.handleBtnClick = this.handleBtnClick.bind(this);
  }

  handleBtnClick(e) {
    store.dispatch(biteApple());
  }

  isAppleEaten() {
    return store.getState().nBite === 6;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {!this.isAppleEaten() &&
            <img className={`App-logo apple-bite-${ store.getState().nBite }`} alt="Apple"/>
          }
          {this.isAppleEaten() &&
            <a href="https://www.linkedin.com/in/laodiego/">
              <img className="link-linkedin" alt="LinkedIn logo"/>
            </a>
          }
          <button className="btn-bite"><img className="btn-bite" alt="Button" onClick={ this.handleBtnClick }/></button>
        </header>
      </div>
    );
  }
}

export default App;
