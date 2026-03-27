import React from 'react';

const Card = ({country}) => {
    
    return (
        <div>
            <li className='card'>
                <img src={country.flags.svg} alt={"Land " + country} />
                <div className="infos">
                <h2>{country.name.common}</h2>
                <p>Hauptstadt: {country.capital?.[0]}</p>
                </div>
            </li>
        </div>
    );
};

export default Card;