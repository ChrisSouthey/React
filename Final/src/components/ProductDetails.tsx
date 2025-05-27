import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ThemeContext } from "../context/ThemeCOntext";
import { useContext } from "react";
import { useCart } from '../context/CartContext';
import { useAppDispatch } from '../store/hooks';
import { addItem } from '../store/cartSlice';

export const ProductDetails: React.FC = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [products, setProduct] = useState(null);
    const context = useContext(ThemeContext);
    const theme = context?.theme || themes.light;
    const dispatch = useAppDispatch();

    useEffect(() => {
        const getProduct = async () => {
            const response = await fetch(`http://localhost:3000/products/${id}`);
            const data = await response.json();
            setProduct(data);
        };

        getProduct();
    }, [id]);

    const { addToCart } = useCart();

    if (!products) {
        return <div className="App">Loading guitar details...</div>;
    }

    const handleAddToCart = () => {
        addToCart(products);
        dispatch(addItem({ id: product.id, title: product.title }));
    };

    return (
        <div style={{ color: theme.foreground }} className='productSingle'>
            <img className='productImgBig' src={products.image} alt={products.title} />
            <h1>{products.title}</h1>
            <h3>{products.brand}</h3>
            <p>{products.description}</p>
            <button onClick={() => navigate(-1)} style={{ marginTop: '20px', background: theme.foreground, color: theme.background }}>
                Go back
            </button>
            <button style={{ background: theme.foreground, color: theme.background, marginLeft: '20px' }} onClick={() => handleAddToCart()}>Add to Cart</button>
        </div>
    );
};