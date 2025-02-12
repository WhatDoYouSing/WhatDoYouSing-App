import { View } from 'react-native';

import Typo from '../Typo';
import ProfileHeader from './ProfileHeader';
import PlaylistInfo from './PlaylistInfo';

interface PlaylistCardProps {
  //URL
  profileImage?: string;
  albumCover?: string[];
  //Data
  name?: string;
  dateTime?: string;
  title?: string;
  singer?: string;
  lyric?: string;
  comment?: string;
  //state
  isBig?: boolean;
}

const defaultProps: PlaylistCardProps = {
  profileImage: '',
  albumCover: [''],
  name: '담칠',
  dateTime: '24.08.18 23:09',
  title: 'Graveyard - Stripped',
  singer: 'Halsey',
  lyric: "Oh, 'cause I keep diggin' myself down deeper I won't hhhhhhhhhddddd",
  comment:
    '약간 비 오는 날 공부하면서 듣기 좋은 노래\n할시 노래 중에 저는 이게 제일 좋드라구요',
  isBig: false,
};

const PlaylistCard = (props: PlaylistCardProps) => {
  const { profileImage, name, dateTime, albumCover, title, lyric, comment, isBig } = {
    ...defaultProps,
    ...props,
  };

  return (
    <View className="w-full max-w-md py-2 gap-2">
      {/* 사용자 프로필 */}
      <ProfileHeader profileImage={profileImage} name={name} dateTime={dateTime} />

      {/* 앨범 커버 및 곡 정보 */}
      <PlaylistInfo albumCover={['']} title={title} lyric={lyric} isBig={isBig} />

      {/* 사용자 코멘트 */}
      {isBig && (
        <View className="px-4 py-2">
          <Typo variant="text-14_R" numberOfLines={2} ellipsizeMode="tail">
            {comment}
          </Typo>
        </View>
      )}
    </View>
  );
};

export default PlaylistCard;
