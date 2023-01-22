import React from 'react';
import { wordSlicing } from '../../libs/contentBox';
import { Titles } from '../../types/contentBox';
import './Product.css';
export default function ProductBox({
  data,
  type,
}: {
  data: Titles;
  type: string;
}) {
  const { id, title, brand, description, price, rating, stock } = data;
  const filterProductInfo = {
    id,
    title,
    brand,
    description,
    price,
    rating,
    stock,
  };

  return (
    <div className={type}>
      {Object.entries(filterProductInfo).map((el) => {
        if (el[0] === 'description') {
          // 상품내용일 경우 40자 이상이면 줄임표가 필요함.
          return (
            <div className={el[0]} key={el[0]}>
              {wordSlicing(el[1])}
            </div>
          );
        } else {
          return (
            <div className={el[0]} key={el[0]}>
              {el[1]}
            </div>
          );
        }
      })}
    </div>
  );
}
