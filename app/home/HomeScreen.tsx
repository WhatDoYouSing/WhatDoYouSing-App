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
import { useScrollToTop } from 'hooks/useScrollToTop';
import { getBottomMenu, MenuItem } from 'utils/getBottomMenu';

import CtgryTopBar from 'components/Home/CtgryTopBar';

import { mockData } from 'components/common/Card/noteMock';
import { NoteCardType, PlaylistCardType } from 'types/Card/CardType';

type ContentItem = NoteCardType | PlaylistCardType;

const HomeScreen = () => {
  const { flatListRef, scrollToTop } = useScrollToTop<ContentItem>();

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

  // 선택한 카드의 type을 확인
  const selectedCardTypes = filteredContents
    .filter((item) => selectedCards.includes(item.id))
    .map((item) => item.type);

  // 임의의 cookie에 있는 사용자 id (로그인한 my ID)
  const cookieId = 123;

  // 선택된 카드들의 전체 정보
  const selectedItems = filteredContents.filter((item) =>
    selectedCards.includes(item.id)
  );

  // 모든 선택된 카드가 현재 사용자(cookieId)의 것인지 확인
  const isOwnedByUser =
    selectedItems.length > 0 && selectedItems.every((item) => item.user.id === cookieId);

  const menuItems = getBottomMenu(selectedCardTypes, isOwnedByUser, handleCancel);

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
      <BottomMenu visible={isSelectionMode} menuItems={menuItems} />
    </View>
  );
};

export default HomeScreen;
