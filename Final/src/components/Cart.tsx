import React, { useState, useContext } from 'react';
import { useCart } from '../context/CartContext';
import { ThemeContext, themes } from '../context/ThemeCOntext';
import { ConfirmModal } from '../components/ConfirmModal';
import { clearCartCount } from '../store/cartSlice';
import { useAppDispatch } from '../store/hooks';


export const Cart: React.FC = () => {
    const { cartItems, clearCart } = useCart();
    const { theme = themes.light } = useContext(ThemeContext)!;
    const [showModal, setShowModal] = useState(false);

    const totalPrice = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    const handleCheckoutClick = () => setShowModal(true);
    const dispatch = useAppDispatch();
    const onDismissModal = () => setShowModal(false);
    const handleConfirm = () => {
        clearCart();
        dispatch(clearCartCount());
        setShowModal(false);
    };

    return (
        <div className="cart-page">
            <h1 style={{ color: theme.foreground }}>Your Cart</h1>

            <button
            className="checkoutBtn"
                style={{ background: theme.foreground, color: theme.background }}
                onClick={handleCheckoutClick}>
                Check Out
            </button>

            {showModal && (
                <ConfirmModal dismissModal={onDismissModal} confirmModal={handleConfirm} />
            )}

            {cartItems.length === 0 ? (
                <p className="cartEmpty" style={{ color: theme.foreground }}>Your cart is empty...</p>
            ) : (
                <div className="cartItems">
                    {cartItems.map(item => (
                        <div key={item.id} className="cartItem" style={{ border: theme.border}}>
                            <img
                                className="itemImage"
                                src={item.image}
                                alt={item.title}
                            />
                            <div className="itemDetails">
                                <h2
                                    className="itemTitle"
                                    style={{ color: theme.foreground }}
                                >
                                    {item.title}
                                </h2>
                                <p
                                    className="itemQuantity"
                                    style={{ color: theme.foreground }}
                                >
                                    Quantity: {item.quantity}
                                </p>
                                <p
                                    className="itemPrice"
                                    style={{ color: theme.foreground }}
                                >
                                    Price: {item.price}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};


