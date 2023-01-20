import React from 'react';
import './SearchBox.css';
import SearchBtn from './SearchBoxCp/SearchBtn';
import SearchInput from './SearchBoxCp/SearchInput';
import SelectBox from './SearchBoxCp/SelectBox';
import { SearchList } from '../types/searchBox';
export default function SearchBox() {
  const listObj: SearchList = {
    all: '전체',
    productName: '상품명',
    brand: '브랜드',
    productContent: '상품 내용',
  };
  return (
    <div className="SearchBox">
      <SelectBox listObj={listObj} init={'all'} />
      <SearchInput />
      <SearchBtn />
    </div>
  );
}
