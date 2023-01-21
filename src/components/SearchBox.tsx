import React from 'react';
import './SearchBox.css';
import SearchBtn from './SearchBoxCp/SearchBtn';
import SearchInput from './SearchBoxCp/SearchInput';
import SelectBox from './SearchBoxCp/SelectBox';
import { SearchList } from '../types/searchBox';
import { RootState } from '../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchContent, setSearchKind } from '../store/reducer/searchInfo';

export default function SearchBox() {
  const listObj: SearchList = {
    all: '전체',
    productName: '상품명',
    brand: '브랜드',
    productContent: '상품 내용',
  };
  const { searchKind: selectContent, searchContent } = useSelector(
    (state: RootState) => state.searchInfo
  );
  const setValue = (el: string) => {
    dispatch(setSearchContent({ searchContent: el }));
  };

  const dispatch = useDispatch();
  return (
    <div className="SearchBox">
      <SelectBox
        listObj={listObj}
        init={selectContent}
        settingFunc={(category: string) => {
          dispatch(setSearchKind({ searchKind: category }));
        }}
      />
      <SearchInput value={searchContent} setValue={setValue} />
      <SearchBtn />
    </div>
  );
}
