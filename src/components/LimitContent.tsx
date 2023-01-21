import React from 'react';
import './LimitContent.css';
import SelectBox from './SearchBoxCp/SelectBox';
export default function LimitContent() {
  const listObj = {
    10: 10,
    20: 20,
    50: 50,
  };
  return (
    <div className="limit-wrapper">
      <h5>검색된 데이터 : {'fetching Data'}</h5>
      <SelectBox listObj={listObj} init={'10'} />
    </div>
  );
}
