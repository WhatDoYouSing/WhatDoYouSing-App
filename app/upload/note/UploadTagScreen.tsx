import React from 'react';
import { View, ScrollView } from 'react-native';
import { useUploadNoteContext } from 'contexts/UploadNoteContext';
import { FilledButton, FilterTags, Typo } from 'components/common';
import { MusicInfo } from 'components/upload';
import { useUploadTag } from 'hooks/useUploadTag';

const UploadTagScreen = () => {
  const { selectedMusic } = useUploadNoteContext();
  const { selectedFilter, handleSelectedFilter } = useUploadTag();

  return (
    <View className="flex-1 bg-primaryBg">
      <ScrollView showsVerticalScrollIndicator={false}>
        <MusicInfo music={selectedMusic} />

        <Typo
          variant="text-12_R"
          className="py-3 w-full bg-borderBg text-black leading-[1.5] text-center"
        >
          태그를 등록해서
          <br />
          노래에 대한 무드를 기록해 보세요!
        </Typo>

        <FilterTags
          selectedFilter={selectedFilter}
          handleSelectedFilter={handleSelectedFilter}
        />

        <View className="h-20" />
      </ScrollView>

      <View className="absolute bottom-4 w-full px-4">
        <FilledButton text="완료" type={'solid'} />
      </View>
    </View>
  );
};

export default UploadTagScreen;
