import React from 'react';
import { Titles } from '../../types/contentBox';
import './Title.css';
export default function Title() {
  const titleArr: Titles = {
    itemNum: '상품번호',
    itemName: '상품명',
    brand: '브랜드',
    itemContent: '상품내용',
    price: '가격',
    rating: '평점',
    stock: '재고',
  };

  return (
    <div className="TitleBox">
      {Object.entries(titleArr).map((el) => (
        <div className={el[0]} key={el[0]}>
          {el[1]}
        </div>
      ))}
    </div>
  );
}
