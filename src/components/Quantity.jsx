export default function Quantity(props){
    return (
        <div className="quantity-button">
            <button onClick={props.decrement}>-</button>
            <input type="number" value={1} />
            <button onClick={props.increment}>+</button>
        </div>
    )
}