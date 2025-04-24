import React from 'react'
import { UseStateDemo } from './components/UseStateDemo';
import UseEffectDemo from './components/UseEffectDemo';
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
        <Route index element={<UseStateDemo/>}/>
          <Route path="state-demo" element={<UseStateDemo />}/>
          <Route path="effect-demo" element={<UseEffectDemo />}>
            <Route path=":startingCount" element={<UseEffectDemo/>}/>
          </Route>
          <Route path="*" element={<div>RAHHHHH</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
