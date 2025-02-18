import { useState } from 'react';
import { View } from 'react-native';
import { useUploadPlaylistContext } from 'contexts/UploadPlaylistContext';
import { useUploadPlaylistNavigation } from 'navigation/UploadPlaylistNavigator';

import { FilledButton, Header } from 'components/common';
import { InputField, PlaylistInfo } from 'components/upload';

const PlaylistVisibilityScreen = () => {
  const { quotedNotes, field, setField } = useUploadPlaylistContext();
  const { goToTag } = useUploadPlaylistNavigation();
  const [visibility, setVisibility] = useState(field.visibility);

  const onNext = () => {
    setField({ ...field, visibility: visibility });
    goToTag();
  };

  return (
    <View className="flex-1 bg-primaryBg">
      <Header title="플리 업로드" />
      <PlaylistInfo title={field.title} count={quotedNotes.length} />
      <InputField label="공개" isRequired>
        <InputField.Visibility visibility={visibility} />
      </InputField>
      <View className="absolute bottom-4 w-full px-4">
        <FilledButton text="다음" onPress={onNext} />
      </View>
    </View>
  );
};

export default PlaylistVisibilityScreen;
