import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import Typo from './Typo';

interface LNBProps {
  menuItems: string[];
  selectedItem: string;
  handleMenuSelect: (label: string) => void;
}

const LNB = ({ menuItems, selectedItem, handleMenuSelect }: LNBProps) => {
  const isFourItems = menuItems.length >= 4;

  return (
    <View className="flex flex-row w-full bg-secondaryBg border-b border-black h-11 box-content">
      {menuItems.map((label, index) => {
        const isSelected = selectedItem === label;
        const isLastItem = index === menuItems.length - 1;

        return (
          <TouchableOpacity
            key={label}
            className={`flex-1 justify-center px-5 ${isSelected ? 'bg-black' : ''} ${isLastItem ? 'border-r-0' : 'border-r border-black'}`}
            onPress={() => handleMenuSelect(label)}
          >
            <Typo
              variant={'text-16_M'}
              className={`${isSelected ? 'text-primaryBg' : 'text-black'} ${isFourItems ? 'text-center' : ''}`}
            >
              {label}
            </Typo>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default LNB;
