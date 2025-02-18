import React from 'react';
import { View, Image, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { Typo } from 'components/common';
import { CollectionInfoType } from 'types/upload';

interface CollectionInfoProps extends TouchableOpacityProps {
  item: CollectionInfoType;
}

const CollectionInfo = ({ item, ...props }: CollectionInfoProps) => {
  return (
    <TouchableOpacity
      {...props}
      className={`flex-row items-center px-4 py-2 gap-3 bg-primaryBg`}
    >
      <Image
        className="rounded-[2] w-16 h-16 bg-secondaryBg"
        source={{ uri: item.album_art || '' }} // 임시 이미지
      />
      <View className="flex-1 gap-1">
        <View className="flex-row gap-1 items-center">
          <Typo variant="text-12_R" className="leading-[1.3]">
            노트 1 ·
          </Typo>
          <Typo variant="text-12_R" className="text-nonActiveGrey leading-[1.3]">
            플리 1
          </Typo>
        </View>
        <Typo variant="text-14_M" className="text-grey leading-[1.3]">
          {item.name}
        </Typo>
      </View>
    </TouchableOpacity>
  );
};

export default CollectionInfo;
