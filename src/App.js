import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Country from './components/Country/Country';

function App() {
  const [countries, setCountries] = useState([])

  // load DATA using useEffect
  useEffect(()=>{
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res=>res.json())
    .then(data=>{
      setCountries(data);
      //data.map(country => console.log(country.name))
    } )
    .catch(error => console.log(error))
  },[])
  return (
    <div className="App">
      <h1> Countries Loaded: {countries.length} </h1>
      <ul>
        {
          countries.map(country => <Country name={country.name} >  </Country>)
        }
      </ul>
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
