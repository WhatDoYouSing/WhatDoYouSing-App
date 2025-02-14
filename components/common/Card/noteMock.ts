import { UserType } from 'types/Card/CardType';

const baseUser1: UserType = {
  id: 101,
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
const baseNote = {
  created_at: '2024-08-18 23:09',
  is_updated: false,
  visibility: 'public',
  emotion: '행복',
  subtitle: 'Graveyard - Stripped Halsey',
  title: "Oh, 'cause I keep diggin' myself down deeper I won't...",
  album_art: 'https://~~',
  memo: '약간 비 오는 날 공부하면서 듣기 좋은 노래\n할시 노래 중에 저는 이게 제일 좋더라구요',
  link: '',
};

export const mockData = {
  notify: true,
  contents: [
    {
      type: 'note',
      id: 1,
      user: baseUser1,
      ...baseNote,
      isBig: true,
      isLocation: false,
    },
    {
      type: 'quote',
      id: 5,
      user: baseUser1,
      ...baseNote,
      isMy: true,
      isClicked: false,
    },
    {
      type: 'pli',
      id: 4,
      user: baseUser2,
      created_at: '2024-08-18 23:09',
      is_updated: true,
      visibility: 'friends',
      emotion: null,
      subtitle: '플리 1 · 플리 2',
      title: '플리 1: 봄의 노래들',
      album_art: 'https://~~',
      memo: "저희 '플리' 입니다! 다양한 노래들을 모아서 만들어본 플리입니다.",
      link: '',
    },
  ],
};
