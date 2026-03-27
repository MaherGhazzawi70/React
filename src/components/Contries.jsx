import React, { useEffect, useState } from 'react';
import axios from "axios";
import Card from './Card';
const Contries = () => {
    const [data,setData] = useState([])
    useEffect(() =>{
     axios.get("https://restcountries.com/v3.1/all?fields=name,capital,currencies,flags")
    .then((res) => {
      const filtered = res.data.filter(
        country => country.name.common !== "Israel"
      );
      setData(filtered);
    })
    },[])
    return (
        <div className="countries">
            <h1>Countries</h1>
            <ul>
                {data.map((country,index) => 
                <Card key={index} country={country}/>)}
            </ul>
        </div>
    );
};

export default Contries;