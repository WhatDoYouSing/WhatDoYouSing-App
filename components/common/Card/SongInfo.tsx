import Typo from '../Typo';
import { Image } from 'react-native';

import { IcRecord } from 'assets/svgs';

interface SongInfoProps {
  albumCover: string;
  title: string;
  singer: string;
  lyric: string;
  isBig?: boolean;
}

const SongInfo = ({
  albumCover,
  title,
  singer,
  lyric,
  isBig = false,
}: SongInfoProps): JSX.Element => {
  const defaultCover = 'https://i.scdn.co/image/ab67616d00001e0215e86c06309cad4f62f9dbdc';

  return (
    <div className="content flex px-4 py-2 gap-3">
      <Image
        className={`albumcover rounded-sm ${isBig ? 'w-[120px] h-[120px]' : 'w-20 h-20'} shrink-0`}
        source={{
          uri: albumCover || defaultCover,
        }}
        style={{ width: 120, height: 120 }}
      />
      <div className="flex flex-col justify-between">
        <div
          className={`flex gap-1 ${isBig ? 'flex-col justify-start' : 'flex-row-reverse justify-between'}`}
        >
          {/* 감정 아이콘 들어갈 자리 */}
          <IcRecord />
          {/* 감정 아이콘 들어갈 자리 */}

          <div className="flex flex-col">
            <Typo variant="text-12_R">{title}</Typo>
            <Typo variant="text-12_R">{singer}</Typo>
          </div>
        </div>
        <Typo variant="text-14_M" numberOfLines={2} ellipsizeMode="tail">
          {lyric}
        </Typo>
      </div>
    </div>
  );
};

export default SongInfo;
