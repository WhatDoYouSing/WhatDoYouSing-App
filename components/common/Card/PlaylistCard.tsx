import { View } from 'react-native';
import { Typo, ProfileHeader, PlaylistInfo } from 'components/common';
import { PlaylistCardType } from 'types/Card/CardType';

const PlaylistCard = (item: PlaylistCardType) => {
  return (
    <View className="w-full max-w-md py-2 gap-2">
      {/* 사용자 프로필 */}
      <ProfileHeader
        profile={item.user.profile}
        nickname={item.user.nickname}
        created_at={item.created_at}
      />

      {/* 앨범 커버 및 곡 정보 */}
      <PlaylistInfo
        album_art={item.album_art}
        title={item.title}
        lyric={item.lyric}
        isBig={item.isBig}
      />

      {/* 사용자 메모 */}
      {item.isBig && item.memo && (
        <View className="px-4 py-2">
          <Typo variant="text-14_R" numberOfLines={2} ellipsizeMode="tail">
            {item.memo}
          </Typo>
        </View>
      )}
    </View>
  );
};

export default PlaylistCard;
