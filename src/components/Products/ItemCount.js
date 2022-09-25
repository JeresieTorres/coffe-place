import { useState } from 'react';
const ItemCount = ({number, description, handleAdd, initial, stock}) => {
    const [buy, setBuy] = useState(initial);

    const handleMenos = () =>{
        if (buy > initial){
            setBuy (buy-1)
        }
    }
    
    const handleMas = () =>{
        if (buy < stock){
            setBuy (buy+1)
        }
    } 

    return (
        <>
        <p>Coffe n° {number}</p>
        <button onClick={handleMas} >+</button> {buy} buy a coffe
        <button onClick={handleMenos}>-</button> 
        <hr/>
        <button onClick={ () => handleAdd(buy) } >Add to card</button>        
        <p>Description: {description} </p>
        </>
    );
}

export default ItemCount; 