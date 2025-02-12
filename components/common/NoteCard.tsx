import Typo from './Typo';

import ProfileHeader from './Card/ProfileHeader';
import SongInfo from './Card/SongInfo';

const defaultProfile = require('assets/images/common/default-profile.png');

interface ProfCardProps {
  //URL
  profileImage?: string;
  albumCover?: string;
  //Data
  name?: string;
  dateTime?: string;
  title?: string;
  singer?: string;
  lyric?: string;
  comment?: string;
  //state
  isBig?: boolean;
  isLocation?: boolean;
}

const defaultProps: ProfCardProps = {
  profileImage: '',
  albumCover: '',
  name: '담칠',
  dateTime: '24.08.18 23:09',
  title: 'Graveyard - Stripped',
  singer: 'Halsey',
  lyric: "Oh, 'cause I keep diggin' myself down deeper I won't hhhhhhhhhddddd",
  comment:
    '약간 비 오는 날 공부하면서 듣기 좋은 노래\n할시 노래 중에 저는 이게 제일 좋드라구요',
  isBig: false,
  isLocation: false,
};

const NoteCard = (props: ProfCardProps): JSX.Element => {
  const {
    profileImage,
    albumCover,
    name,
    dateTime,
    title,
    singer,
    lyric,
    isBig,
    isLocation,
    comment,
  } = {
    ...defaultProps,
    ...props,
  };

  return (
    <div className="w-full max-w-[390px]">
      {/* 사용자 프로필 */}
      <ProfileHeader profileImage={profileImage} name={name} dateTime={dateTime} />
      {/* 장소 정보 */}
      {isLocation && (
        <div className="flex flex-col px-4 py-2">
          <Typo variant="text-12_L">가비애</Typo>
          <Typo variant="text-12_L">서울특별시 마포구 와우산로 147-1</Typo>
        </div>
      )}
      {/* 앨범 커버 및 곡 정보 */}
      <SongInfo
        albumCover={albumCover}
        title={title}
        singer={singer}
        lyric={lyric}
        isBig={isBig}
      />
      {/* 사용자 코멘트 */}
      {isBig && (
        <div className="px-4 py-2">
          <Typo variant="text-14_R" numberOfLines={2} ellipsizeMode="tail">
            {comment}
          </Typo>
        </div>
      )}
    </div>
  );
};

export default NoteCard;
