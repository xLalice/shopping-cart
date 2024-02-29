import "./Quantity.scss"

export default function Quantity(props){

    return (
        <div className="quantity-button">
            <button onClick={() => props.changeQuantity(props.id, "decrement")}>-</button>
            <input value={props.value}  readOnly/>
            <button onClick={() => props.changeQuantity(props.id, "increment")}>+</button>
        </div>
    )
}