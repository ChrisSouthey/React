import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartState {
    items: { id: number; title: string; quantity: number }[];
}

const initialState: CartState = { items: [] };

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<{ id: number; title: string }>) => {
            const existing = state.items.find(i => i.id === action.payload.id);
            if (existing) {
                existing.quantity++;
            } else {
                state.items.push({ ...action.payload, quantity: 1 });
            }
        },
        clearCartCount: state => {
            state.items = [];
        }
    }
});

export const { addItem, clearCartCount } = cartSlice.actions;
export default cartSlice.reducer;
