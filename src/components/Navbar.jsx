import { Link } from "react-router-dom";
import "./Navbar.scss";


export default function Navbar(){
    return (
        <nav>
            <h1 className="logo">PeRfEcTfIt</h1>
            <Link to="shop">Shop</Link>
            <img className="icon" src="/search-interface-symbol.png"></img>
            <img className="icon" src="/shopping-cart(1).png"></img>
        </nav>


    )
}