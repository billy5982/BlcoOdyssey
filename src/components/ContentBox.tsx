import React from 'react';
import './ContentBox.css';
import ProductContent from './ContentBoxCp/ProductBox';
import { productClassName } from '../libs/contentBox';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

export default function ContentBox() {
  const { filterContent, dataLoading } = useSelector(
    (state: RootState) => state.searchInfo
  );

  return (
    <div className="content-wrapper">
      <div className="ContentContainer">
        <ProductContent data={productClassName} type={'TitleBox'} />
        {dataLoading
          ? filterContent.map((product) => (
              <ProductContent
                key={product.id}
                data={product}
                type={'ProductBox'}
              />
            ))
          : null}
      </div>
      <div>{'페이지네이션 버튼 위치'}</div>
    </div>
  );
}
