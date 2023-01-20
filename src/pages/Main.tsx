import React from 'react';
import ContentBox from '../components/ContentBox';
import SearchBox from '../components/SearchBox';
import './Main.css';

export default function Main() {
  return (
    <div className="Main">
      <h3>상품 검색</h3>
      <SearchBox />
      <h5>검색된 데이터 : {'fetching Data'}</h5>
      <ContentBox />
    </div>
  );
}
