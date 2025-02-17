import React from 'react';
import { View, Image, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { Typo } from 'components/common';
import { MusicInfoType } from 'types/upload';

interface MusicInfoProps extends TouchableOpacityProps {
  isLargePadding?: boolean;
  music: MusicInfoType;
}

const MusicInfo = ({ isLargePadding = true, music, ...props }: MusicInfoProps) => {
  return (
    <TouchableOpacity
      {...props}
      className={`flex-row items-center px-4 ${isLargePadding ? 'py-4' : 'py-2'} gap-4 bg-primaryBg`}
    >
      <Image
        className="rounded-[2] w-16 h-16 bg-secondaryBg"
        source={{ uri: music.albumCover || '' }}
      />
      <View className="flex-1 flex-wrap">
        <Typo variant="text-14_M" className="text-black leading-[1.4]">
          {music.song}
        </Typo>
        <Typo variant="text-14_M" className="text-grey leading-[1.4]">
          {music.artist}
        </Typo>
      </View>
    </TouchableOpacity>
  );
};

export default MusicInfo;
