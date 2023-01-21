import React from 'react';
import './SearchInput.css';
import { InputProps } from '../../types/searchBox';

export default function SearchInput({
  value,
  setValue,
  clickFunc,
}: InputProps) {
  return (
    <input
      placeholder="검색어를 입력해주세요"
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
      }}
      onKeyUp={(e) => {
        if (e.key === 'Enter') {
          clickFunc();
        }
      }}
    />
  );
}
