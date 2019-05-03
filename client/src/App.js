import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import styled from 'styled-components';

import background_img from './images/cool_background_2.png'
import HomePage from './components/pages/Homepage'
import CalendarPage from './components/pages/CalendarPage'
import GoalPage from './components/pages/GoalPage'





let PageContainer = styled.div`
    // border: solid black 20px;
    background-image: url(${background_img});
    background-size:     cover;       
    background-repeat:   no-repeat;
    background-position: center center;     
    width: 100vw;
    height: 100vw;
`


class App extends Component {
  render() {
    return (
      <PageContainer>
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/goal/:goalId" component={GoalPage} />
            <Route exact path="/calendar" component={CalendarPage} />

          </Switch>

        </Router>
      </PageContainer>
    );
  }
}

export default App;
