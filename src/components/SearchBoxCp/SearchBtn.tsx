import React from 'react';
import './SearchBtn.css';
export default function SearchBtn({ clickFunc }: { clickFunc: () => void }) {
  return <button onClick={clickFunc}>조회</button>;
}
