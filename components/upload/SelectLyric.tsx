import React, { useState } from 'react';
import { View, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { Typo } from 'components/common';
import MusicInfo from './MusicInfo';
import { lyricData, resultData } from './uploadData';
import { IcPlus } from 'assets/svgs';

const SelectLyric = () => {
  const [lyrics, setLyrics] = useState(lyricData); // 추후 오픈 API 연결을 통해 가사 데이터 받아올 예정

  const [selectedLines, setSelectedLines] = useState([]);

  const MAX_LENGTH = 210;

  const handleLinePress = (index: number) => {
    const lineText = lyrics[index];

    // 현재 선택된 가사의 총 글자 수
    const currentLength = selectedLines.reduce((acc, curIdx) => {
      return acc + lyrics[curIdx].length;
    }, 0);

    // 가사 선택 해제
    if (selectedLines.includes(index)) {
      setSelectedLines(selectedLines.filter((item) => item !== index));
    } else {
      // 선택하려는 가사의 글자 수를 더했을 때 최대 글자 수를 초과하는지 검사
      if (currentLength + lineText.length > MAX_LENGTH) return;

      // 선택한 가사의 인덱스 저장
      setSelectedLines([...selectedLines, index]);
    }
  };

  return (
    <View className="flex-1 flex-col gap-[6]">
      <MusicInfo music={resultData[0]} />

      {lyrics.length > 0 ? (
        <View className="flex-1 justify-center items-center bg-primaryBg">
          <ScrollView className="flex-1 px-4 py-4 w-full">
            {lyrics.map((line, index) => {
              const isSelected = selectedLines.includes(index);
              return (
                <TouchableOpacity key={index} onPress={() => handleLinePress(index)}>
                  <Typo
                    variant="text-16_M"
                    className={`${isSelected ? 'text-brand' : 'text-black'} leading-8`}
                  >
                    {line}
                  </Typo>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>
      ) : (
        <View className="flex-1 justify-center items-center gap-4 px-8">
          <Typo variant="text-14_R" className="text-grey leading-[1.5]">
            {`아직 등록된 가사가 없습니다.\n가사를 직접 등록하시겠어요?`}
          </Typo>
          <TouchableOpacity className="flex-row justify-center items-center gap-1 bg-secondaryBg pt-4 pb-[15] w-full rounded-[2]">
            <IcPlus width={18} height={18} />
            <Typo variant="text-16_M" className={'text-black'}>
              가사 직접 등록
            </Typo>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default SelectLyric;
