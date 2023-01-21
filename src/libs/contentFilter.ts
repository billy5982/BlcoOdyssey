import { ContentArr } from './../types/reduxState.d';
import { Titles as Product } from './../types/contentBox.d';

type Search = {
  [key: string]: string;
};

export const filterKeyword = (params: URLSearchParams, keyword: string[]) => {
  const filterUrl = keyword.map((el) => params.get(el));
  return filterUrl;
};

export const filterData = <T>(products: Product[], keyword: T[]): Product[] => {
  const emptyStr = keyword[1] !== '';
  const keywordArr = ['productName', 'brand', 'productContent'];
  const categorySet = typeof keyword[0] === 'string' && (keyword[0] as string);

  if (emptyStr && typeof keyword[1] === 'string') {
    const key = keyword[1].toLowerCase();
    if (keyword[0] === 'all') {
      const filterAll = products.filter((product) => {
        const findIdx = Object.values(product).findIndex((el, idx) => {
          return typeof el === 'string' && el.toLowerCase().includes(key);
        });
        return findIdx > -1;
      });
      return filterAll;
    }
    if (categorySet && keywordArr.indexOf(categorySet) > -1) {
      const key = keyword[1].toLowerCase();
      const searchObj = {
        productName: 'title',
        brand: 'brand',
        productContent: 'description',
      } as Search;
      const checkCategory = searchObj[categorySet];
      const filterAll = products.filter((product) => {
        const content = product[checkCategory] as string;
        const lowerContent = content.toLowerCase();
        return lowerContent.includes(key);
      });
      return filterAll;
    }
  }

  return products;
};
