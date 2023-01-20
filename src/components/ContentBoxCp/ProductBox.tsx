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
      {Object.entries(filterProductInfo).map((el) => (
        <div className={el[0]} key={el[0]}>
          {wordSlicing(el[1])}
        </div>
      ))}
    </div>
  );
}
