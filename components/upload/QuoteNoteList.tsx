import React, { useState } from 'react';
import { View, TouchableOpacity, TextInput, FlatList } from 'react-native';

import { NoteCard, SelectCard } from 'components/common';
import { IcCalendarOff, IcSearch } from 'assets/svgs';
import { QuoteCardType } from 'types/Card/CardType';
import { noteCards } from 'components/common/Card/noteMock';

interface QuoteNoteListProps {
  selectedCards: number[];
  setSelectedCards: React.Dispatch<React.SetStateAction<number[]>>;
  setIsSelectionMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const QuoteNoteList = ({
  selectedCards,
  setSelectedCards,
  setIsSelectionMode,
}: QuoteNoteListProps) => {
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    // 임시 데이터
    // setSearchResults();
  };

  const toggleCalendar = () => {
    // 임시 데이터
    // setSearchResults();
  };

  // 카드 선택 토글
  const toggleSelectCard = (id: number) => {
    setSelectedCards((prev) => {
      const newSelected = prev.includes(id)
        ? prev.filter((cardId) => cardId !== id)
        : [...prev, id];
      setIsSelectionMode(newSelected.length > 0);
      return newSelected;
    });
  };

  return (
    <>
      {/* 노트 검색 */}
      <View className="flex-row items-center bg-primaryBg border-b border-black px-4 py-1 gap-1">
        <TouchableOpacity
          className="flex items-center justify-center w-10 h-10"
          onPress={toggleCalendar}
        >
          <IcCalendarOff width={24} height={24} />
        </TouchableOpacity>
        <TextInput
          className="flex-1 text-16 font-GothicA1-Regular text-grey placeholder-nonActiveGrey outline-none"
          placeholder="가수명이나 제목을 검색해 보세요!"
          value={searchText}
          onChangeText={setSearchText}
        />
        <TouchableOpacity
          className="flex items-center justify-center w-10 h-10"
          onPress={handleSearch}
        >
          <IcSearch width={24} height={24} />
        </TouchableOpacity>
      </View>

      {/* 캘린더 */}

      {/* 선택 개수 */}
      <SelectCard count={selectedCards.length} />

      {/* 노트 검색 결과 */}
      <FlatList
        data={noteCards}
        keyExtractor={(item) => `item-${item.id}`}
        renderItem={({ item }) => (
          <NoteCard
            item={{
              ...(item as QuoteCardType),
              isBig: false,
              isSelected: selectedCards.includes(item.id),
              isSelectionMode: true,
              toggleSelectCard,
              handleLongPress: toggleSelectCard,
            }}
          />
        )}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View className="border-b border-borderBg" />}
      />
    </>
  );
};

export default QuoteNoteList;
