// useScrollToTop.ts
import { useRef } from 'react';
import { FlatList } from 'react-native';

export const useScrollToTop = <T>() => {
  const flatListRef = useRef<FlatList<T>>(null);

  const scrollToTop = () => {
    flatListRef.current?.scrollToOffset({ offset: 0, animated: true });
  };

  return { flatListRef, scrollToTop };
};
