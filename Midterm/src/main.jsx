import React from 'react'
import { HomePage } from './components/Home';
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App';
import { Products } from './components/Products';
import { ProductDetails } from './components/ProductDetails';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
        <Route index element={<HomePage/>}/>
          <Route path="home-page" element={<HomePage />}/>
          <Route path="products" element={<Products />}>
          </Route>
          <Route path="/products/:id" element={<ProductDetails/>} />
          <Route path="*" element={<div>RAHHHHH</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
