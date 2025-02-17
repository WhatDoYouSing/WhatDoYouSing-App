import Typo from '../Typo';
import { View, Image } from 'react-native';

import { SongInfoProps } from 'types/Card/CardType';
import Chip from '../Tags/Chip';

const SongInfo = ({
  album_art,
  title,
  singer,
  lyric,
  emotion,
  isBig = false,
}: SongInfoProps) => {
  const imageStyle = isBig ? { width: 120, height: 120 } : { width: 80, height: 80 };
  return (
    <View className="flex flex-row px-4 py-2 gap-3 ">
      <Image
        className={`rounded-sm max-w-md shrink-0`}
        source={{ uri: album_art }}
        style={imageStyle}
      />
      <View className="flex flex-col justify-between shrink w-full">
        <View
          className={`flex ${isBig ? 'flex-col justify-start gap-1' : 'flex-row-reverse justify-between gap-3'}`}
        >
          <Chip text={emotion} size={isBig ? 'big' : 'small'} />
          <View className="flex-1 flex-col gap-[2px]">
            <Typo
              variant={`${isBig ? 'text-14_R' : 'text-12_R'}`}
              className="leading-[1.3]"
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              {title}
            </Typo>
            <Typo
              variant={`${isBig ? 'text-14_R' : 'text-12_R'}`}
              className="leading-[1.3]"
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              {singer}
            </Typo>
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
