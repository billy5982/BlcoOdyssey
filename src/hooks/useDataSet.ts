import { filterData, filterKeyword } from './../libs/contentFilter';
import { RootState } from './../store/store';
import { useSelector, useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import React, { useEffect } from 'react';
import {
  setFilteringContent,
  setPages,
  setSearchInput,
} from '../store/reducer/searchInfo';

import { paramsObj } from '../libs/paramsObj';

// 전체인 데 상품명이 없을 경우 -> 그냥 원본 return
// 전체인 데 상품명이 있을 경우 -> for(let key in 제품(el)){if(el[key].includes(검색 인풋))}
export default function useDataSet() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { dataLoading, content, searchKind, searchContent, pageRow, curPage } =
    useSelector((state: RootState) => state.searchInfo);

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
        const pageKeyword = filterKeyword(searchParams, [
          'pageNum',
          'pageRow',
        ]) as (string | number)[];

        dispatch(
          setSearchInput({
            searchKind: keywordFilter[0] as string,
            searchContent: keywordFilter[1] as string,
          })
        );

        const data = filterData(content, keywordFilter);
        dispatch(setFilteringContent({ filterContent: [...data] }));

        dispatch(
          setPages({
            curPage: Number(pageKeyword[0]),
            pageRow: String(pageKeyword[1]),
          })
        );
        const limited = Math.ceil(data.length / Number(pageKeyword[1]));
        //
        if (
          !['productContent', 'brand', 'productName', 'all'].includes(
            keywordFilter[0] as string
          )
        ) {
          setSearchParams(paramsObj('all', searchContent, 1, pageRow));
        }
        // 주소 접근이 잘못됐을 때(RageRow)
        if (!isNaN(Number(pageKeyword[0])) && !isNaN(Number(pageKeyword[1]))) {
          if (limited < +pageKeyword[0] || +pageKeyword[0] <= 0) {
            setSearchParams(paramsObj(searchKind, searchContent, 1, pageRow));
          }
          if (!['10', '20', '50'].includes(pageKeyword[1] as string)) {
            setSearchParams(
              paramsObj(searchKind, searchContent, curPage, '10')
            );
          }
        } else {
          setSearchParams(paramsObj(searchKind, searchContent, 1, pageRow));
        }
      } else {
        dispatch(setFilteringContent({ filterContent: [...content] }));
      }
    }
  }, [searchParams, dataLoading]);
  return;
}
