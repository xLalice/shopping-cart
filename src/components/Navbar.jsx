import "./Navbar.scss"

export default function Navbar(){
    return (
        <nav>
            <img className="logo" src="/logo.png" ></img>
            <a>Shop</a>
            <img className="icon" src="/search.png"></img>
            <img className="icon" src="/shopping-cart.png"></img>
        </nav>


    )
}