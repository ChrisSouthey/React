import React from 'react'
import { HomePage } from './components/Home';
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App';
import { Products } from './components/Products';
import { ProductDetails } from './components/ProductDetails';
import { ThemeProvider } from './context/ThemeCOntext.jsx';
import { Cart } from './components/Cart.tsx';
import { CartProvider } from './context/CartContext.js';
import { Provider } from 'react-redux';
import { store } from './store/store.ts';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <CartProvider>
          <Provider store={store}>
            <Routes>
              <Route path="/" element={<App />}>
                <Route index element={<HomePage />} />
                <Route path="home-page" element={<HomePage />} />
                <Route path="products" element={<Products />}>
                </Route>
                <Route path="cart" element={<Cart />} />
                <Route path="/products/:id" element={<ProductDetails />} />
                <Route path="*" element={<div>RAHHHHH</div>} />
              </Route>
            </Routes>
          </Provider>
        </CartProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
