import React from 'react';
import './LimitContent.css';
import SelectBox from './SearchBoxCp/SelectBox';
import { RootState } from '../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { setPageRow } from '../store/reducer/searchInfo';

export default function LimitContent() {
  const listObj = {
    10: 10,
    20: 20,
    50: 50,
  };
  const selectContent = useSelector(
    (state: RootState) => state.searchInfo.pageRow
  );
  const dispatch = useDispatch();
  return (
    <div className="limit-wrapper">
      <h5>검색된 데이터 : {'fetching Data'}</h5>
      <SelectBox
        listObj={listObj}
        init={selectContent}
        settingFunc={(category: string) => {
          dispatch(setPageRow({ pageRow: category }));
        }}
      />
    </div>
  );
}
