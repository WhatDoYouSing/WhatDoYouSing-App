import { View, TouchableOpacity } from 'react-native';
import { Typo, ProfileHeader, SongInfo } from 'components/common';
import { NoteCardType, SelectableProps } from 'types/Card/CardType';

interface NoteCardProps {
  item: NoteCardType & SelectableProps;
}

const NoteCard = ({ item }: NoteCardProps) => {
  return (
    <TouchableOpacity
      className="w-full max-w-md bg-primaryBg pt-1 pb-2"
      onLongPress={() => item.handleLongPress?.(item.id)}
      activeOpacity={0.8}
    >
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

      {/* 장소 정보 */}
      {item.isLocation && (
        <View className="flex flex-col gap-[1] px-4 py-2">
          <Typo variant="text-12_L" className="leading-[1.3]">
            {item.location_name}
          </Typo>
          <Typo variant="text-12_L" className="leading-[1.3]">
            {item.location_address}
          </Typo>
        </View>
      )}

      <View className="gap-[2]">
        {/* 앨범 커버 및 곡 정보 */}
        <SongInfo
          album_art={item.album_art}
          title={item.title}
          singer={item.singer}
          lyric={item.lyric}
          emotion={item.emotion}
          isBig={item.isBig}
        />

        {/* 사용자 메모 */}
        {item.isBig && (
          <View className="px-4 py-2">
            <Typo
              variant="text-14_R"
              className="leaing-[1.5]"
              numberOfLines={2}
              ellipsizeMode="tail"
            >
              {item.memo}
            </Typo>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default NoteCard;
