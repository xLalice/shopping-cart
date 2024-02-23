import { useEffect, useState } from "react";
import Card from "./Card";
import "./Home.scss";

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
                <button>Shop Now</button>
            </header>
            <main>
                <h1>Featured Items</h1>
                <div className="featured">
                    {featured && featured.map(item => {
                        return (
                            <Card 
                                name={item.title}
                                price={item.price}
                                url={item.image}
                            ></Card>
                        )
                    }) }
                </div>

            </main>

        </>
    )
}