import React, { useState } from 'react';
import { View, FlatList } from 'react-native';

import { NoteCard, SelectCard, Typo } from 'components/common';
import CollectionInfo from './CollectionInfo';
import { QuoteCardType } from 'types/Card/CardType';
import { noteCards } from 'components/common/Card/noteMock';
import { CollectionInfoType } from 'types/upload';

interface QuoteCollectionListProps {
  selectedCards: number[];
  setSelectedCards: React.Dispatch<React.SetStateAction<number[]>>;
  setIsSelectionMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const QuoteCollectionList = ({
  selectedCards,
  setSelectedCards,
  setIsSelectionMode,
}: QuoteCollectionListProps) => {
  const [collections, setCollections] = useState<CollectionInfoType[]>([
    { id: 1, name: '올해 최고의 노래들' }, // 임시 데이터
    { id: 2, name: '보관함 제일 최신' },
  ]);
  const [selectedCollection, setSelectedCollection] = useState<CollectionInfoType>(null);

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

  return selectedCollection ? (
    <>
      <SelectCard count={selectedCards.length} />
      <View className="items-center gap-6 px-4 py-6 border-b border-black">
        <Typo variant="text-20_SB">{selectedCollection.name}</Typo>
        <View className="flex-row gap-1 items-center">
          {/* 추후 수정 예정 */}
          <Typo variant="text-12_R" className="leading-[1.3]">
            노트 1 ·
          </Typo>
          <Typo variant="text-12_R" className="text-nonActiveGrey leading-[1.3]">
            플리 1
          </Typo>
        </View>
      </View>
      <FlatList
        data={noteCards}
        keyExtractor={(item) => `item-${item.id}`}
        className="flex-grow-0 h-fit"
        showsVerticalScrollIndicator={false}
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
        ItemSeparatorComponent={() => <View className="border-b border-borderBg" />}
      />
      <View className="flex-1 bg-secondaryBg" />
    </>
  ) : (
    <FlatList
      data={collections}
      keyExtractor={(item) => `item-${item.id}`}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => (
        <CollectionInfo item={item} onPress={() => setSelectedCollection(item)} />
      )}
    />
  );
};
export default QuoteCollectionList;
