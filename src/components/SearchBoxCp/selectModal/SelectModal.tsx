import React, { useEffect } from 'react';
import { SearchList } from '../../../types/searchBox';
import './SelectModal.css';

type Props = {
  listObj: SearchList;
  modalSideClick: (e: any) => void;
  selectOpen: boolean;
  settingFunc: (el: string) => void;
};

export default function SelectModal({
  listObj,
  modalSideClick,
  selectOpen,
  settingFunc,
}: Props) {
  useEffect(() => {
    if (selectOpen) document.addEventListener('mousedown', modalSideClick);
    return () => {
      document.removeEventListener('mousedown', modalSideClick);
    };
  }, []);

  return (
    <div className="modalContainer">
      {Object.entries(listObj).map((category) => (
        <div
          key={category[0]}
          className="option"
          id={category[0]}
          onClick={() => settingFunc(category[0])}
        >
          {category[1]}
        </div>
      ))}
    </div>
  );
}
