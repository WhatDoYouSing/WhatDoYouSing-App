import React from 'react';
import { View, Image } from 'react-native';
import { useUploadNoteContext } from 'contexts/UploadNoteContext';
import { useUploadNoteNavigation } from 'navigation/UploadNoteNavigator';
import { FilledButton, Typo } from 'components/common';
import { InputField } from 'components/upload';
import useYouTubeInfo from 'hooks/useYouTubeInfo';

const UploadLinkScreen = () => {
  const { goToField } = useUploadNoteNavigation();
  const { url, video, handleUrlChange, handleClear } = useYouTubeInfo();
  const { field, setField } = useUploadNoteContext();

  const thumbnailUrl = video.id ? `https://img.youtube.com/vi/${video.id}/0.jpg` : '';

  const onNext = () => {
    setField({
      ...field,
      youtube_link: url,
      album_art: thumbnailUrl,
      song_title: video.title,
      artist: video.author,
    });
    goToField('유튜브');
  };

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
        <FilledButton text="다음" isActive={!!video.id} onPress={onNext} />
      </View>
    </View>
  );
};

export default UploadLinkScreen;
