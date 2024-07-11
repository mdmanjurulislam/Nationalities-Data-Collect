import React, { useState } from 'react';

const Card = () => {

    const [country,setCountry] = useState([]);
    let url ="https://restcountries.com/v3.1/all";
    fetch(url)
        .then(res => res.json())
        .then(data => setCountry(data.slice(0, 10)));

    

    return (
        <div>
            <h1>This is my Card Component</h1>
            <div>
                {
                    country.map(cntr => <li>{cntr.name.common}</li>)
                }
            </div>
        </div>
    );
};

export default Card;