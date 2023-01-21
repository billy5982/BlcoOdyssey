import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SearchSetting } from '../../types/reduxState';
import { SearchBar } from '../../types/reduxState';

export const searchInfo = createSlice({
  name: 'user',
  initialState: {
    searchKind: 'all', // 검색하고자 하는 종류
    searchContent: '', // 검색하고자 하는 내용
    showNum: 10, // 컨텐츠를 보고 싶은 갯수
    content: null, // 불러온 컨텐츠
    curPage: 1, // 현재 페이지
  } as SearchSetting, // 필수로 타입 지정 안해도 되지만, 확실히 하기로 한다.
  // dispatch 함수
  reducers: {
    setSearchKind(state, action: PayloadAction<SearchBar>) {
      return { ...state, searchKind: action.payload.searchKind };
    },
  },
});

// 액션과 리듀서를 export 해준다. 이건 그냥 따라하면 된다.
export const { setSearchKind } = searchInfo.actions;
export default searchInfo.reducer;
