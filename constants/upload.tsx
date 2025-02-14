import { IcViewAll, IcViewFriends, IcViewOnlyMe } from 'assets/svgs';

export const UPLOAD_FIELDS = [
  {
    key: 'song',
    label: '곡',
    placeholder: '곡명을 적어주세요!',
    isRequired: true,
    isSmall: true,
  },
  {
    key: 'singer',
    label: '가수',
    placeholder: '가수명을 적어주세요!',
    isRequired: true,
    isSmall: true,
  },
  { key: 'lyric', label: '가사', placeholder: '마음에 남은 가사를 적어주세요!' },
  { key: 'location', label: '위치' },
  { key: 'emotion', label: '감정' },
  { key: 'memo', label: '메모', placeholder: '메모를 적어주세요!', isRequired: true },
  { key: 'visibility', label: '공개', isRequired: true },
];

export const EMOTION_LIST = [
  '행복',
  '설렘',
  '희망',
  '사랑',
  '평온',
  '벅참',
  '감동',
  '쾌감',
  '신남',
  '용기',
  '센치함',
  '그리움',
  '위로',
  '슬픔',
  '비장',
];

export const VISIBILITY_OPTIONS = [
  { key: '전체공개', label: '전체공개', icon: <IcViewAll width={14} height={14} /> },
  { key: '친구공개', label: '친구공개', icon: <IcViewFriends width={14} height={14} /> },
  { key: '나만보기', label: '나만보기', icon: <IcViewOnlyMe width={14} height={14} /> },
];

export function getVisibilityIcon(label: string) {
  const option = VISIBILITY_OPTIONS.find((opt) => opt.label === label);
  return option ? option.icon : null;
}
