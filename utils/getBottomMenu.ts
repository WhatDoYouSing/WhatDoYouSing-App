export interface MenuItem {
  label: string;
  action: () => void;
}

/**
 * 하단 메뉴 항목을 생성하는 함수.
 *
 * @param selectedCardTypes - 선택된 카드들의 type 배열 (예: ['note', 'pli'])
 * @param isOwnedByUser - 선택된 모든 카드가 현재 사용자의 소유인지 여부
 * @param handleCancel - 취소 동작 함수
 * @returns 메뉴 항목 배열
 */
export const getBottomMenu = (
  selectedCardTypes: string[],
  isOwnedByUser: boolean,
  handleCancel: () => void
): MenuItem[] => {
  let items: MenuItem[] = [];
  if (selectedCardTypes.includes('pli')) {
    items = [
      { label: '취소', action: handleCancel },
      { label: '보관', action: () => console.log('보관 버튼 클릭') },
    ];
  } else if (selectedCardTypes.includes('note')) {
    if (selectedCardTypes.length === 1) {
      items = [
        { label: '취소', action: handleCancel },
        { label: '노트로', action: () => console.log('노트로 버튼 클릭') },
        { label: '플리로', action: () => console.log('플리로 버튼 클릭') },
        { label: '보관', action: () => console.log('보관 버튼 클릭') },
      ];
    } else {
      items = [
        { label: '취소', action: handleCancel },
        { label: '플리로', action: () => console.log('플리로 버튼 클릭') },
        { label: '보관', action: () => console.log('보관 버튼 클릭') },
      ];
    }
  }
  // 만약 선택된 모든 카드가 현재 사용자의 것이라면 '삭제' 옵션을 인덱스 1에 추가
  if (isOwnedByUser) {
    items.splice(1, 0, { label: '삭제', action: () => console.log('삭제 버튼 클릭') });
  }
  return items;
};
