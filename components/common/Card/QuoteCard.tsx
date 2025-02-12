import { View } from 'react-native';
import SongInfo from './SongInfo';
import Typo from '../Typo';
import DashedBorder from './DashedBorder';

interface ProfCardProps {
  //URL
  albumCover?: string;
  //Data
  title?: string;
  singer?: string;
  lyric?: string;
  comment?: string;
  nickname?: string;
  //state
  isMy?: boolean;
  isClicked?: boolean;
}

const defaultProps: ProfCardProps = {
  albumCover: '',
  title: 'Graveyard - Stripped',
  singer: 'Halsey',
  lyric: "Oh, 'cause I keep diggin' myself down deeper I won't hhhhhhhhhddddd",
  comment:
    '약간 비 오는 날 공부하면서 듣기 좋은 노래\n할시 노래 중에 저는 이게 제일 좋드라구요',
  nickname: '닉네임이아홉자인사람',
  isMy: true,
  isClicked: false,
};

const QuoteCard = (props: ProfCardProps): JSX.Element => {
  const { albumCover, title, singer, lyric, isMy, isClicked, comment, nickname } = {
    ...defaultProps,
    ...props,
  };

  const cardContent = (
    <View className="w-full">
      {/* 장소 정보 - 본인 노트 인용 시에 보여짐 */}
      {isMy && (
        <View className="flex flex-col px-4 py-2">
          <Typo variant="text-12_L">가비애</Typo>
          <Typo variant="text-12_L">서울특별시 마포구 와우산로 147-1</Typo>
        </View>
      )}
      {/* 앨범 커버 및 곡 정보 */}
      <SongInfo albumCover={albumCover} title={title} singer={singer} lyric={lyric} />
      {/* 사용자 코멘트 - 남의 노트 인용 시에 보여짐 */}
      {!isMy && (
        <View className="mx-4 py-2 border-t-[0.5px] border-dashed">
          <Typo variant="text-12_R" numberOfLines={1} ellipsizeMode="tail">
            {comment}
          </Typo>
          <Typo variant="text-12_L" className="text-grey">
            {`from. ${nickname}`}
          </Typo>
        </View>
      )}
    </View>
  );

  return isClicked ? (
    <DashedBorder className="w-full max-w-md py-2 gap-2">{cardContent}</DashedBorder>
  ) : (
    <View className="w-full max-w-md py-2 gap-2">{cardContent}</View>
  );
};

export default QuoteCard;
