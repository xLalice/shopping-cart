import { Link } from "react-router-dom";
import "./Navbar.scss";
import { Outlet } from "react-router-dom";
import { useThemeProps } from "@mui/material";


export default function Navbar(props){
    return (
        <>
            <nav>
                <h1 className="logo"><Link to="/">PeRfEcTfIt</Link></h1>
                <Link to="shop">Shop</Link>
                <div className="cart-icon">
                    <Link to="/cart">
                        <img className="icon" alt="cart icon" src="/shopping-cart(1).png"></img>
                        {props.cart.length !== 0 && <div className="cart-count">{props.cart.length}</div>}
                    </Link>
                </div>
            </nav>
            <Outlet context={[]}/>
        </>
        


    )
}