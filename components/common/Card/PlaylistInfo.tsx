import Typo from '../Typo';
import { View, Image } from 'react-native';
import { PlaylistInfoProps } from 'types/CardType';

const PlaylistInfo = ({ album_art, title, lyric, isBig = false }: PlaylistInfoProps) => {
  const defaultCover = [
    'https://i.scdn.co/image/ab67616d00001e0215e86c06309cad4f62f9dbdc',
    'https://i.scdn.co/image/ab67616d00001e0215e86c06309cad4f62f9dbdc',
    'https://i.scdn.co/image/ab67616d00001e0215e86c06309cad4f62f9dbdc',
  ];
  const covers =
    album_art && album_art.length > 0 && album_art[0] !== '' ? album_art : defaultCover;

  const COUNT = covers.length;
  const CONTAINER_SIZE = isBig ? 120 : 80;

  const rows =
    COUNT === 1
      ? [[0]] //전체 표시. 배열 안 숫자는 index 번호!
      : COUNT === 2
        ? [[0], [1]] //세로 2줄
        : COUNT === 3
          ? [[0], [1, 2]] //1행 1개, 2행 2개
          : [
              [0, 1], //2행 2열 배치
              [2, 3],
            ];

  return (
    <View className="content flex flex-row px-4 py-2 gap-3">
      {/* 플리 이미지 레이아웃 세팅 */}
      <View className={`w-${CONTAINER_SIZE} h-${CONTAINER_SIZE}`}>
        {rows.map((col, rowIndex) => {
          // 행 단위 반복
          const rowHeight = CONTAINER_SIZE / rows.length;
          return (
            <View
              key={rowIndex}
              className="flex flex-row"
              style={{ width: CONTAINER_SIZE, height: rowHeight }}
            >
              {col.map((imgIndex) => {
                // 열 단위 반복
                const cellWidth = CONTAINER_SIZE / col.length;
                return (
                  <Image
                    key={imgIndex}
                    className="rounded-sm shrink-0"
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
