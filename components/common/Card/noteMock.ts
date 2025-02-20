import {
  NoteCardType,
  QuoteCardType,
  PlaylistCardType,
  UserType,
  MockData,
} from 'types/Card/CardType';

// ✅ 사용자 데이터 (다양한 사용자를 추가)
const baseUser1: UserType = {
  id: 123,
  username: 'user123',
  nickname: '담칠',
  profile: 2,
};
const baseUser2: UserType = {
  id: 102,
  username: 'user456',
  nickname: '노리',
  profile: 3,
};
const baseUser3: UserType = {
  id: 103,
  username: 'indie_lover',
  nickname: '해랑',
  profile: 1,
};
const baseUser4: UserType = {
  id: 104,
  username: 'jazz_fan',
  nickname: '민서',
  profile: 4,
};

// 공통 기본 데이터
const baseContent = {
  created_at: '2024-08-18 23:09',
  is_updated: true,
  visibility: 'public',
};

export const noteCards: NoteCardType[] = [
  {
    type: 'note',
    id: 1,
    user: baseUser1,
    ...baseContent,
    subtitle: '프리템포와 여름 - 멀쩡',
    title: '프리템포와 여름',
    album_art:
      'https://i.ytimg.com/vi/h70WpUBujfY/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCDUMAySA3HzyBjRsPZGYwiAyfVaw',
    lyric: '',
    singer: '멀쩡',
    emotion: '신남',
    memo: '썸네일이랑 제목 보자마자 황급히 달려간 곳... 여러분 프리템포를 아시나요 이런 음악을 시부야계라고 하나요? 이게 무슨 장른가요? 더주세요',
    link: 'https://www.youtube.com/watch?v=_jZvrN4s9X0&list=LL&index=7',

    location_name: '경의선숲길공원',
    location_address: '서울특별시 마포구 동교로51길 133',
  },
  {
    type: 'note',
    id: 2,
    user: baseUser2,
    ...baseContent,
    subtitle: 'more than words - Hitsujibungaku',
    title: 'more than words',
    album_art: 'https://i.scdn.co/image/ab67616d0000b2730176d825eea0b946e228f2f2',
    lyric: 'まだ自分のことを愛したいんだってもがいているんでしょう',
    singer: 'Hitsujibungaku',
    emotion: '감동',
    memo: '아직 자기 자신을 사랑하고 싶다고 발버둥치고 있는 거잖아',
    link: 'https://open.spotify.com/track/2kXER8pkjxDVQnlagpVJJw',

    location_name: '할리스커피 홍대입구역점',
    location_address: '서울특별시 마포구 양화로 151',
  },
  {
    type: 'note',
    id: 3,
    user: baseUser1,
    ...baseContent,
    subtitle: '지켜줄게 - 백예린',
    title: '지켜줄게',
    album_art: 'https://image.bugsm.co.kr/album/images/500/202383/20238312.jpg',
    lyric: '자주 보러 올게 꼭은 아니지만 지켜보려 할게 시키지 않았지만',
    singer: '백예린',
    emotion: '감동',
    memo: '제가 쓴 노래도 아니지만... 사랑하는 친구에게 바쳤던 노래',
    link: 'https://open.spotify.com/track/0FfGs47PNQ81c01ceX8kdL',

    location_name: '청계천',
    location_address: '서울특별시 종로구',
  },
  {
    type: 'note',
    id: 4,
    user: baseUser4,
    ...baseContent,
    subtitle: 'Samba Di Una Nota (One Note Samba) - Caterina Valente',
    title: ' Samba Di Una Nota (One Note Samba)',
    album_art: 'https://m.media-amazon.com/images/I/41BtTx7eHAL._UF1000,1000_QL80_.jpg',
    lyric: 'This is just a little samba, Built upon a single note',
    singer: 'Caterina Valente',
    emotion: '행복',
    memo: '이 곡은 한 음으로 만들어진 작은 삼바',
    link: 'https://open.spotify.com/track/1uCezyyo0hCCPjXqxMrbJ0',

    location_name: '무궁화 파이브',
    location_address: '경기도 성남시 분당구 백현동 603-2 1층',
  },
];

