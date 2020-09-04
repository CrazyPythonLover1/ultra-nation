import React, { useState, useEffect } from 'react';

import Country from '../Country/Country';
import Cart from '../Cart/Cart';


const Home = () => {
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
        <div>
            <h1> Countries Loaded: {countries.length} </h1>
            <p> Country Added: {cart.length}  </p>
            <Cart cart={cart} > </Cart>
            <ul>
                {
                countries.map(country => <Country country={country} handleAddCountry={handleAddCountry} cart={cart} key={country.alpha3Code} >  </Country>)
                }
            </ul>
        </div>
    );
};

export default Home;