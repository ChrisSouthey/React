import { UseStateDemo } from './components/UseStateDemo';
import UseEffectDemo from './components/UseEffectDemo';
import './App.css';
import { Link, Outlet, Route, Routes, useNavigate } from 'react-router-dom';

function App() {

  const navigate = useNavigate();

  const handleShowUseStateDemo = () => {
    navigate('state-demo')
  };

  const handleShowUseEffectDemo = () => {
    navigate('effect-demo')
  };

  return (
    <div className="App">
      {/*<Link to="state-demo">useState Demo</Link>*/}
      <button onClick={() => handleShowUseStateDemo()} className="button">
        UseState Demo
      </button>
      <button onClick={() => handleShowUseEffectDemo()} className="button">
        UseEffect Demo
      </button>
      <Outlet />
    </div>
  );
}

export default App;
