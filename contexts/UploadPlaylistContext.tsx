import React, { createContext, useContext, useState, ReactNode } from 'react';
import { QuoteCardType } from 'types/Card/CardType';

interface QuotedNoteType {
  note: QuoteCardType;
  memo?: string;
}

interface UploadPlaylistContextType {
  quotedNotes: QuotedNoteType[];
  setQuotedNotes: React.Dispatch<React.SetStateAction<QuotedNoteType[]>>;
}

const UploadPlaylistContext = createContext<UploadPlaylistContextType | undefined>(
  undefined
);

export const UploadPlaylistProvider = ({ children }: { children: ReactNode }) => {
  const [quotedNotes, setQuotedNotes] = useState<QuotedNoteType[]>([]);

  return (
    <UploadPlaylistContext.Provider value={{ quotedNotes, setQuotedNotes }}>
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
