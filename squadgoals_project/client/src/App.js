import React, { Component } from 'react';
import './App.css';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import styled from 'styled-components';

import HomePage from './components/Homepaage'



class App extends Component {
  render() {
    return (
      <div>
        <h1> Here's a front end...</h1>
        <HomePage/>
        {/* <Router>
          <Switch>
            <Route exact path="/" component={LocationImagesContainer} />
            <Route exact path="/america" component={HomePage} />
            <Route exact path="/america/tshirts" component={TShirt} />
            <Route exact path="/america/blouses" component={Blouses} />
            <Route exact path="/america/:category" component={ShoppingPage} />
          </Switch>

        </Router> */}
      </div>
    );
  }
}

export default App;
