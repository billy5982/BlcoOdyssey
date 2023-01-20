import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './pages/Main';

function App() {
  useEffect(() => {
    // const api = async () => {
    //   const data = await fetch('/products?limit=100');
    //   const { products } = await data.json();
    //   console.log(products);
    // };
    // api();
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
