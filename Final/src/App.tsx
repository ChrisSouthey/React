import { HomePage } from './components/Home';
import './App.css';
import { Link, Outlet, Route, Routes, useNavigate } from 'react-router-dom';
import ToggleSwitch from './components/ToggleSwitch';
import { ThemeContext } from './context/ThemeCOntext';
import { useState, useEffect, useContext } from 'react';
import { useAppSelector } from './store/hooks';

function App() {

  const navigate = useNavigate();

  const handleShowHome = () => {
    navigate('home-page');
  };

  const handleShowProducts = () => {
    navigate('products');
  };

  const handleShowCart = () => {
    navigate('cart');
  };

  const count = useAppSelector(state =>
    state.cart.items.reduce((sum, i) => sum + i.quantity, 0)
  );

  const { toggleTheme, theme } = useContext(ThemeContext);

  return (
    <div className="App">
      <h2 className="title" style={{ color: theme.foreground }}>Guitar Central</h2>
      <button onClick={() => handleShowHome()} className="button">
        Home
      </button>
      <button onClick={() => handleShowProducts()} className="button">
        Guitars
      </button>
      <button onClick={() => handleShowCart()} className="button">
        Cart {count > 0 && `(${count})`}
      </button>
      <ToggleSwitch onToggle={toggleTheme}></ToggleSwitch>


      <Outlet />
    </div>
  );
}

export default App;
