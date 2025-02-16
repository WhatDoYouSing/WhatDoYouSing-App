import Typo from '../Typo';
import { View, Image } from 'react-native';

import { IcRecord } from 'assets/svgs';
import { SongInfoProps } from 'types/Card/CardType';

const SongInfo = ({ album_art, title, singer, lyric, isBig = false }: SongInfoProps) => {
  const imageStyle = isBig ? { width: 120, height: 120 } : { width: 80, height: 80 };
  return (
    <View className="flex flex-row px-4 py-2 gap-3 ">
      <Image
        className={`rounded-sm max-w-md shrink-0`}
        source={{
          uri: album_art,
        }}
        style={imageStyle}
      />
      <View className="flex flex-col justify-between shrink">
        <View
          className={`flex gap-1 ${isBig ? 'flex-col justify-start' : 'flex-row-reverse justify-between'}`}
        >
          {/* 감정 아이콘 들어갈 자리 */}
          <IcRecord />
          {/* 감정 아이콘 들어갈 자리 */}

          <View className="flex flex-col gap-[2px]">
            <Typo variant={`${isBig ? 'text-14_R' : 'text-12_R'}`}>{title}</Typo>
            <Typo variant={`${isBig ? 'text-14_R' : 'text-12_R'}`}>{singer}</Typo>
          </View>
        </View>
        <Typo
          variant={`${isBig ? 'text-16_M' : 'text-14_M'}`}
          numberOfLines={2}
          ellipsizeMode="tail"
          className="w-auto grow-0 max-w-xs"
        >
          {lyric}
        </Typo>
      </View>
    </View>
  );
};

export default SongInfo;
