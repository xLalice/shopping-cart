import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Shop from "./components/Shop./Shop";
import Cart from "./components/Cart/Cart";
import "./App.scss"
import { useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
	const [cart, setCart] = useState([]);

	function addToCart(product){
		setCart(prevCart => [...prevCart, product]);
	}

	function changeQuantity(id, action) {
		setCart(prevCart =>
			prevCart.map(product => {
				if (product.uniqueId === id) {
					return {
						...product,
						quantity: action === "increment" ? product.quantity + 1 : Math.max(0, product.quantity - 1)
					};
				}
				return product;
			})
		);
	}

	return (
		<>
			<BrowserRouter basename="/">
				<Navbar cart={cart} />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route
						path="/shop"
						element={
							<Shop
								addToCart={addToCart}
								cart={cart}
								changeQuantity={changeQuantity}
							/>
						}
					/>
					<Route
						path="/cart"
						element={
							<Cart
								cart={cart}
								changeQuantity={changeQuantity}
							/>
						}
					/>
				</Routes>
			</BrowserRouter>
		</>
	)
}

export default App
