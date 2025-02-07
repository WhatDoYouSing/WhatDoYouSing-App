import { useState } from 'react';

export function useTabMenu(menuItems: string[]) {
  const [selectedItem, setSelectedItems] = useState<string>(menuItems[0]);

  const handleMenuSelect = (label: string) => {
    setSelectedItems(label);
  };

  return {
    menuItems,
    selectedItem,
    handleMenuSelect,
  };
}
