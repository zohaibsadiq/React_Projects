import React, { useRef, useState } from 'react';
import useOutSideClick from './index';

export default function UseOnClickOutsideTest() {
  const [showContent, setShowContent] = useState(false);
  const ref = useRef();
  useOutSideClick(ref, () => setShowContent(false));
  return (
    <div>
      {showContent ? (
        <div ref={ref}>
          <h1>This is a Random Content</h1>
          <p>Please click outSide of this to close this </p>
        </div>
      ) : (
        <button onClick={() => setShowContent(true)}>Show Content</button>
      )}
    </div>
  );
}
