import React from 'react';
import './ContentBox.css';
import ProductContent from './ContentBoxCp/ProductBox';
import { productClassName } from '../libs/contentBox';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import PagenationContainer from './PagenationContainer';

export default function ContentBox() {
  const { filterContent, dataLoading, curPage, pageRow } = useSelector(
    (state: RootState) => state.searchInfo
  );

  return (
    <div className="content-wrapper">
      <div className="ContentContainer">
        <ProductContent data={productClassName} type={'TitleBox'} />
        {dataLoading ? (
          filterContent.length > 0 ? (
            filterContent
              .slice(
                (curPage - 1) * Number(pageRow),
                (curPage - 1) * Number(pageRow) + Number(pageRow)
              )
              .map((product) => (
                <ProductContent
                  key={product.id}
                  data={product}
                  type={'ProductBox'}
                />
              ))
          ) : (
            <div className="dataNone">검색결과가 존재하지 않습니다.</div>
          )
        ) : (
          <div>skelton</div>
        )}
      </div>

      {dataLoading && (
        <div>
          <PagenationContainer />
        </div>
      )}
    </div>
  );
}
