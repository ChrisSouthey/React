import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeCOntext';
import { Product, useCart } from '../context/CartContext';
import { useAppDispatch } from '../store/hooks';
import { addItem } from '../store/cartSlice';

export const Products: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const { theme } = useContext(ThemeContext)!;
    const { addToCart } = useCart();
    const dispatch = useAppDispatch();

    useEffect(() => {
        async function fetchProducts() {
            const res = await fetch('http://localhost:3000/products');
            setProducts(await res.json());
        }
        fetchProducts();
    }, []);

    return (
        <div className="App" style={{ color: theme.foreground }}>
            {products.map(product => (
                <div style={{ border: theme.border }} className="products" key={product.id}>
                    <img
                        className="productImg"
                        src={product.image}
                        alt={product.title}
                    />
                    <h2 className="productName">
                        <Link to={`/products/${product.id}`}>{product.title}</Link>
                    </h2>
                    <button
                        style={{ background: theme.foreground, color: theme.background }}
                        onClick={() => {
                            addToCart(product);
                            dispatch(addItem({ id: product.id, title: product.title }));
                        }}
                    >
                        Add to Cart
                    </button>
                </div>
            ))}
        </div>
    );
};