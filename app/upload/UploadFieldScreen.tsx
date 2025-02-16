import React, { useMemo, useState } from 'react';
import { View, ScrollView } from 'react-native';
import { useUploadNoteContext } from 'contexts/UploadNoteContext';
import { useUploadNoteNavigation } from 'navigation/UploadNoteNavigator';

import { FilledButton } from 'components/common';

import { UPLOAD_FIELDS, VISIBILITY_OPTIONS } from 'constants/upload';
import { InputField, MusicInfo } from 'components/upload';

const UploadFieldScreen = () => {
  const { goToTag } = useUploadNoteNavigation();
  const { selectedTab, field, setField, selectedMusic } = useUploadNoteContext();

  // 입력 값 관리
  const [inputs, setInputs] = useState({
    song: field.song_title,
    artist: field.artist,
    lyric: field.lyrics.length > 0 ? field.lyrics.join('\n') : '',
    memo: '',
  });
  const [location, setLocation] = useState({ placeName: '', address: '' });
  const [emotion, setEmotion] = useState(0);
  const [visibility, setVisibility] = useState(VISIBILITY_OPTIONS[0].label);

  // 입력 필드 포커싱
  const [focusedField, setFocusedField] = useState<string | null>(null);

  // 입력 필드 값 상태 업데이트
  const handleChange = (key: string, value: string) => {
    setInputs((prev) => ({ ...prev, [key]: value }));
  };

  // '직접' 탭이 아닐 경우 곡 & 가수 입력을 받지 않음
  const fields = useMemo(() => {
    return selectedTab === '직접'
      ? UPLOAD_FIELDS
      : UPLOAD_FIELDS.filter((field) => field.key !== 'song' && field.key !== 'artist');
  }, [selectedTab]);

  // 버튼 활성화 조건 계산
  const isButtonActive = useMemo(() => {
    const memoValid = inputs.memo.trim().length > 0;
    const emotionValid = emotion !== 0;
    const visibilityValid = visibility.trim().length > 0;

    if (selectedTab === '직접') {
      const songValid = inputs.song.trim().length > 0;
      const artistValid = inputs.artist.trim().length > 0;
      return songValid && artistValid && memoValid && emotionValid && visibilityValid;
    }

    return memoValid && emotionValid && visibilityValid;
  }, [inputs, emotion, visibility, selectedTab]);

  // 모든 입력 값 저장 후 이동
  const onNext = () => {
    const lyricArr = inputs.lyric.trim() ? inputs.lyric.split('\n') : [];
    setField({
      ...field,
      song_title: inputs.song,
      artist: inputs.artist,
      lyrics: lyricArr,
      memo: inputs.memo,
      location_address: location.address,
      location_name: location.placeName,
      emotion: emotion,
      visibility: visibility,
    });
    goToTag(selectedTab);
  };

  return (
    <View className="flex-1 flex-col gap-[6]">
      {selectedTab === '직접' || <MusicInfo music={selectedMusic} />}

      <View className="flex-1 bg-primaryBg">
        <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
          {fields.map((field, index) => {
            const isLast = index === fields.length - 1;
            return (
              <View key={field.key}>
                <InputField.Container
                  label={field.label}
                  isRequired={field.isRequired}
                  isSmall={field.isSmall}
                  isInputFocused={focusedField === field.key}
                >
                  {field.label === '위치' ? (
                    <InputField.Location location={location} />
                  ) : field.label === '감정' ? (
                    <InputField.Emotion
                      selectedEmotion={emotion}
                      onSelectEmotion={setEmotion}
                    />
                  ) : field.label === '공개' ? (
                    <InputField.Visibility visibility={visibility} />
                  ) : (
                    <InputField.TextField
                      isMusic={selectedTab === '음원' && field.label === '가사'}
                      placeholder={field.placeholder}
                      value={inputs[field.key]}
                      onChangeText={(text) => handleChange(field.key, text)}
                      onClear={() => handleChange(field.key, '')}
                      onFocus={() => setFocusedField(field.key)}
                      onBlur={() => setFocusedField(null)}
                    />
                  )}
                </InputField.Container>
                {!isLast && <View className="h-[1] bg-secondaryBg" />}
              </View>
            );
          })}
          <View className="h-20" />
        </ScrollView>
      </View>

      <View className="absolute bottom-4 w-full px-4">
        <FilledButton text="다음" isActive={isButtonActive} onPress={onNext} />
      </View>
    </View>
  );
};

export default UploadFieldScreen;
