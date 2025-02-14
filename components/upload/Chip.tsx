import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Typo } from 'components/common';

interface ChipProps {
  label: string;
  selected: boolean;
  onPress: (label: string) => void;
}

const Chip = ({ label, selected, onPress }: ChipProps) => {
  return (
    <TouchableOpacity
      onPress={() => onPress(label)}
      className={`px-[10] pt-2 pb-[7] rounded-sm ${selected ? 'bg-black' : 'bg-secondaryBg'}`}
    >
      <Typo variant="text-12_SB" className={selected ? 'text-secondaryBg' : 'text-black'}>
        {label}
      </Typo>
    </TouchableOpacity>
  );
};

export default Chip;
