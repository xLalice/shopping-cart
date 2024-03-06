import Quantity from "../Quantity/Quantity"
import Shop from "../Shop./Shop"
import { Link } from "react-router-dom"
import "./Cart.scss"

export default function Cart(props){
    const itemList = (
        props.cart.map(item => {
            return (
                <div className="cart-item" key={item.uniqueId}>
                    <div className="img-container">
                        <img src={item.img} />
                    </div>
                    <h2>{item.name}</h2>
                    <div className="control">
                        <h2>${item.price}</h2>
                        <Quantity id={item.uniqueId} value={item.quantity} changeQuantity={props.changeQuantity}/>
                        <button onClick={() => props.removeFromCart(item.uniqueId)}>Remove</button>
                    </div>
                   
                </div>
            )
        })
    )

    const totalPrice = props.cart.length === 0 ? 0 : props.cart.reduce((acc, product) => {
        console.log(typeof product.quantity);
        console.log(typeof product.price);
        const quantity = typeof product.quantity === 'number' ? product.quantity : 0;
        const price = typeof product.price === 'number' ? product.price : 0;
    
        return acc + (quantity * price);
    }, 0);

    const noItem = (
        <div className="message">
            <h1>Your cart is empty</h1>
            <button><Link to="/shop">Shop Now</Link></button>
        </div>
    )

    return (
        <div className="cart">
           { props.cart.length === 0 
           ? noItem
           : (<>
                <div className="heading">
                    <button onClick={props.checkout} className="checkout">Checkout</button>
                    <h2>{props.cart.length} items</h2>
                </div>
                
                {itemList}
                <h2>Total Price: ${totalPrice}</h2>
                </>)
            }

        </div>
        

    )
}