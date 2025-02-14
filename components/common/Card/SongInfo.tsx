import Typo from '../Typo';
import { View, Image } from 'react-native';

import { IcRecord } from 'assets/svgs';
import { SongInfoProps } from 'types/Card/CardType';

const SongInfo = ({ album_art, title, singer, lyric, isBig = false }: SongInfoProps) => {
  const defaultCover = 'https://i.scdn.co/image/ab67616d00001e0215e86c06309cad4f62f9dbdc';
  const imageStyle = isBig ? { width: 120, height: 120 } : { width: 80, height: 80 };
  return (
    <View className="w-full flex flex-row px-4 py-2 gap-3">
      <Image
        className={`rounded-sm max-w-md shrink-0`}
        source={{
          uri: album_art || defaultCover,
        }}
        style={imageStyle}
      />
      <View className="flex flex-col justify-between">
        <View
          className={`flex gap-1 ${isBig ? 'flex-col justify-start' : 'flex-row-reverse justify-between'}`}
        >
          {/* 감정 아이콘 들어갈 자리 */}
          <IcRecord />
          {/* 감정 아이콘 들어갈 자리 */}

          <View className="flex flex-col">
            <Typo variant="text-12_R">{title}</Typo>
            <Typo variant="text-12_R">{singer}</Typo>
          </View>
        </View>
        <Typo
          variant="text-14_M"
          numberOfLines={2}
          ellipsizeMode="tail"
          className="max-w-xs"
        >
          {lyric}
        </Typo>
      </View>
    </View>
  );
};

export default SongInfo;
