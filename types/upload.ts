export interface UploadNoteFieldType {
  album_art?: string; // 앨범 아트
  song_title: string; // 노래 제목
  artist: string; // 가수 이름
  lyrics?: string[]; // 가사
  location_name?: string; // 장소명
  location_address?: string; // 장소 주소
  emotion: number | string; // 감정
  memo: string; // 노트 내용
  visibility: string; // 공개 범위
  youtube_link?: string; // 유튜브 링크
  spotify_link?: string; // 스포티파이 링크
}

export interface MusicInfoType {
  albumCover: string;
  artist: string;
  song: string;
}
