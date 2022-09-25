import ItemCount from "../Products/ItemCount";
const ItemListContainer = (props) => {

    const handleAdd = (cantidad) => {
        alert(`Add to card: ${cantidad}`);
    }

    return (
        <>
        <p> ¡Hello, {props.greeting}! </p>
        <hr/>
        <ItemCount
            initial={1}
            stock={10}
            handleAdd={handleAdd}
            number={1}
            description="coffe caramel"/>
        <hr/>
        <ItemCount
            initial={1}
            stock={5}
            handleAdd={handleAdd}
            number={2}
            description="coffe caramel"/>
        <hr/>  
        <ItemCount
            initial={1}
            stock={10}
            handleAdd={handleAdd}
            number={3}
            description="coffe caramel"/>
        <hr/>  
        <ItemCount
            initial={1}
            stock={10}
            handleAdd={handleAdd}
            number={4}
            description="coffe caramel"/>
        <hr/>  
        <ItemCount
            initial={1}
            stock={10}
            handleAdd={handleAdd}
            number={5} 
            description="coffe caramel"/>          
        </>      
    );
}

export default ItemListContainer;

//usar un useEffect para promos