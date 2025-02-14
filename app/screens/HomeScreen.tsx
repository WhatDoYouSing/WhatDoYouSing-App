import { useState } from 'react';
import { ScrollView, View, TouchableOpacity, FlatList } from 'react-native';
import { Typo, NoteCard, PlaylistCard } from 'components/common';

import { mockData } from 'components/common/Card/noteMock';
import { NoteCardType, PlaylistCardType } from 'types/Card/CardType';
import CtgryTopBar from 'components/Home/CtgryTopBar';

const HomeScreen = () => {
  const categories = ['통합', '노트', '플리'];
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  // ✅ 선택된 카테고리에 따라 필터링
  const filteredContents = mockData.contents.filter((item) => {
    if (selectedCategory === '통합') return true; // 전체 보기
    if (selectedCategory === '노트') return item.type === 'note';
    if (selectedCategory === '플리') return item.type === 'pli';
  });

  const [selectedCards, setSelectedCards] = useState<number[]>([]);
  const [isSelectionMode, setIsSelectionMode] = useState(false);

  const toggleSelectCard = (id: number) => {
    setSelectedCards((prev) =>
      prev.includes(id) ? prev.filter((cardId) => cardId !== id) : [...prev, id]
    );
  };

  const handleLongPress = (id: number) => {
    setIsSelectionMode(true);
    toggleSelectCard(id);
  };

  return (
    <View className="flex-1 bg-primaryBg">
      <CtgryTopBar
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        selectedCount={selectedCards.length}
      />
      ;{/* 아이템 목록 */}
      <FlatList
        data={filteredContents}
        keyExtractor={(item) => `item-${item.id}`}
        renderItem={({ item }) =>
          item.type === 'note' ? (
            <NoteCard
              key={item.id}
              item={{
                ...(item as NoteCardType),
                isSelected: selectedCards.includes(item.id),
                isSelectionMode,
                toggleSelectCard,
                handleLongPress,
              }}
            />
          ) : (
            <PlaylistCard
              item={{
                ...(item as PlaylistCardType),
                isSelected: selectedCards.includes(item.id),
                isSelectionMode,
                toggleSelectCard,
                handleLongPress,
              }}
            />
          )
        }
        contentContainerStyle={{ paddingVertical: 16, paddingHorizontal: 16 }}
      />
    </View>
  );
};

export default HomeScreen;
