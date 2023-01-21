import e from 'express';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurPage } from '../store/reducer/searchInfo';
import { RootState } from '../store/store';

export default function PagenationContainer() {
  const { filterContent, pageRow, curPage } = useSelector(
    (state: RootState) => state.searchInfo
  );
  const dispatch = useDispatch();

  const pageChaning = (pageNum: number) => {
    dispatch(setCurPage({ curPage: pageNum }));
  };

  const [currPage, setCurrPage] = useState(curPage);
  const firstNum = currPage - (currPage % 5) + 1;
  const lastNum = currPage - (currPage % 5) + 5;
  const [pageList, setPageList] = useState(4);
  const numPages = Math.ceil(filterContent.length / Number(pageRow));

  useEffect(() => {
    if (numPages > 4 && numPages > 0) {
      setPageList(4);
    } else if (numPages - 1 > 0) {
      setPageList(numPages - 1);
    } else if (numPages - 1 <= 0) {
      setPageList(0);
    }
  }, [filterContent]);

  return (
    <div>
      <div>
        <button
          onClick={() => {
            pageChaning(curPage - 1);
            setCurrPage(curPage - 2);
          }}
          disabled={curPage === 1}
        >
          &lt;
        </button>
        <button onClick={() => pageChaning(firstNum)}>{firstNum}</button>
        {Array(pageList)
          .fill(false)
          .map((_, i) => {
            if (i <= 2) {
              return (
                <button
                  // border="true"
                  key={i + 1}
                  onClick={() => {
                    pageChaning(firstNum + 1 + i);
                  }}
                  // aria-current={page === firstNum + 1 + i ? 'page' : null}
                >
                  {firstNum + 1 + i}
                </button>
              );
            } else if (i >= 3) {
              return (
                <button
                  // border="true"
                  key={i + 1}
                  onClick={() => pageChaning(lastNum)}
                  // aria-current={page === lastNum ? 'page' : null}
                >
                  {lastNum}
                </button>
              );
            }
          })}
        <button
          onClick={() => {
            pageChaning(curPage + 1);
            setCurrPage(curPage);
          }}
          disabled={curPage === numPages}
        >
          &gt;
        </button>
      </div>
    </div>
  );
}
