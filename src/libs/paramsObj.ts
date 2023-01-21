export const paramsObj = (
  category: string,
  searchContent: string,
  pageNum: number,
  pageRow: string
) => {
  return {
    category,
    searchContent,
    pageNum: `${pageNum}`,
    pageRow,
  };
};
