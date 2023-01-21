import { Titles as ProductType } from './contentBox';

export interface SearchBox {
  searchKind: string; // 검색하고자 하는 종류
}
export interface SearchInput {
  searchContent: string; // 검색하고자 하는 내용
}

export interface Page {
  pageRow: string;
  curPage: number;
}

export interface ContentArr {
  content: ProductType[];
  dataLoading: boolean;
}
export interface PageRow {
  pageRow: string;
}
export interface currentPage {
  curPage: number;
}

export interface SearchInit extends SearchInput {
  searchKind: string;
}

export interface FilterContent {
  filterContent: ProductType[];
}
export interface SearchSetting extends SearchBar {
  dataLoading: boolean;
  searchKind: string; // 검색하고자 하는 종류
  searchContent: string;
  pageRow: string; // 컨텐츠를 보고 싶은 갯수
  content: [] | Titles[]; // 불러온 컨텐츠
  filterContent: ProductType[];
  curPage: number; // 현재 페이지
}
