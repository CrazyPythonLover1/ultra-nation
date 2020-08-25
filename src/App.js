import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Country from './components/Country/Country';
import Cart from './components/Cart/Cart';

function App() {
  const [countries, setCountries] = useState([])
  const [cart, setCart] = useState([])

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

  // Way to add click handler
  // function handleAddCountry(country){
  //   console.log('Country added',country)
  // }

  const handleAddCountry = (country)=>{ 
    const newCart = [...cart, country];
    setCart(newCart);
  }

  return (
    <div className="App">
      <h1> Countries Loaded: {countries.length} </h1>
      <p> Country Added: {cart.length}  </p>
      <Cart cart={cart} > </Cart>
      <ul>
        {
          countries.map(country => <Country country={country} handleAddCountry={handleAddCountry} cart={cart} key={country.alpha3Code} >  </Country>)
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
