import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { paramsObj } from '../libs/paramsObj';
import { RootState } from '../store/store';
import './PagenationContainer.css';
export default function PagenationContainer() {
  const { searchContent, searchKind, filterContent, pageRow, curPage } =
    useSelector((state: RootState) => state.searchInfo);
  const [searchParams, setSearchParams] = useSearchParams();

  const [currPage, setCurrPage] = useState(curPage);
  const firstNum = currPage - (currPage % 5);

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
    setCurrPage(curPage - 1);
  }, [filterContent, searchParams]);

  return (
    <div>
      <div>
        <button
          className="pgBtn"
          onClick={() => {
            setSearchParams(
              paramsObj(searchKind, searchContent, curPage - 1, pageRow)
            );
          }}
          disabled={curPage <= 1}
        >
          &lt;
        </button>
        <button
          className={firstNum + 1 === curPage ? 'pgBtn active' : 'pgBtn'}
          onClick={() => {
            setSearchParams(
              paramsObj(searchKind, searchContent, firstNum + 1, pageRow)
            );
          }}
        >
          {firstNum + 1}
        </button>
        {Array(pageList)
          .fill(false)
          .map((_, i) => {
            return (
              <button
                className={
                  i + firstNum + 2 === curPage ? 'pgBtn active' : 'pgBtn'
                }
                key={i + 1}
                onClick={() => {
                  setSearchParams(
                    paramsObj(
                      searchKind,
                      searchContent,
                      firstNum + i + 2,
                      pageRow
                    )
                  );
                }}
              >
                {firstNum + i + 2}
              </button>
            );
          })}
        <button
          className="pgBtn"
          onClick={() => {
            setSearchParams(
              paramsObj(searchKind, searchContent, curPage + 1, pageRow)
            );
          }}
          disabled={curPage >= numPages || pageList <= 0}
        >
          &gt;
        </button>
      </div>
    </div>
  );
}
