import PropTypes from "prop-types";
import "./Card.scss"
import { Rating } from "@mui/material";
import Quantity from "../Quantity/Quantity";

export default function Card(props){

    function handleClick(){
        props.addToCart({
            uniqueId: props.uniqueId,
            img: props.url,
            name: props.name,
            price: props.price,
            quantity: 1,
        });
    }

    return (
        <div className="card">
            <div className="image-container">
                <img src={props.url} />
            </div>
            <h2 className="name">{props.name}</h2>
            <div className="review">
                <Rating name="read-only" value={props.rating} precision={0.5} readOnly />
                <p>{`(${props.reviewCount})`}</p>
            </div>
            
            <h2 className="price">₱{props.price}</h2>
            { props.isAdded
                ? <Quantity value={props.quantity} id={props.uniqueId} changeQuantity={props.changeQuantity} />
                : <button className="addButton" onClick={handleClick}><img className="cart-icon" src="shopping-cart(1).png"/><span>Add to Cart</span></button>}
        </div>
    )
}

Card.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired
}