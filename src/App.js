import React, { Component } from 'react';
import './App.css';
import MainContainer from './MainContainer';


import { Route, Switch } from 'react-router-dom';

const the404 = () => {
  return(
    <div>
      Page 404
    </div>
    )
}
class App extends Component {
  render() {
    return (
      <div className='App'>
        <Switch>
          <Route exact path='/' component={MainContainer}/>
          <Route component={the404}/>
        </Switch>
      </div>
    );
  }
}

export default App;
