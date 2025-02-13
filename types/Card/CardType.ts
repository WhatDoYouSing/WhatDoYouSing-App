export interface UserType {
  id: number;
  username: string;
  nickname: string;
  profile: number;
}

export interface BaseContent {
  type: string;
  id: number;
  user: UserType;
  created_at: string;
  is_updated: boolean;
  visibility: string;
  emotion?: string | null;
  subtitle: string;
  title: string;
  album_art?: string;
  memo: string;
  link?: string;
}

// NoteCard 타입
export interface NoteCardType extends BaseContent {
  location_name?: string;
  location_address?: string;
  lyric: string;
  singer: string;

  isBig?: boolean;
  isLocation?: boolean;
}

// QuoteCard 타입
export interface QuoteCardType extends BaseContent {
  location_name?: string;
  location_address?: string;
  lyric: string;
  singer: string;

  isMy?: boolean;
  isClicked?: boolean;
}

// PlaylistCard 타입
export interface PlaylistCardType extends Omit<BaseContent, 'album_art'> {
  album_art: string[];
  lyric: string;

  isBig?: boolean;
}

// ✅ 프로필 헤더
export interface ProfileHeaderProps {
  profile: number;
  nickname: string;
  created_at: string;
  is_updated?: boolean;
}

export interface SongInfoProps {
  album_art: string;
  title: string;
  singer: string;
  lyric: string;
  isBig?: boolean;
}

export interface PlaylistInfoProps {
  album_art: string[];
  title: string;
  lyric: string;
  isBig?: boolean;
}

// Mock Data 전체 타입
export interface MockData {
  notify: boolean;
  contents: (NoteCardType | QuoteCardType | PlaylistCardType)[];
}

//-----------------------------------------

export interface DashedBorderProps {
  children: React.ReactNode;
  borderColor?: string;
  borderWidth?: number;
  borderRadius?: number;
  dashArray?: string; // 예: "10,5" → dash 길이 10, 간격 5
  className?: string;
}
