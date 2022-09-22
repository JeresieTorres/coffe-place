import { useState } from 'react';
const Coffe = ({number, description}) => {

    const [buy, setBuy] = useState(0);
    
    const handleBuy = () =>{
        setBuy (buy+1)
    } 

    return (
        <>
        <p>Coffe n° {number}</p>  
        <button onClick={handleBuy} >+</button> {buy} buy a coffe
        {/* <button>-</button> y le hago un onClick?*/}
        <p>Description: {description} </p>
        </>
    );
}

export default Coffe; 