import { View } from 'react-native';
import { Typo, DashedBorder, SongInfo, DashedLine } from 'components/common';
import { QuoteCardType } from 'types/Card/CardType';
import { cn } from 'utils/cn';

interface QuoteCardProps {
  item: QuoteCardType;
  isClicked?: boolean;
  isMy?: boolean;
}

const QuoteCard = ({ item, isClicked = false, isMy }: QuoteCardProps) => {
  const cardContent = (
    <View
      className={cn('bg-primaryBg rounded-sm', isMy ? 'pt-1 pb-2 gap-[2]' : 'py-2 gap-2')}
    >
      {/* 장소 정보 - 본인 노트 인용 시에만 표시 */}
      {isMy && (
        <View className="flex flex-col gap-[1] px-4 py-2">
          <Typo variant="text-12_L" className="leading-[1.3]">
            {item.location_name}
          </Typo>
          <Typo variant="text-12_L" className="leading-[1.3]">
            {item.location_address}
          </Typo>
        </View>
      )}

      {/* 앨범 커버 및 곡 정보 */}
      <SongInfo
        album_art={item.album_art}
        title={item.title}
        singer={item.singer}
        lyric={item.lyric}
        emotion={item.emotion}
      />

      {/* 사용자 메모 - 남의 노트 인용 시에만 표시 */}
      {!isMy && (
        <View className="flex-col gap-3 px-4 pb-2">
          <DashedLine strokeWidth={0.5} />
          <View className="gap-1">
            <Typo variant="text-12_R" numberOfLines={1} ellipsizeMode="tail">
              {item.memo}
            </Typo>
            <View className="flex-row gap-1">
              <Typo variant="text-12_L" className="text-grey">
                from.
              </Typo>
              <Typo variant="text-12_L" className="text-grey leading-[1.5]">
                {item.user.nickname}
              </Typo>
            </View>
          </View>
        </View>
      )}
    </View>
  );

  return isClicked ? (
    <DashedBorder className="w-full max-w-md">{cardContent}</DashedBorder>
  ) : (
    <View className="w-full max-w-md">{cardContent}</View>
  );
};

export default QuoteCard;
