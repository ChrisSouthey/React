import { HomePage } from './components/Home';
import './App.css';
import { Link, Outlet, Route, Routes, useNavigate } from 'react-router-dom';

function App() {

  const navigate = useNavigate();

  const handleShowHome = () => {
      navigate('home-page');
  };

  const handleShowProducts = () => {
    navigate('products');
  };

  

  return (
    <div className="App">
      <button onClick={() => handleShowHome()} className="button">
        Home
      </button>
      <button onClick={() => handleShowProducts()} className="button">
        Products
      </button>
      
      <Outlet />
    </div>
  );
}

export default App;
