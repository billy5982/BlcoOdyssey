import { Titles } from './contentBox';

export interface SearchBar {
  searchKind: string; // 검색하고자 하는 종류
  searchContent: string | null; // 검색하고자 하는 내용
}

export interface SearchSetting extends SearchBar {
  showNum: number; // 컨텐츠를 보고 싶은 갯수
  content: null | Titles[]; // 불러온 컨텐츠
  curPage: number; // 현재 페이지
}
