import { IcViewAll, IcViewFriends, IcViewOnlyMe } from 'assets/svgs';

export const UPLOAD_TAP_ITEMS = ['음원', '유튜브', '직접'];

export const UPLOAD_FIELDS = [
  {
    key: 'song',
    label: '곡',
    placeholder: '곡명을 적어주세요!',
    isRequired: true,
    isSmall: true,
  },
  {
    key: 'artist',
    label: '가수',
    placeholder: '가수명을 적어주세요!',
    isRequired: true,
    isSmall: true,
  },
  { key: 'lyric', label: '가사', placeholder: '마음에 남은 가사를 적어주세요!' },
  { key: 'location', label: '위치' },
  { key: 'emotion', label: '감정', isRequired: true },
  { key: 'memo', label: '메모', placeholder: '메모를 적어주세요!', isRequired: true },
  { key: 'visibility', label: '공개', isRequired: true },
];

export const VISIBILITY_OPTIONS = [
  { key: 'public', label: '전체공개', icon: <IcViewAll width={14} height={14} /> },
  { key: 'friends', label: '친구공개', icon: <IcViewFriends width={14} height={14} /> },
  { key: 'private', label: '나만보기', icon: <IcViewOnlyMe width={14} height={14} /> },
];
