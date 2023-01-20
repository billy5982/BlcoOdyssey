import React, { useEffect } from 'react';
import { SearchList } from '../../../types/searchBox';
import './SelectModal.css';
type Props = {
  listObj: SearchList;
  modalSideClick: (e: any) => void;
  selectOpen: boolean;
  setSelectContent: React.Dispatch<React.SetStateAction<string>>;
};

export default function SelectModal({
  listObj,
  modalSideClick,
  selectOpen,
  setSelectContent,
}: Props) {
  useEffect(() => {
    if (selectOpen) document.addEventListener('mousedown', modalSideClick);
    return () => {
      document.removeEventListener('mousedown', modalSideClick);
    };
  }, []);

  return (
    <div className="modalContainer">
      {Object.entries(listObj).map((el) => (
        <div
          key={el[0]}
          className="option"
          id={el[0]}
          onClick={() => setSelectContent(el[0])}
        >
          {el[1]}
        </div>
      ))}
    </div>
  );
}
