import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';

const LOCAL_KEY = 'myapp_cartItems';

function loadCartItems() {
    try {
        const serialized = localStorage.getItem(LOCAL_KEY);
        return serialized ? JSON.parse(serialized) : [];
    } catch {
        return [];
    }
}

function saveCartItems(items: any[]) {
    try {
        localStorage.setItem(LOCAL_KEY, JSON.stringify(items));
    } catch { }
}

export const store = configureStore({
    reducer: { cart: cartReducer },
    preloadedState: {
        cart: { items: loadCartItems() }
    }
});

store.subscribe(() => {
    const items = store.getState().cart.items;
    saveCartItems(items);
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;