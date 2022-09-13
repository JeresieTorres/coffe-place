import "./CartWidget.css"
import cart from '../../Icono/cart.svg'

const CartWidget = () => {
    return (
        <>
        <img className='cart' src= {cart} />
        <span className="cantidad">5</span>
        </>
    );
}

export default CartWidget;