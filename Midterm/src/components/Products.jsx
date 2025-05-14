import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from "../context/ThemeCOntext";
import { useContext } from "react";

export const Products = () => {
    const [products, setProducts] = useState([]);
    const context = useContext(ThemeContext);
    const theme = context?.theme || themes.light;

    useEffect(() => {
        const getProducts = async () => {
            const response = await fetch('http://localhost:3000/products');
            const data = await response.json();
            setProducts(data);
        };

        getProducts();
    }, []);


    return (
        <div style={{ color: theme.foreground }} className="App">
            {products.length > 0 ? (
                products.map((products) => (
                    <div className='products'>
                        <img className='productImg' src={products.image} alt={products.title} />
                        <div className='productText'>
                            <h2 className='productName'>
                                <Link to={`/products/${products.id}`}>{products.title}</Link>
                            </h2>
                        </div>
                    </div>
                ))
            ) : (
                <p>Loading products...</p>
            )}
        </div>
    );

};