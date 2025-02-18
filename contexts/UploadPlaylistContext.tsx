import React, { createContext, useContext, useState, ReactNode } from 'react';
import { QuoteCardType } from 'types/Card/CardType';
import { VISIBILITY_OPTIONS } from 'constants/upload';

interface QuotedNoteType {
  note: QuoteCardType;
  memo?: string;
}

interface UploadPlaylistField {
  title: string;
  visibility: string;
}

interface UploadPlaylistContextType {
  quotedNotes: QuotedNoteType[];
  setQuotedNotes: React.Dispatch<React.SetStateAction<QuotedNoteType[]>>;
  field: UploadPlaylistField;
  setField: React.Dispatch<React.SetStateAction<UploadPlaylistField>>;
}

const UploadPlaylistContext = createContext<UploadPlaylistContextType | undefined>(
  undefined
);

export const UploadPlaylistProvider = ({ children }: { children: ReactNode }) => {
  const [quotedNotes, setQuotedNotes] = useState<QuotedNoteType[]>([]);
  const [field, setField] = useState({
    title: '',
    visibility: VISIBILITY_OPTIONS[0].label,
  });

  return (
    <UploadPlaylistContext.Provider
      value={{ quotedNotes, setQuotedNotes, field, setField }}
    >
      {children}
    </UploadPlaylistContext.Provider>
  );
};

export const useUploadPlaylistContext = () => {
  const context = useContext(UploadPlaylistContext);
  if (!context) {
    throw new Error(
      'useUploadPlaylistContext must be used within a UploadPlaylistProvider'
    );
  }
  return context;
};
