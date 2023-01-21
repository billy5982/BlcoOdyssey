export const productClassName = {
  id: '상품번호',
  title: '상품명',
  brand: '브랜드',
  description: '상품내용',
  price: '가격',
  rating: '평점',
  stock: '재고',
};

type Product = string | number | string[];
export const wordSlicing = (productInfo: Product): Product => {
  if (typeof productInfo === 'string' && productInfo.length > 39) {
    return productInfo.slice(0, 40) + '...';
  }
  return productInfo;
};
