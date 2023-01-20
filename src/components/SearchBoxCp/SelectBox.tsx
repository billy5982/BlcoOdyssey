import React, { useRef, useState } from 'react';
import { SearchList } from '../../types/searchBox';
import './SelectBox.css';
import SelectModal from './selectModal/SelectModal';

export default function SelectBox() {
  const listObj: SearchList = {
    all: '전체',
    productName: '상품명',
    brand: '브랜드',
    productContent: '상품 내용',
  };

  const [selectContent, setSelectContent] = useState<string>('all');
  const [selectOpen, setSelectOpen] = useState<boolean>(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const modalEvent = () => {
    setSelectOpen((prev) => (prev ? false : true));
  };

  const modalSideClick = (e: any) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setSelectOpen(false);
    }
  };
  return (
    <div onClick={modalEvent} ref={modalRef}>
      <div className="Box">
        <span>{listObj[selectContent]}</span>
        <span>{selectOpen ? '▲' : '▼'}</span>
      </div>
      {selectOpen && (
        <SelectModal
          setSelectContent={setSelectContent}
          listObj={listObj}
          modalSideClick={modalSideClick}
          selectOpen={selectOpen}
        />
      )}
    </div>
  );
}
