 import { useState } from 'react';
import './Country.css'
const Country = ({country}) => {
    const {name, flags, cca3, area, population} = country;
    const [visited, setVisited] = useState(false);
    const handleVisited = () =>{
        setVisited(true);
    }
    return (
        <div className='country'>
            <h3>Name {name?.common}</h3>
            <img src={flags.png} alt="" />
             <p>code: {cca3}</p>
             <p>area: {area}</p>
             <p>population: {population}</p>
             <button onClick={handleVisited}>visited:</button>
             {visited ? 'i have visited this country' : 'i want to visit'}
         </div>
    );
};

export default Country;