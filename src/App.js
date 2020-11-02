import React from 'react';
import './App.css';
import Header from './Components/Header/Header'
import SystemList from './Page/SystemList'
import SystemInfo from './Page/SystemInfo'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  return (
    <Router>
      <Header />
      <div>
        <Switch>
          <Route 
          path="/" 
          exact
          component={SystemList} />
          <Route 
          path="/system/:id" 
          component={SystemInfo} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
