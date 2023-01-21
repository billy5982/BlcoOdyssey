import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes, useSearchParams } from 'react-router-dom';
import './App.css';
import useDataSet from './hooks/useDataSet';
import useFetch from './hooks/useFetch';
import Main from './pages/Main';
import { RootState } from './store/store';
function App() {
  const [dataLoading] = useFetch('/products?limit=100');
  const [searchParams, setSearchParams] = useSearchParams();
  const dataSet = useDataSet();

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
