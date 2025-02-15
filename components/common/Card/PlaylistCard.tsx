import { View } from 'react-native';
import { Typo, ProfileHeader, PlaylistInfo } from 'components/common';
import { PlaylistCardType, SelectableProps } from 'types/Card/CardType';

interface PlaylistCardProps {
  item: PlaylistCardType & SelectableProps;
}

const PlaylistCard = ({ item }: PlaylistCardProps) => {
  return (
    <View className="w-full max-w-md py-2 gap-2 bg-primaryBg">
      {/* 사용자 프로필 */}
      <ProfileHeader
        item={{
          profile: item.user.profile,
          nickname: item.user.nickname,
          created_at: item.created_at,
          is_updated: item.is_updated,
          visibility: item.visibility,
          isSelectionMode: item.isSelectionMode || false,
          isSelected: item.isSelected || false,
          toggleSelectCard: item.toggleSelectCard,
          id: item.id,
        }}
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
