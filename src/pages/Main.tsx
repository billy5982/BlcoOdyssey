import React from 'react';
import ContentBox from '../components/ContentBox';
import SearchBox from '../components/SearchBox';
import LimitContent from '../components/LimitContent';
import './Main.css';

export default function Main() {
  return (
    <div className="Main">
      <h3>상품 검색</h3>
      <SearchBox />
      <LimitContent />
      <ContentBox />
    </div>
  );
}
