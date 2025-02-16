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
  { key: 'public', label: '전체공개', icon: <IcViewAll width={14} height={14} /> },
  { key: 'friends', label: '친구공개', icon: <IcViewFriends width={14} height={14} /> },
  { key: 'private', label: '나만보기', icon: <IcViewOnlyMe width={14} height={14} /> },
];

export function getVisibilityIcon(label: string) {
  const option = VISIBILITY_OPTIONS.find((opt) => opt.label === label);
  return option ? option.icon : null;
}

export const TAG_LIST = [
  {
    title: '시간',
    tags: [['새벽', '아침', '오후', '저녁', '밤']],
  },
  {
    title: '계절',
    tags: [['봄', '여름', '가을', '겨울']],
  },
  {
    title: '일상맥락',
    tags: [
      ['산책', '여행', '피크닉', '드라이브', '자기전'],
      ['출근/등교', '퇴근/하교'],
      ['일', '공부', '독서', '운동', '집안일', '외출준비'],
      ['공연', '파티', '새해', '졸업'],
      ['카페', '집', '회사', '노래방'],
    ],
  },
];
