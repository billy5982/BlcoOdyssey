import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  SearchSetting,
  ContentArr,
  PageRow,
  currentPage,
  Page,
} from '../../types/reduxState';
import { SearchBox, SearchInput, FilterContent } from '../../types/reduxState';

export const searchInfo = createSlice({
  name: 'searchInfo',
  initialState: {
    dataLoading: false,
    searchKind: 'all', // 검색하고자 하는 종류
    searchContent: '', // 검색하고자 하는 내용
    pageRow: '10', // 컨텐츠를 보고 싶은 갯수
    content: [], // 불러온 컨텐츠
    filterContent: [],
    curPage: 1, // 현재 페이지
  } as SearchSetting, // 필수로 타입 지정 안해도 되지만, 확실히 하기로 한다.
  // dispatch 함수
  reducers: {
    setSearchKind(state, action: PayloadAction<SearchBox>) {
      return { ...state, searchKind: action.payload.searchKind };
    },
    setSearchContent(state, action: PayloadAction<SearchInput>) {
      return { ...state, searchContent: action.payload.searchContent };
    },
    setPageRow(state, action: PayloadAction<PageRow>) {
      return { ...state, pageRow: action.payload.pageRow };
    },
    setContent(state, action: PayloadAction<ContentArr>) {
      return {
        ...state,
        dataLoading: action.payload.dataLoading,
        content: action.payload.content,
      };
    },
    setCurPage(state, action: PayloadAction<currentPage>) {
      return { ...state, curPage: action.payload.curPage };
    },
    setPages(state, action: PayloadAction<Page>) {
      return {
        ...state,
        curPage: action.payload.curPage,
        pageRow: action.payload.pageRow,
      };
    },
    setFilteringContent(state, action: PayloadAction<FilterContent>) {
      return { ...state, filterContent: action.payload.filterContent };
    },
  },
});

// 액션과 리듀서를 export 해준다. 이건 그냥 따라하면 된다.
export const {
  setSearchKind,
  setSearchContent,
  setPageRow,
  setContent,
  setCurPage,
  setFilteringContent,
  setPages,
} = searchInfo.actions;
export default searchInfo.reducer;
