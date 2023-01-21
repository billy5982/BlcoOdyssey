import React from 'react';

export default function PageBtn({ clickEvent }: { clickEvent: () => void }) {
  return <button onClick={clickEvent}>PageBtn</button>;
}
