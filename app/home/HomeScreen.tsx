import { useRef, useState } from 'react';
import { FlatList, View } from 'react-native';

import {
  NoteCard,
  PlaylistCard,
  BottomMenu,
  ScrollTopBtn,
  SelectCard,
  Typo,
} from 'components/common';
import CtgryTopBar from 'components/Home/CtgryTopBar';

import { mockData } from 'components/common/Card/noteMock';
import { NoteCardType, PlaylistCardType } from 'types/Card/CardType';

type ContentItem = NoteCardType | PlaylistCardType;

const HomeScreen = () => {
  const flatListRef = useRef<FlatList<ContentItem>>(null);

  const [selectedCategory, setSelectedCategory] = useState('통합');
  const [selectedCards, setSelectedCards] = useState<number[]>([]);
  const [isSelectionMode, setIsSelectionMode] = useState(false);

  // 선택한 카테고리에 따라 필터링
  const filteredContents: ContentItem[] = (mockData.contents.filter(
    (item: ContentItem) => {
      if (selectedCategory === '통합') return true;
      if (selectedCategory === '노트') return item.type === 'note';
      if (selectedCategory === '플리') return item.type === 'pli';
      return false;
    }
  ) || []) as ContentItem[];

  // 카드 선택 토글
  const toggleSelectCard = (id: number) => {
    setSelectedCards((prev) =>
      prev.includes(id) ? prev.filter((cardId) => cardId !== id) : [...prev, id]
    );
  };

  // 롱프레스 시 선택 모드 활성화 후 선택 토글
  const handleLongPress = (id: number) => {
    if (!isSelectionMode) setIsSelectionMode(true);
    toggleSelectCard(id);
  };

  // 취소 버튼 눌렀을 때 선택 모드 해제 및 선택된 카드 초기화
  const handleCancel = () => {
    setSelectedCards([]);
    setIsSelectionMode(false);
  };

  //최상단으로 스크롤 올리는 함수
  const scrollToTop = () => {
    flatListRef.current?.scrollToOffset({ offset: 0, animated: true });
  };

  // 선택한 카드의 type을 확인
  const selectedCardTypes = filteredContents
    .filter((item) => selectedCards.includes(item.id))
    .map((item) => item.type);

  // 하단 바 메뉴
  const menuItems = selectedCardTypes.includes('pli')
    ? [
        { label: '취소', action: () => handleCancel() },
        { label: '보관', action: () => console.log('보관 버튼 클릭') },
      ]
    : selectedCardTypes.includes('note')
      ? selectedCardTypes.length === 1
        ? [
            { label: '취소', action: () => handleCancel() },
            { label: '노트로', action: () => console.log('노트로 버튼 클릭') },
            { label: '플리로', action: () => console.log('플리로 버튼 클릭') },
            { label: '보관', action: () => console.log('보관 버튼 클릭') },
          ]
        : [
            { label: '취소', action: () => handleCancel() },
            { label: '플리로', action: () => console.log('플리로 버튼 클릭') },
            { label: '보관', action: () => console.log('보관 버튼 클릭') },
          ]
      : [];

  // FlatList의 각 아이템 렌더링
  const renderCard = ({ item }: { item: ContentItem }) => {
    if (item.type === 'note') {
      return (
        <NoteCard
          key={item.id}
          item={{
            ...(item as NoteCardType),
            isBig: true,
            isSelected: selectedCards.includes(item.id),
            isSelectionMode,
            toggleSelectCard,
            handleLongPress,
          }}
        />
      );
    } else {
      return (
        <PlaylistCard
          key={item.id}
          item={{
            ...(item as PlaylistCardType),
            isBig: true,
            isSelected: selectedCards.includes(item.id),
            isSelectionMode,
            toggleSelectCard,
            handleLongPress,
          }}
        />
      );
    }
  };

  return (
    <View className="relative flex-1 bg-primaryBg">
      <CtgryTopBar
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      {/* 선택 개수 */}
      <SelectCard count={selectedCards.length} />

      {/* 카드 목록 */}
      <FlatList
        ref={flatListRef}
        data={filteredContents}
        keyExtractor={(item) => `item-${item.id}`}
        renderItem={renderCard}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View className="border-b border-borderBg" />}
      />
      {/* 상단 스크롤 버튼 */}
      <ScrollTopBtn onPress={scrollToTop} />
      {/* 하단 탭 */}
      {isSelectionMode && <BottomMenu menuItems={menuItems} />}
    </View>
  );
};

export default HomeScreen;
