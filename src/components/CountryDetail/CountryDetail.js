import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';


const CountryDetail = () => {
    const {countryName} = useParams();

    const [country, setCountry] = useState([]);
   
    useEffect(()=>{
        
        const url = `https://restcountries.eu/rest/v2/name/${countryName}`
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setCountry(data[0]);
        })
    },[])
    return (
        <div>
            <h1> Country Details: </h1>
            <h1> Country Name: {country.name} </h1>
            <h2> Capital: {country.capital} </h2>
            <h2> Region: {country.region} </h2>
            <h2> Sub Region: {country.subregion}</h2>
            <h3> Calling Code: {country.callingCodes} </h3>
           
            
        </div>
    );
};

export default CountryDetail;