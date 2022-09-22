import Coffe from "../Products/Coffe";
const ItemListContainer = (props) => {
    return (
        <>
        <p>
            ¡Hello, {props.greeting}!
        </p>
        <hr/>
        <Coffe 
            number={1}
            description="coffe caramel"/>
        <hr/>
        <Coffe
            number={2}
            description="coffe caramel"/>
        <hr/>  
        <Coffe
            number={3}
            description="coffe caramel"/>
        <hr/>  
        <Coffe
            number={4}
            description="coffe caramel"/>
        <hr/>  
        <Coffe
            number={5} 
            description="coffe caramel"/>          
        </>      
    );
}

export default ItemListContainer;