import { useState } from 'react';
import { ScrollView, TextInput, TouchableOpacity, View } from 'react-native';
import { DashedLine, FilledButton, Header, QuoteCard, Typo } from 'components/common';
import { BottomMenu } from 'components/common';
import { MemoInputModal } from 'components/upload';
import { QuoteCardType } from 'types/Card/CardType';
import { quoteCards } from 'components/common/Card/noteMock';

interface QuotedNote {
  note: QuoteCardType;
  memo?: string;
}

const UploadPlaylistScreen = () => {
  const [titleText, setTitleText] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [selectedNoteId, setSelectedNoteId] = useState<number | null>(null);
  const [isInputModalOpen, setIsInputModalOpen] = useState(false);
  const [memoText, setMemoText] = useState('');
  const [quotedNotes, setQuotedNotes] = useState<QuotedNote[]>([
    { note: quoteCards[0], memo: '' },
  ]);

  // 선택된 노트 토글 (이미 선택된 경우 해제)
  const toggleSelectedNote = (id: number) => {
    setSelectedNoteId((prev) => (prev === id ? null : id));
  };

  // 하단 메뉴: 취소 버튼 클릭
  const handleCancel = () => {
    setSelectedNoteId(null);
  };

  // 하단 메뉴: 메모 버튼 클릭
  const handleMemo = () => {
    if (selectedNoteId !== null) {
      const selectedItem = quotedNotes.find((item) => item.note.id === selectedNoteId);
      setMemoText(selectedItem?.memo || '');
      setIsInputModalOpen(true);
    }
  };

  // 하단 메뉴: 삭제 버튼 클릭 시 인용한 노트 삭제
  const handleDelete = () => {
    if (selectedNoteId !== null) {
      setQuotedNotes((prev) => prev.filter((item) => item.note.id !== selectedNoteId));
      setSelectedNoteId(null);
    }
  };

  // 메모 입력 모달: 메모 취소
  const handleMemoClear = () => {
    setIsInputModalOpen(false);
    setSelectedNoteId(null);
    setMemoText('');
  };

  // 메모 입력 모달: 메모 저장
  const handleSaveMemo = () => {
    if (selectedNoteId !== null) {
      setQuotedNotes((prev) =>
        prev.map((item) =>
          item.note.id === selectedNoteId ? { ...item, memo: memoText } : item
        )
      );
      handleMemoClear();
    }
  };

  const menuItems = isInputModalOpen
    ? [{ label: '취소', action: handleMemoClear }]
    : [
        { label: '취소', action: handleCancel },
        { label: '메모', action: handleMemo },
        { label: '삭제', action: handleDelete },
      ];

  return (
    <>
      <View className="flex-1 bg-borderBg">
        <Header title="플리 업로드" />

        {/* 제목 입력 필드 */}
        <TextInput
          className={`w-full px-4 pt-6 ${isFocused ? 'pb-[23]' : 'pb-[22]'} text-20 font-GothicA1-SemiBold text-grey placeholder-nonActiveGrey text-center outline-none`}
          placeholder="플리 제목"
          value={titleText}
          onChangeText={setTitleText}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          // multiline
        />
        {isFocused ? <View className="w-full border-b border-brand" /> : <DashedLine />}

        {/* 노트 인용 필드 */}
        <ScrollView className="flex-1 p-4">
          {quotedNotes.length > 0 ? (
            <>
              {quotedNotes.map((item) => (
                <TouchableOpacity
                  key={item.note.id}
                  activeOpacity={1}
                  onPress={() => toggleSelectedNote(item.note.id)}
                >
                  <QuoteCard
                    item={item.note}
                    isClicked={item.note.id === selectedNoteId}
                  />
                  {item.memo && (
                    <Typo variant="text-16_R" className="py-4 leading-[1.5]">
                      {item.memo}
                    </Typo>
                  )}
                </TouchableOpacity>
              ))}
            </>
          ) : (
            <Typo
              variant="text-16_R"
              className="w-full py-4 text-nonActiveGrey text-center leading-[1.5]"
            >
              노트를 인용한 후, 클릭하여 메모를 달아주세요!
            </Typo>
          )}
        </ScrollView>

        {/* 클릭된 노트가 없을 때만 노트 인용하기 버튼 띄우기 */}
        {!selectedNoteId && (
          <View className="absolute bottom-4 flex-row gap-4 w-full px-4">
            <FilledButton text="노트 인용하기" type={'outline'} className="flex-1" />
            <FilledButton
              text="다음"
              className="flex-1"
              isActive={quotedNotes.length > 0}
            />
          </View>
        )}
      </View>

      {/* 노트 클릭 시 하단 메뉴 띄우기 */}
      <BottomMenu
        visible={!!selectedNoteId}
        menuItems={menuItems}
        onlyCancel={isInputModalOpen}
      />

      {/* 메모 입력 모달 */}
      {isInputModalOpen && (
        <MemoInputModal {...{ memoText, setMemoText, handleSaveMemo }} />
      )}
    </>
  );
};

export default UploadPlaylistScreen;
