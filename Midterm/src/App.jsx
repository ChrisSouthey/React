import { HomePage } from './components/Home';
import './App.css';
import { Link, Outlet, Route, Routes, useNavigate } from 'react-router-dom';
import ToggleSwitch from '../../neit-dark-mode-starter/src/components/ToggleSwitch';
import { ThemeContext } from './context/ThemeCOntext';
import { useState, useEffect, useContext } from 'react';

function App() {

  const navigate = useNavigate();

  const handleShowHome = () => {
      navigate('home-page');
  };

  const handleShowProducts = () => {
    navigate('products');
  };

  const { toggleTheme, theme } = useContext(ThemeContext);

  return (
    <div className="App">
      <button onClick={() => handleShowHome()} className="button">
        Home
      </button>
      <button onClick={() => handleShowProducts()} className="button">
        Products
      </button>
      <ToggleSwitch onToggle={toggleTheme}></ToggleSwitch>
      
      
      <Outlet />
    </div>
  );
}

export default App;
