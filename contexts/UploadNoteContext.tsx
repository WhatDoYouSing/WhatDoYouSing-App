import React, { createContext, useContext, useState, ReactNode } from 'react';
import { UPLOAD_TAP_ITEMS, VISIBILITY_OPTIONS } from 'constants/upload';
import { MusicInfoType, UploadNoteFieldType } from 'types/upload';

interface UploadNoteContextType {
  selectedTab: string;
  setSelectedTab: (tab: string) => void;
  field: UploadNoteFieldType;
  setField: (field: UploadNoteFieldType) => void;
  selectedMusic: MusicInfoType;
  initField: () => void;
}

const initialField: UploadNoteFieldType = {
  album_art: '',
  song_title: '',
  artist: '',
  lyrics: [],
  memo: '',
  location_name: '',
  location_address: '',
  emotion: 0,
  visibility: VISIBILITY_OPTIONS[0].label,
  youtube_link: '',
  spotify_link: '',
};

const UploadNoteContext = createContext<UploadNoteContextType | undefined>(undefined);

export const UploadNoteProvider = ({ children }: { children: ReactNode }) => {
  const [selectedTab, setSelectedTab] = useState(UPLOAD_TAP_ITEMS[0]);
  const [field, setField] = useState<UploadNoteFieldType>(initialField);

  const initField = () => {
    setField(initialField);
  };

  const selectedMusic = {
    albumCover: field.album_art,
    artist: field.artist,
    song: field.song_title,
  };

  return (
    <UploadNoteContext.Provider
      value={{ selectedTab, setSelectedTab, field, setField, selectedMusic, initField }}
    >
      {children}
    </UploadNoteContext.Provider>
  );
};

export const useUploadNoteContext = () => {
  const context = useContext(UploadNoteContext);
  if (!context) {
    throw new Error('useUploadNoteContext must be used within a UploadNoteProvider');
  }
  return context;
};
