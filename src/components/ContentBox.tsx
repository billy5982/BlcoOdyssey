import React from 'react';
import './ContentBox.css';
import Title from './ContentBoxCp/Title';

export default function ContentBox() {
  return (
    <div className="ContentContainer">
      <Title />
      <div>{'페이지네이션 버튼 위치'}</div>
    </div>
  );
}
