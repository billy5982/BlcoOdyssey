import React from 'react';
import './SearchBox.css';
import SearchBtn from './SearchBoxCp/SearchBtn';
import SearchInput from './SearchBoxCp/SearchInput';
import SelectBox from './SearchBoxCp/SelectBox';

export default function SearchBox() {
  return (
    <div className="SearchBox">
      <SelectBox />
      <SearchInput />
      <SearchBtn />
    </div>
  );
}
