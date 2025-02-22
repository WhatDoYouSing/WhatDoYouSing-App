import { ScrollView, View } from 'react-native';
import { useUploadPlaylistContext } from 'contexts/UploadPlaylistContext';
import { useToast } from 'contexts/ToastContext';

import { FilledButton, FilterTags, Header, Typo } from 'components/common';
import { PlaylistInfo } from 'components/upload';
import { useUploadTag } from 'hooks/useUploadTag';

const PlaylistTagScreen = () => {
  const { quotedNotes, field } = useUploadPlaylistContext();
  const { selectedFilter, handleSelectedFilter } = useUploadTag();
  const { showToast } = useToast();

  const handleUpload = () => {
    // 플리 업로드 로직...
    showToast('플리 업로드가 완료되었어요!');
  };

  return (
    <View className="flex-1 bg-primaryBg">
      <Header title="플리 업로드" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <PlaylistInfo title={field.title} count={quotedNotes.length} />
        <Typo
          variant="text-12_R"
          className="py-3 w-full bg-borderBg text-black leading-[1.5] text-center"
        >
          태그를 등록해서
          <br />
          노래들에 대한 무드를 기록해 보세요!
        </Typo>
        <FilterTags
          selectedFilter={selectedFilter}
          handleSelectedFilter={handleSelectedFilter}
        />
        <View className="h-20" />
      </ScrollView>

      <View className="absolute bottom-4 w-full px-4">
        <FilledButton text="완료" type={'solid'} onPress={handleUpload} />
      </View>
    </View>
  );
};

export default PlaylistTagScreen;
