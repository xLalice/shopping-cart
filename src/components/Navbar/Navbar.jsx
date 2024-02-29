import { Link } from "react-router-dom";
import "./Navbar.scss";
import { Outlet } from "react-router-dom";


export default function Navbar(){
    return (
        <>
            <nav>
                <h1 className="logo"><Link to="/">PeRfEcTfIt</Link></h1>
                <Link to="shop">Shop</Link>
                <img className="icon" alt="search icon" src="/search-interface-symbol.png"></img>
                <Link to="cart"><img className="icon" alt="cart icon" src="/shopping-cart(1).png"></img></Link>
            </nav>
            <Outlet context={[]}/>
        </>
        


    )
}