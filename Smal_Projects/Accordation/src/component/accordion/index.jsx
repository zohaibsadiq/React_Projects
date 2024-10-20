// Single selection
// Multiple selection
import React, { useState } from 'react';
import data from './data';
import './style.css';

export default function Accordion() {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multipleIds, setMultipleIds] = useState([]);

  const handleSingleSlection = (currentId) => {
    console.log(currentId);
    setSelected(currentId === selected ? null : currentId);
  };

  const handleMultileSelection = (currentId) => {
    let copyMultiple = [...multipleIds];
    console.log(`copyMultiple`, copyMultiple);
    const findIndexOfCurrentId = copyMultiple.indexOf(currentId);
    console.log(findIndexOfCurrentId);
    if (findIndexOfCurrentId === -1) {
      copyMultiple.push(currentId);
    } else {
      copyMultiple.splice(findIndexOfCurrentId, 1);
    }
    setMultipleIds(copyMultiple);
  };
  console.log(selected, multipleIds);
  return (
    <div className='Wrapper'>
      <button
        onClick={() => setEnableMultiSelection(!enableMultiSelection)}
        className='MultiSelectionBtn'
      >
        {enableMultiSelection ? 'Enable single Selection' : 'Enable Multi Selection'}
      </button>
      <div className='accordian'>
        {data && data.length > 0 ? (
          data.map((dataitem) => (
            <div className='item'>
              <div
                onClick={
                  enableMultiSelection
                    ? () => handleMultileSelection(dataitem.id)
                    : () => handleSingleSlection(dataitem.id)
                }
                className='title'
              >
                <h3>{dataitem.question}</h3>
                <span>+</span>
              </div>
              {
                enableMultiSelection ? 
                    multipleIds.indexOf(dataitem.id) !== -1 && (
                      <div className='content'>
                        <p>{dataitem.answer}</p>
                      </div>)
                     : selected === dataitem.id && (
                      <div className='content'>
                        <p>{dataitem.answer}</p>
                      </div>
                    )
              }
              {/* {selected === dataitem.id ||
              multipleIds.indexOf(dataitem.id) !== -1 ? (
                <div className='content'>
                  <p>{dataitem.answer}</p>
                </div>
              ) : null} */}
            </div>
          ))
        ) : (
          <div>No Data Found</div>
        )}
      </div>
    </div>
  );
}
