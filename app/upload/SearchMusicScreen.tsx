import React, { useState } from 'react';
import { View, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { useUploadNoteNavigation } from 'navigation/UploadNoteNavigator';
import { useUploadNoteContext } from 'contexts/UploadNoteContext';
import { IcSearch } from 'assets/svgs';
import { Typo } from 'components/common';
import { MusicInfo } from 'components/upload';
import { MusicInfoType } from 'types/upload';
import { resultData } from 'components/upload/uploadData';

const SearchMusicScreen = () => {
  const { goToSelect } = useUploadNoteNavigation();
  const { field, setField } = useUploadNoteContext();
  const [searchResults, setSearchResults] = useState<MusicInfoType[] | null>(null);

  const handleSearchMusic = () => {
    // 임시 데이터 (추후 오픈 API 연결 예정)
    setSearchResults(resultData);
  };

  // 음원 선택 시 정보 저장 후 이동
  const handleSelectMusic = (music: MusicInfoType) => {
    setField({
      ...field,
      album_art: music.albumCover,
      artist: music.artist,
      song_title: music.song,
    });
    goToSelect('음원');
  };

  return (
    <View className="flex-1">
      <View className="flex-row items-center bg-primaryBg border-b border-black px-4 py-1 gap-1">
        <TextInput
          className="flex-1 text-16 font-GothicA1-Regular text-grey placeholder-nonActiveGrey outline-none"
          placeholder="가수명이나 제목을 검색해 보세요!"
        />
        <TouchableOpacity
          className="flex items-center justify-center w-10 h-10"
          onPress={handleSearchMusic}
        >
          <IcSearch width={24} height={24} />
        </TouchableOpacity>
      </View>

      {searchResults ? (
        // 검색 후
        <View className="flex-1 flex-col gap-[1]">
          <Typo
            variant="text-14_R"
            className="px-4 py-3 bg-primaryBg text-black leading-normal"
          >
            {`${searchResults.length}개의 검색결과`}
          </Typo>
          {searchResults.length > 0 ? (
            // 검색 결과 있음
            <ScrollView
              contentContainerStyle={{ flex: 1, gap: 1 }}
              showsVerticalScrollIndicator={false}
            >
              {searchResults.map((music, index) => (
                <MusicInfo
                  key={index}
                  music={music}
                  isLargePadding={false}
                  onPress={() => handleSelectMusic(music)}
                />
              ))}
              <View className="flex-1 bg-primaryBg" />
            </ScrollView>
          ) : (
            // 검색 결과 없음
            <View className="flex-1 justify-center items-center bg-primaryBg">
              <Typo variant="text-14_R" className="text-grey text-center leading-[1.5]">
                검색결과가 없습니다. <br />
                다른 검색어로 검색해보시는 건 어떨까요?
              </Typo>
            </View>
          )}
        </View>
      ) : (
        // 검색 전
        <View className="flex-1 justify-center items-center h-full">
          <Typo variant="text-14_R" className="text-grey text-center leading-[1.5]">
            {`등록하고 싶은 음원을\n간편하게 검색해 보세요!`}
          </Typo>
        </View>
      )}
    </View>
  );
};

export default SearchMusicScreen;
