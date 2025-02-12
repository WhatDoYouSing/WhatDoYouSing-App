import { View } from 'react-native';
import { Typo, DashedBorder, SongInfo } from 'components/common';
import { QuoteContent } from 'types/CardType';

const QuoteCard = (item: QuoteContent) => {
  const cardContent = (
    <View className="w-full">
      {/* 장소 정보 - 본인 노트 인용 시에만 표시 */}
      {item.isMy && (
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
      />

      {/* 사용자 메모 - 남의 노트 인용 시에만 표시 */}
      {!item.isMy && (
        <View className="mx-4 py-2 border-t-[0.5px] border-dashed">
          <Typo variant="text-12_R" numberOfLines={1} ellipsizeMode="tail">
            {item.memo}
          </Typo>
          <Typo variant="text-12_L" className="text-grey">
            {`from. ${item.user.nickname}`}
          </Typo>
        </View>
      )}
    </View>
  );

  return item.isClicked ? (
    <DashedBorder className="w-full max-w-md py-2 gap-2">{cardContent}</DashedBorder>
  ) : (
    <View className="w-full max-w-md py-2 gap-2">{cardContent}</View>
  );
};

export default QuoteCard;
