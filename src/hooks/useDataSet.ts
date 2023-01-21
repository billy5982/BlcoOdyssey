import { filterData, filterKeyword } from './../libs/contentFilter';
import { RootState } from './../store/store';
import { useSelector, useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import React, { useEffect } from 'react';
import { setFilteringContent } from '../store/reducer/searchInfo';
import { Titles as Product } from '../types/contentBox';

// 전체인 데 상품명이 없을 경우 -> 그냥 원본 return
// 전체인 데 상품명이 있을 경우 -> for(let key in 제품(el)){if(el[key].includes(검색 인풋))}
export default function useDataSet() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { dataLoading, content } = useSelector(
    (state: RootState) => state.searchInfo
  );

  const dispatch = useDispatch();
  // 정렬 데이터는 카테고리랑 이름으로만, 해당 데이터를 정제해서 배열안에 넣어두고
  // 페이지 네이션 관련 기능은 따로 제작하기
  useEffect(() => {
    if (dataLoading) {
      if (searchParams.get('category')) {
        const keywordFilter = filterKeyword(searchParams, [
          'category',
          'searchContent',
        ]);
        const data = filterData(content, keywordFilter);
        dispatch(setFilteringContent({ filterContent: [...data] }));
      } else {
        dispatch(setFilteringContent({ filterContent: [...content] }));
      }
    }
  }, [searchParams, dataLoading]);
  return;
}
