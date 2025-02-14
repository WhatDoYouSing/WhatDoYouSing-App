import { View } from 'react-native';
import { Typo, ProfileHeader, SongInfo } from 'components/common';
import { NoteCardType } from 'types/Card/CardType';

const NoteCard = (item: NoteCardType) => {
  return (
    <View className="w-full max-w-md">
      {/* 사용자 프로필 */}
      <ProfileHeader
        profile={item.user.profile}
        nickname={item.user.nickname}
        created_at={item.created_at}
        is_updated={item.is_updated}
      />

      {/* 장소 정보 */}
      {item.isLocation && (
        <View className="flex flex-col px-4 py-2">
          <Typo variant="text-12_L">{item.location_name}</Typo>
          <Typo variant="text-12_L">{item.location_address}</Typo>
        </View>
      )}

      {/* 앨범 커버 및 곡 정보 */}
      <SongInfo
        album_art={item.album_art}
        title={item.title}
        singer={item.singer}
        lyric={item.lyric}
        isBig={item.isBig}
      />

      {/* 사용자 코멘트 */}
      {item.isBig && (
        <View className="px-4 py-2">
          <Typo variant="text-14_R" numberOfLines={2} ellipsizeMode="tail">
            {item.memo}
          </Typo>
        </View>
      )}
    </View>
  );
};

export default NoteCard;
