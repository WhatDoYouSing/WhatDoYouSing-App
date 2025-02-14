import React, { useMemo, useState } from 'react';
import { View, ScrollView } from 'react-native';
import MusicInfo from './MusicInfo';
import { InputField } from './InputField';
import { UPLOAD_FIELDS, VISIBILITY_OPTIONS } from 'constants/upload';
import { resultData } from './uploadData';
import { FilledButton } from 'components/common';

interface UploadFieldProps {
  tab: string;
}
const UploadField = ({ tab = '음원' }: UploadFieldProps) => {
  const [inputs, setInputs] = useState({ song: '', artist: '', lyric: '', memo: '' });
  const [location, setLocation] = useState({ placeName: '', address: '' });
  const [emotion, setEmotion] = useState('');
  const [visibility, setVisibility] = useState(VISIBILITY_OPTIONS[0].key);

  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleChange = (key: string, value: string) => {
    setInputs((prev) => ({ ...prev, [key]: value }));
  };

  const fields = useMemo(() => {
    return tab !== '직접'
      ? UPLOAD_FIELDS.filter((field) => field.key !== 'song' && field.key !== 'artist')
      : UPLOAD_FIELDS;
  }, [tab]);

  return (
    <View className="flex-1 flex-col gap-[6]">
      {tab !== '직접' && <MusicInfo music={resultData[0]} />}

      <View className="flex-1 bg-primaryBg">
        <ScrollView className="flex-1">
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
                      isMusic={tab === '음원' && field.label === '가사'}
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
        <FilledButton text="다음" />
      </View>
    </View>
  );
};

export default UploadField;
