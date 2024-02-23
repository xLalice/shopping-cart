import { useEffect, useState } from "react";
import Card from "./Card";
import { SyncLoader } from "react-spinners";
import Navbar from "./Navbar";
import "./Shop.scss";

export default function Shop({cart, addToCart}){
    const [category, setCategory] = useState("all");
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((response) => {
                if (response.status >= 400) {
                    throw new Error("server error");
                }
                return response.json();
            })
            .then(response => setProducts(response))
            .catch(error => setError(error))
            .finally(() => setLoading(false));

        
    }, []);

    console.log(cart)

    let filteredProducts = [...products];

    switch(category){
        case "jewelry":
            filteredProducts = products.filter(product => product.category === "jewelery");
            break;
        case "men's clothing":
            filteredProducts = products.filter(product => product.category === "men's clothing");
            break;
        case "women's clothing":
            filteredProducts = products.filter(product => product.category === "women's clothing");
            break;
        default:
            break;
    }

    if (error) return <p>A network error was encountered</p>;
    if (loading) 
        return (
            <div className="loading">
                <SyncLoader />
            </div>
        );


    return (
        <>
            <Navbar />
            <div className="shop">
            
            <h1>Shop</h1>
            <label htmlFor="category">Choose a category:</label>
            <select name="category" id="category" onChange={(e) => setCategory(e.target.value)}>
                <option value="all">All</option>
                <option value="jewelry">Jewelry</option>
                <option value="men's clothing">Men's Clothing</option>
                <option value="women's clothing">Women's Clothing</option>
            </select>
            <div className="products">
                {filteredProducts.map(product => {
                    let isAdded = cart.some(item => item.id === product.id);
                    return (
                        <Card
                            key={product.id}
                            uniqueId={product.id}
                            name={product.title}
                            price={product.price}
                            url={product.image}
                            rating={product.rating.rate}
                            reviewCount={product.rating.count}
                            isAdded={isAdded}
                            addtoCart={addToCart}
                        />
                    )
                })}
            </div>
        </div>
        </>
        
    );
}