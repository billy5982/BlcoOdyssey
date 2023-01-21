import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Titles as ProductType } from '../types/contentBox';
import { setContent } from '../store/reducer/searchInfo';
// /products?limit=100

const dataFetching = async (url: string) => {
  try {
    const loadData = await fetch(url);
    const { products } = await loadData.json();
    return products;
  } catch (e) {
    console.log(e);
    return false;
  }
};

export default function useFetch(url: string) {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<ProductType[]>([]);

  useEffect(() => {
    const dataSet = async (url2: string) => {
      const getData = (await dataFetching(url2)) as ProductType[];
      if (getData) {
        dispatch(setContent({ content: getData, dataLoading: true }));
        setLoading(true);
      }
    };

    dataSet(url);
  }, [url]);

  return [loading];
}
