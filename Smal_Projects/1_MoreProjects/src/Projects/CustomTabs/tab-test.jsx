import React, { useState } from 'react';
import Tabs from './Tabs';

const TabParent = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const tabsContent = [
    { label: 'Tab 1', content: 'This is the content of Tab 1' },
    { label: 'Tab 2', content: 'This is the content of Tab 2' },
    { label: 'Tab 3', content: 'This is the content of Tab 3' },
  ];

  const handleTabChange = (index) => {
    setActiveTabIndex(index);
  };

  return (
    <div>
      <Tabs tabsContent={tabsContent} onChange={handleTabChange} />
    </div>
  );
};

export default TabParent;
