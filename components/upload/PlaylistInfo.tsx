import React from 'react';
import { View, Image } from 'react-native';
import { Typo } from 'components/common';

interface PlaylistInfoProps {
  title: string;
  count: number;
}

const PlaylistInfo = ({ title, count }: PlaylistInfoProps) => {
  return (
    <View className={`flex-row items-center p-4 gap-4 bg-primaryBg`}>
      <Image
        className="rounded-[2] w-16 h-16 bg-secondaryBg"
        source={{ uri: '' }} // 임시 URI
      />
      <View className="flex-1 gap-2">
        <Typo variant="text-12_R" className="leading-[1.3]">
          노트 {count}
        </Typo>
        <Typo
          variant="text-14_M"
          className="text-grey leading-[1.3]"
          numberOfLines={2}
          ellipsizeMode="tail"
        >
          {title}
        </Typo>
      </View>
    </View>
  );
};

export default PlaylistInfo;
