import React from 'react';

import { Route, Routes } from 'react-router-dom';
import './App.css';
import useDataSet from './hooks/useDataSet';
import useFetch from './hooks/useFetch';
import Main from './pages/Main';

function App() {
  const [dataLoading] = useFetch('/products?limit=100');

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
