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

  const [inputs, setInputs] = useState({
    song: field.song_title,
    artist: field.artist,
    lyric: field.lyrics.length > 0 ? field.lyrics.join('\n') : '',
    memo: '',
  });
  const [location, setLocation] = useState({ placeName: '', address: '' });
  const [emotion, setEmotion] = useState('');
  const [visibility, setVisibility] = useState(VISIBILITY_OPTIONS[0].label);

  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleChange = (key: string, value: string) => {
    setInputs((prev) => ({ ...prev, [key]: value }));
  };

  const fields = useMemo(() => {
    return selectedTab !== '직접'
      ? UPLOAD_FIELDS.filter((field) => field.key !== 'song' && field.key !== 'artist')
      : UPLOAD_FIELDS;
  }, [selectedTab]);

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
      {selectedTab !== '직접' && <MusicInfo music={selectedMusic} />}

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
        <FilledButton text="다음" onPress={onNext} />
      </View>
    </View>
  );
};

export default UploadFieldScreen;
