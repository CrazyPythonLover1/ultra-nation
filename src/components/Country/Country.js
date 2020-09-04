import React from 'react';
import { Link } from 'react-router-dom';

const Country = (props) => {
    const {name, population,region, flag}= props.country
    const flagStyle = {height: '50px'}
    const countryStyle = {
        border: '3px solid tomato',
        margin: '20px 100px',
        padding: '5px'
    }
    return (
        <div style={countryStyle}>
            <h4> This is {name} </h4>
            
            <img style={flagStyle} src={flag} alt=""/>
            <p> Population: {population} </p>
            <p> Region: {region} </p>
            <Link to={`/country/${name}`}> Show Detail </Link>
            <button onClick={()=>props.handleAddCountry(props.country)} > Add country </button>
        </div>
    );
};

export default Country;