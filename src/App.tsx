import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import useFetch from './hooks/useFetch';
import Main from './pages/Main';
import { RootState } from './store/store';
function App() {
  const test = useSelector((state: RootState) => state.searchInfo);
  const [dataLoading] = useFetch('/products?limit=100');

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
