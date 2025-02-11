import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import Typo from './Typo';

interface LNBProps {
  menuItems: string[];
  selectedItem: string;
  onMenuSelect: (label: string) => void;
}

const LNB = ({ menuItems, selectedItem, onMenuSelect }: LNBProps) => {
  return (
    <View className="flex flex-row w-full bg-secondaryBg border-b border-black h-11 box-content">
      {menuItems.map((label, index) => {
        const isSelected = selectedItem === label;
        const isLastItem = index === menuItems.length - 1;

        return (
          <TouchableOpacity
            key={label}
            className={`flex-1 justify-center px-5 ${isSelected ? 'bg-black' : ''} ${isLastItem ? 'border-r-0' : 'border-r border-black'}`}
            onPress={() => onMenuSelect(label)}
          >
            <Typo
              variant={'text-16_M'}
              className={`${isSelected ? 'text-primaryBg' : 'text-black'}`}
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
