import Typo from '../Typo';
import { View, Image } from 'react-native';

interface SongInfoProps {
  albumCover: string[];
  title: string;
  lyric: string;
  isBig?: boolean;
}

const PlaylistInfo = ({
  albumCover,
  title,
  lyric,
  isBig = false,
}: SongInfoProps): JSX.Element => {
  const defaultCover = [
    'https://i.scdn.co/image/ab67616d00001e0215e86c06309cad4f62f9dbdc',
    'https://i.scdn.co/image/ab67616d00001e0215e86c06309cad4f62f9dbdc',
    'https://i.scdn.co/image/ab67616d00001e0215e86c06309cad4f62f9dbdc',
  ];
  const covers =
    albumCover && albumCover.length > 0 && albumCover[0] !== ''
      ? albumCover
      : defaultCover;

  const count = covers.length;
  const containerSize = isBig ? 120 : 80;

  const rows =
    count === 1
      ? [[0]] //전체 표시. 배열 안 숫자는 index 번호!
      : count === 2
        ? [[0], [1]] //세로 2줄
        : count === 3
          ? [[0], [1, 2]] //1행 1개, 2행 2개
          : [
              [0, 1], //2행 2열 배치
              [2, 3],
            ];

  return (
    <View className="content flex flex-row px-4 py-2 gap-3">
      {/* 플리 이미지 레이아웃 세팅 */}
      <View className={`${isBig ? 'w-[120px] h-[120px]' : 'w-20 h-20'}`}>
        {rows.map((col, rowIndex) => {
          // 행 단위 반복
          const rowHeight = containerSize / rows.length;
          return (
            <View
              key={rowIndex}
              className="flex flex-row"
              style={{ width: containerSize, height: rowHeight }}
            >
              {col.map((imgIndex) => {
                // 열 단위 반복
                const cellWidth = containerSize / col.length;
                return (
                  <Image
                    key={imgIndex}
                    className="albumcover rounded-sm shrink-0"
                    source={{ uri: covers[imgIndex] }}
                    style={{ width: cellWidth, height: rowHeight }}
                  />
                );
              })}
            </View>
          );
        })}
      </View>
      {/* 플리 정보 부분 */}
      <View className="flex flex-col justify-between">
        <Typo variant={isBig ? 'text-14_R' : 'text-12_R'}>{title}</Typo>
        <Typo
          variant={isBig ? 'text-16_M' : 'text-14_M'}
          numberOfLines={2}
          ellipsizeMode="tail"
          className="shrink max-w-xs"
        >
          {lyric}
        </Typo>
      </View>
    </View>
  );
};

export default PlaylistInfo;
