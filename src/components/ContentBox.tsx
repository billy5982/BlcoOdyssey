import React from 'react';
import './ContentBox.css';
import ProductContent from './ContentBoxCp/ProductBox';
import { productClassName } from '../libs/contentBox';

export default function ContentBox() {
  const data = {
    id: 1,
    title: 'iPhone 9',
    description: 'An apple mobile which is nothing like apple',
    price: 549,
    discountPercentage: 12.96,
    rating: 4.69,
    stock: 94,
    brand: 'Apple',
    category: 'smartphones',
    thumbnail: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
    images: [
      'https://i.dummyjson.com/data/products/1/1.jpg',
      'https://i.dummyjson.com/data/products/1/2.jpg',
      'https://i.dummyjson.com/data/products/1/3.jpg',
      'https://i.dummyjson.com/data/products/1/4.jpg',
      'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
    ],
  };

  return (
    <div className="ContentContainer">
      <ProductContent data={productClassName} type={'TitleBox'} />
      <ProductContent data={data} type={'ProductBox'} />
      <div>{'페이지네이션 버튼 위치'}</div>
    </div>
  );
}
