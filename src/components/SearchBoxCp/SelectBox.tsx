import { AnyAction } from '@reduxjs/toolkit';
import React, { useRef, useState } from 'react';
import { RootState } from '../../store/store';
import { SearchList } from '../../types/searchBox';
import './SelectBox.css';
import SelectModal from './selectModal/SelectModal';

export default function SelectBox({
  listObj,
  init,
  settingFunc,
}: {
  listObj: SearchList;
  init: string;
  settingFunc: (el: string) => AnyAction;
}) {
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
        <span>{listObj[init]}</span>
        <span>{selectOpen ? '▲' : '▼'}</span>
      </div>
      {selectOpen && (
        <SelectModal
          listObj={listObj}
          modalSideClick={modalSideClick}
          selectOpen={selectOpen}
          settingFunc={settingFunc}
        />
      )}
    </div>
  );
}
