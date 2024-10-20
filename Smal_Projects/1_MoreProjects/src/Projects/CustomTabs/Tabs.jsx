import React, { useState } from 'react';

const Tabs = ({ tabsContent = [], onChange }) => {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const handleOnClick = (getIndex) => {
    setCurrentTabIndex(getIndex);
    setActiveTabIndex(getIndex);
    onChange(getIndex);
  };

  return (
    <div className='Wrapper'>
      <div
        className='heading'
        style={{
          display: 'flex',
          gap: '30px',
          margin: 'auto',
          justifyContent: 'center',
          padding: '100px',
        }}
      >
        {tabsContent.map((tab, index) => (
          <div onClick={() => handleOnClick(index)} key={tab.label}>
            <span
              className='label'
              style={{
                cursor: 'pointer',
                backgroundColor: `${activeTabIndex === index ? 'red' : ''}`,
                padding: '10px',
              }}
            >
              {tab.label}
            </span>
          </div>
        ))}
      </div>
      <div className='content'>
        {tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content}
      </div>
    </div>
  );
};

export default Tabs;
