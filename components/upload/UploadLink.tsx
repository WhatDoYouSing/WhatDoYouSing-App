import React from 'react';
import { View, Image } from 'react-native';
import { FilledButton, Typo } from 'components/common';
import { InputField } from './InputField';
import useYouTubeInfo from 'hooks/useYouTubeInfo';

const UploadLink = () => {
  const { url, video, handleUrlChange, handleClear } = useYouTubeInfo();
  const thumbnailUrl = video.id ? `https://img.youtube.com/vi/${video.id}/0.jpg` : '';

  return (
    <View className="flex-1 flex-col bg-primaryBg">
      <InputField.Container label="링크" isRequired>
        <InputField.TextField
          placeholder="유튜브 링크를 입력해주세요!"
          value={url}
          onChangeText={handleUrlChange}
          onClear={handleClear}
        />
      </InputField.Container>

      <View className="w-full h-[1] bg-secondaryBg" />

      {url && (
        <View className="flex-row items-center gap-4 p-4 h-24">
          <Image source={{ uri: thumbnailUrl }} className="w-16 h-16 rounded-[2]" />

          <View className="flex-1 gap-1">
            <Typo
              variant="text-14_M"
              className="text-black leading-[1.4]"
              numberOfLines={2}
              ellipsizeMode="tail"
            >
              {video.title}
            </Typo>
            <Typo
              variant="text-14_M"
              className="text-grey leading-[1.4]"
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              {video.author}
            </Typo>
          </View>
        </View>
      )}

      <View className="absolute bottom-4 w-full px-4">
        <FilledButton text="다음" isActive={!!video.id} />
      </View>
    </View>
  );
};

export default UploadLink;
