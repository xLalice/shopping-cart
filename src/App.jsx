import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Shop from "./components/Shop";
import "./App.scss"
import { useState } from "react";

function App() {
	const [cart, setCart] = useState([]);

	function addToCart(product){
		setCart(prevCart => [...prevCart, product]);
	}

	return (
	<div>
		<Navbar/>
		<Home/>
		<Shop addToCart={addToCart} cart={cart} />
	</div>
	)
}

export default App
