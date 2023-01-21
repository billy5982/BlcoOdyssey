import React from 'react';
import './LimitContent.css';
import SelectBox from './SearchBoxCp/SelectBox';
import { RootState } from '../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { setPageRow } from '../store/reducer/searchInfo';
import { useSearchParams } from 'react-router-dom';
import { paramsObj } from '../libs/paramsObj';

export default function LimitContent() {
  const listObj = {
    10: 10,
    20: 20,
    50: 50,
  };

  const [searchParams, setSearchParams] = useSearchParams();
  const { filterContent } = useSelector((state: RootState) => state.searchInfo);
  const {
    searchKind,
    searchContent,
    pageRow: selectContent,
  } = useSelector((state: RootState) => state.searchInfo);

  const recordCnt = (row: string) => {
    const curPage = 1;
    setSearchParams(paramsObj(searchKind, searchContent, curPage, row));
  };

  const dispatch = useDispatch();

  return (
    <div className="limit-wrapper">
      <h5>검색된 데이터 : {filterContent.length} 개</h5>
      <SelectBox
        listObj={listObj}
        init={selectContent}
        settingFunc={(category: string) => {
          dispatch(setPageRow({ pageRow: category }));
          recordCnt(category);
        }}
      />
    </div>
  );
}
