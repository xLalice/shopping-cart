import Quantity from "../Quantity/Quantity"

export default function Cart(props){
    const itemList = (
        props.cart.map(item => {
            return (
                <div className="cart-item" key={item.uniqueId}>
                    <img src={item.img} />
                    <h2>{item.name}</h2>
                    <h2>${item.price}</h2>
                    <Quantity id={item.uniqueId} value={item.quantity} changeQuantity={props.changeQuantity}/>
                    <button>Remove</button>
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

    return (
        <div>
            <h2>Shopping Cart</h2>
            <h2>{props.cart.length} items</h2>
            {itemList}
            <h2>{totalPrice}</h2>
        </div>
        

    )
}