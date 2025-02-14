import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import MusicInfo from './MusicInfo';
import NextButton from './NextButton';
import { InputField } from './InputField';
import { UPLOAD_FIELDS, VISIBILITY_OPTIONS } from 'constants/upload';
import { resultData } from './uploadData';

interface UploadFieldProps {
  tab: string;
}
const UploadField = ({ tab = '음원' }: UploadFieldProps) => {
  const [inputs, setInputs] = useState({
    song: '',
    singer: '',
    lyric: '끝이 안보이는 저 넓은 세상 문앞에  소중한 나로 데려다 준',
    memo: '',
  });
  const [location, setLocation] = useState({ placeName: '', address: '' });
  const [emotion, setEmotion] = useState('');
  const [visibility, setVisibility] = useState(VISIBILITY_OPTIONS[0].label);

  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleChange = (key: string, value: string) => {
    setInputs((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <View className="flex-1 flex-col gap-[6]">
      <MusicInfo music={resultData[0]} />

      <View className="flex-1 bg-primaryBg">
        <ScrollView className="flex-1">
          {UPLOAD_FIELDS.map((field, index) => {
            const isLast = index === UPLOAD_FIELDS.length - 1;
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
                      onSelectEmotion={(newEmotion) => setEmotion(newEmotion)}
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
        <NextButton text="다음" />
      </View>
    </View>
  );
};

export default UploadField;
