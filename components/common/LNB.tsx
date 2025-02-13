import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import Typo from './Typo';

interface LNBProps {
  tabItems: string[];
  selectedItem: string;
  handleTabSelect: (label: string) => void;
}

const LNB = ({ tabItems, selectedItem, handleTabSelect }: LNBProps) => {
  const isFourItems = tabItems.length >= 4;

  return (
    <View className="flex flex-row w-full bg-secondaryBg border-b border-black h-11 box-content">
      {tabItems.map((label, index) => {
        const isSelected = selectedItem === label;
        const isLastItem = index === tabItems.length - 1;

        return (
          <TouchableOpacity
            key={label}
            className={`flex-1 justify-center px-5 ${isSelected ? 'bg-black' : ''} ${isLastItem ? 'border-r-0' : 'border-r border-black'}`}
            onPress={() => handleTabSelect(label)}
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
