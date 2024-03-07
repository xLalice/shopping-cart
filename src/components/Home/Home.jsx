import { useEffect, useState } from "react";
import "./Home.scss";
import { Link } from "react-router-dom";

export default function Home(){

    const [featured, setFeatured] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/')
            .then(res => res.json())
            .then(res => setFeatured(res));
            
    }, [])

    return (
        <>
            <header>
                <h1>necessary & complementary</h1>
                <button><Link to="shop">Shop Now</Link></button>
            </header>

        </>
    )
}