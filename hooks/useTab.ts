import { useState } from 'react';

const useTab = (tabItems: string[]) => {
  const [selectedTab, setSelectedTab] = useState(tabItems[0]);

  const handleTabSelect = (label: string) => {
    setSelectedTab(label);
  };

  return {
    tabItems,
    selectedTab,
    handleTabSelect,
  };
};

export default useTab;
