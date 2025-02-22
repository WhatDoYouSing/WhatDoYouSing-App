import React, { useState } from 'react';
import { View, TouchableOpacity, ScrollView } from 'react-native';
import { useUploadNoteNavigation } from 'navigation/UploadNoteNavigator';
import { useUploadNoteContext } from 'contexts/UploadNoteContext';
import { FilledButton, Typo } from 'components/common';
import { lyricData } from 'components/upload/uploadData';
import { MusicInfo } from 'components/upload';

const MAX_LENGTH = 210;

const SelectLyricScreen = () => {
  const { goToField } = useUploadNoteNavigation();
  const { field, setField, selectedMusic } = useUploadNoteContext();

  const [lyrics, setLyrics] = useState(lyricData); // 추후 오픈 API 연결을 통해 가사 데이터 받아올 예정
  const [selectedLines, setSelectedLines] = useState([]);

  const handleLinePress = (index: number) => {
    const lineText = lyrics[index];

    // 현재 선택된 가사의 총 글자 수 계산
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

  const onNext = () => {
    const selectedLyrics = selectedLines.map((idx) => lyrics[idx]);
    setField({ ...field, lyrics: selectedLyrics });
    goToField('음원');
  };

  return (
    <View className="flex-1 flex-col gap-[6]">
      <MusicInfo music={selectedMusic} />

      {lyrics.length > 0 ? (
        <View className="flex-1 bg-primaryBg">
          <ScrollView className="flex-1 p-4" showsVerticalScrollIndicator={false}>
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
            <View className="h-20" />
          </ScrollView>
        </View>
      ) : (
        <View className="flex-1 justify-center items-center gap-4 px-8">
          <Typo variant="text-14_R" className="text-grey leading-[1.5]">
            아직 등록된 가사가 없습니다. <br />
            가사를 직접 등록하시겠어요?
          </Typo>
          <FilledButton text="가사 직접 등록" type={'borderless'} hasIcon />
        </View>
      )}

      <View className="absolute bottom-4 w-full px-4">
        <FilledButton text="다음" onPress={onNext} />
      </View>
    </View>
  );
};

export default SelectLyricScreen;
