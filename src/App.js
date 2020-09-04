import React from 'react';
import './App.css';
import Home from './components/Home/Home';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import CountryDetail from './components/CountryDetail/CountryDetail';


const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/home" >
            <Home/>
          </Route>
          <Route path="/country/:countryName">
            <CountryDetail/>
          </Route>
          <Route exact path="/">
            <Home/>
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
};

export default App;