export const quoteCards: QuoteCardType[] = [
  {
    id: 5,
    user: baseUser1,
    ...baseContent,
    subtitle: 'ATTITUDE - IVE',
    title: 'ATTITUDE',
    album_art:
      'https://image.genie.co.kr/Y/IMAGE/IMG_ALBUM/085/919/941/85919941_1738309273144_1_600x600.JPG',
    lyric: '이리저리 부딪혀도 행운은 늘 내 편인 걸',
    singer: 'IVE',
    emotion: '쾌감',
    memo: '나는 누가 뭐래도 아이브의 가사가 너무 좋다',
    link: 'https://open.spotify.com/track/49oOgXKqm6xTavBtekzVHg',

    location_name: '압구정 로데오 거리',
    location_address: '서울특별시 강남구',
  },
  {
    id: 6,
    user: baseUser2,
    ...baseContent,
    subtitle: '여름빛 - 나상현씨밴드',
    title: '여름빛',
    album_art: 'https://image.bugsm.co.kr/album/images/500/204077/20407748.jpg',
    lyric: '언제나 너를 기억해 춤을 추듯 일렁이는 시간들 그 시간들',
    singer: '나상현씨밴드',
    emotion: '벅참',
    memo: '제가 사랑하는 사람들에게 해주고 싶은 말들~~~',
    link: 'https://open.spotify.com/album/1WFyYR8LCMBNnUkqUkMAy6',

    location_name: '한강공원',
    location_address: '서울특별시 영등포구',
  },
];

// ✅ PlaylistCard 데이터 (4개 이상)
const playlistCards: PlaylistCardType[] = [
  {
    type: 'pli',
    id: 9,
    user: baseUser1,
    ...baseContent,
    subtitle: 'K-Pop Best Hits',
    title: 'K-Pop 최신 인기곡 모음',
    album_art: ['https://example.com/kpop1.jpg', 'https://example.com/kpop2.jpg'],
    lyric: 'K-Pop 히트곡 모음',
    emotion: '행복',
    memo: '이 노래는 정말 감성적이에요.',
    link: 'https://music.example.com',
    isBig: true,
  },
  {
    type: 'pli',
    id: 10,
    user: baseUser2,
    ...baseContent,
    subtitle: '한국 인디 감성',
    title: '국내 인디 음악 추천',
    album_art: ['https://example.com/indie1.jpg', 'https://example.com/indie2.jpg'],
    lyric: '인디 감성을 담은 플레이리스트',
    emotion: '행복',
    memo: '이 노래는 정말 감성적이에요.',
    link: 'https://music.example.com',
    isBig: false,
  },
  {
    type: 'pli',
    id: 11,
    user: baseUser3,
    ...baseContent,
    subtitle: '재즈 & Chill',
    title: '카페에서 듣기 좋은 재즈',
    album_art: ['https://example.com/jazz1.jpg', 'https://example.com/jazz2.jpg'],
    lyric: '잔잔한 재즈 선율과 함께',
    emotion: '행복',
    memo: '이 노래는 정말 감성적이에요.',
    link: 'https://music.example.com',
    isBig: true,
  },
  {
    type: 'pli',
    id: 12,
    user: baseUser4,
    ...baseContent,
    subtitle: '운동할 때 듣기 좋은 노래',
    title: 'Workout Energy Boost',
    album_art: ['https://example.com/workout1.jpg'],
    lyric: '운동하면서 들으면 좋은 곡 모음',
    emotion: '행복',
    memo: '이 노래는 정말 감성적이에요.',
    link: 'https://music.example.com',
    isBig: false,
  },
];

// ✅ 최종 Mock Data
export const mockData: MockData = {
  notify: true,
  contents: [...noteCards, ...quoteCards, ...playlistCards],
};
