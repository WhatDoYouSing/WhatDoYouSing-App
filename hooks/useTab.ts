import { useState } from 'react';

const useTab = (tabItems: string[]) => {
  const [selectedItem, setSelectedItems] = useState(tabItems[0]);

  const handleTabSelect = (label: string) => {
    setSelectedItems(label);
  };

  return {
    tabItems,
    selectedItem,
    handleTabSelect,
  };
};

export default useTab;
