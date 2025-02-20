import { useState } from 'react';
import { View } from 'react-native';
import { router } from 'expo-router';
import { useUploadPlaylistContext } from 'contexts/UploadPlaylistContext';

import { BottomMenu, Header, LNB } from 'components/common';
import { QuoteCollectionList, QuoteNoteList } from 'components/upload';
import useTab from 'hooks/useTab';

import { noteCards } from 'components/common/Card/noteMock';

const QuoteNoteScreen = () => {
  const { quotedNotes, setQuotedNotes } = useUploadPlaylistContext();

  const { tabItems, selectedTab, handleTabSelect } = useTab(['노트', '보관함']);

  const [isSelectionMode, setIsSelectionMode] = useState<boolean>(quotedNotes.length > 0);
  const [selectedCards, setSelectedCards] = useState<number[]>(
    quotedNotes.map((item) => item.note.id)
  );

  // 하단메뉴: 플리로 버튼 클릭 시 선택됨 노트 저장 후 이동
  const handleSave = () => {
    const quoted = noteCards
      .filter((card) => selectedCards.includes(card.id))
      .map((card) => ({ note: card, memo: '' }));
    setQuotedNotes(quoted);
    setIsSelectionMode(false);
    router.back();
  };

  // 하단메뉴: 취소 버튼 클릭 시 선택 모드 해제 및 선택된 카드 초기화
  const handleCancel = () => {
    setSelectedCards([]);
    setIsSelectionMode(false);
  };

  const menuItems = [
    { label: '취소', action: handleCancel },
    { label: '플리로', action: handleSave },
  ];

  return (
    <View className="flex-1 bg-primaryBg">
      <Header title="플리 업로드" />
      <LNB {...{ tabItems, selectedTab, handleTabSelect }} />

      {selectedTab === '노트' ? (
        <QuoteNoteList {...{ setIsSelectionMode, selectedCards, setSelectedCards }} />
      ) : (
        <QuoteCollectionList
          {...{ setIsSelectionMode, selectedCards, setSelectedCards }}
        />
      )}

      <BottomMenu visible={isSelectionMode} menuItems={menuItems} />
    </View>
  );
};

export default QuoteNoteScreen;
