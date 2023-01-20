import React from 'react';
import SearchBox from '../components/SearchBox';
import './Main.css';

export default function Main() {
  return (
    <div className="Main">
      <h3>상품 검색</h3>
      <SearchBox />
    </div>
  );
}
