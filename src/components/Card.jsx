import PropTypes from "prop-types";
import "./Card.scss"
import { Rating } from "@mui/material";
import { useState } from "react";
import Quantity from "./Quantity";

export default function Card(props){

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
                ? <Quantity/>
                : <button className="addButton" onClick={() => props.addToCart(props)}><img className="cart-icon" src="shopping-cart(1).png"/><span>Add to Cart</span></button>}
        </div>
    )
}

Card.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired
}