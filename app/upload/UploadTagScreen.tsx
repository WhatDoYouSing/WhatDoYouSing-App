import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import { useUploadNoteContext } from 'contexts/UploadNoteContext';
import { FilledButton, Typo } from 'components/common';
import { Chip, MusicInfo } from 'components/upload';
import { TAG_LIST } from 'constants/upload';

const UploadTagScreen = () => {
  const { selectedMusic } = useUploadNoteContext();
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const handleToggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  return (
    <View className="flex-1 bg-primaryBg">
      <ScrollView showsVerticalScrollIndicator={false}>
        <MusicInfo music={selectedMusic} />

        <Typo
          variant="text-12_R"
          className="py-3 w-full bg-borderBg text-black leading-[1.5] text-center"
        >
          태그를 등록해서 <br />
          노래에 대한 무드를 기록해 보세요!
        </Typo>

        {TAG_LIST.map((category, index) => {
          const { title, tags } = category;
          const isLast = index === TAG_LIST.length - 1;

          return (
            <>
              <View key={title} className="flex p-4 gap-4">
                <Typo variant="text-16_M" className="text-black">
                  {title}
                </Typo>

                {tags.map((group, groupIndex) => (
                  <View key={groupIndex} className="flex-row flex-wrap gap-2">
                    {group?.map((tag) => {
                      const isSelected = selectedTags.includes(tag);
                      return (
                        <Chip
                          key={tag}
                          label={tag}
                          selected={isSelected}
                          onPress={handleToggleTag}
                        />
                      );
                    })}
                  </View>
                ))}
              </View>
              {!isLast && <View className="h-[1] bg-secondaryBg" />}
            </>
          );
        })}
        <View className="h-20" />
      </ScrollView>

      <View className="absolute bottom-4 w-full px-4">
        <FilledButton text="완료" type={'solid'} />
      </View>
    </View>
  );
};

export default UploadTagScreen;
