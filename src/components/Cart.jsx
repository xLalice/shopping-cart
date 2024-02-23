import Quantity from "./Quantity"

export default function Cart(props){
    const itemList = (
        props.items.map(item => {
            return (
                <>
                    <img src={item.img} />
                    <h2>{item.name}</h2>
                    <h2>{item.price}</h2>
                    <Quantity/>
                    <button>Remove</button>
                </>
            )
        })
    )

    const totalPrice = props.items.reduce((acc, product) => {
        return acc + (product.quantity * product.price)
    })

    return (
        <div>
            <h2>Shopping Cart</h2>
            <h2>{props.items.length} items</h2>
            {itemList}
            <h2>{totalPrice}</h2>
        </div>
        

    )
}