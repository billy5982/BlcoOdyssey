import { AnyAction } from '@reduxjs/toolkit';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setSearchKind } from '../../../store/reducer/searchInfo';
import { SearchList } from '../../../types/searchBox';
import './SelectModal.css';
type Props = {
  listObj: SearchList;
  modalSideClick: (e: any) => void;
  selectOpen: boolean;
  settingFunc: (el: string) => AnyAction;
};

export default function SelectModal({
  listObj,
  modalSideClick,
  selectOpen,
  settingFunc,
}: Props) {
  const dispatch = useDispatch();

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
          onClick={() => dispatch(settingFunc(category[0]))}
        >
          {category[1]}
        </div>
      ))}
    </div>
  );
}
