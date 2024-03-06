import "./Quantity.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'

export default function Quantity(props){

    return (
        <div className="quantity-button">
            <button onClick={() => props.changeQuantity(props.id, "decrement")}><FontAwesomeIcon icon={faMinus} /></button>
            <input value={props.value}  readOnly/>
            <button onClick={() => props.changeQuantity(props.id, "increment")}><FontAwesomeIcon icon={faPlus} /></button>
        </div>
    )
}