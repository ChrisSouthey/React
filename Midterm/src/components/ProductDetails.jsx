import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ThemeContext } from "../context/ThemeCOntext";
import { useContext } from "react";

export const ProductDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [products, setProduct] = useState(null);
    const context = useContext(ThemeContext);
    const theme = context?.theme || themes.light;

    useEffect(() => {
        const getProduct = async () => {
                const response = await fetch(`http://localhost:3000/products/${id}`);
                const data = await response.json();
                setProduct(data);
        };

        getProduct();
    }, [id]);

    if (!products) {
        return <div className="App">Loading product details...</div>;
    }

    return (
        <div style={{ color: theme.foreground }} className='productSingle'>
            <img className='productImgBig' src={products.image} alt={products.title} />
            <h1>{products.title}</h1>
            <h3>{products.category}</h3>
            <p>{products.description}</p>
            <button onClick={() => navigate(-1)} style={{ marginTop: '20px' }}>
                Go back
            </button>
        </div>
    );
};