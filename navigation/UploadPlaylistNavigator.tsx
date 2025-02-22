import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { UploadPlaylistProvider } from 'contexts/UploadPlaylistContext';

import UploadPlaylistScreen from 'app/upload/playlist/UploadPlaylistScreen';
import QuoteNoteScreen from 'app/upload/playlist/QuoteNoteScreen';
import PlaylistVisibilityScreen from 'app/upload/playlist/PlaylistVisibilityScreen';
import PlaylistTagScreen from 'app/upload/playlist/PlaylistTagScreen';

export type UploadPlaylistStackParamList = {
  write: undefined;
  quote: undefined;
  visibility: undefined;
  tag: undefined;
};

const NoteStack = createNativeStackNavigator<UploadPlaylistStackParamList>();

const UploadPlaylistNavigator = () => (
  <UploadPlaylistProvider>
    <NoteStack.Navigator screenOptions={{ headerShown: false }} initialRouteName="write">
      <NoteStack.Screen name="write" component={UploadPlaylistScreen} />
      <NoteStack.Screen name="quote" component={QuoteNoteScreen} />
      <NoteStack.Screen name="visibility" component={PlaylistVisibilityScreen} />
      <NoteStack.Screen name="tag" component={PlaylistTagScreen} />
    </NoteStack.Navigator>
  </UploadPlaylistProvider>
);

export default UploadPlaylistNavigator;

export const useUploadPlaylistNavigation = () => {
  const navigation = useNavigation<NavigationProp<UploadPlaylistStackParamList>>();

  const goToWrite = () => {
    navigation.navigate('write');
  };

  const goToQuote = () => {
    navigation.navigate('quote');
  };

  const goToVisibility = () => {
    navigation.navigate('visibility');
  };

  const goToTag = () => {
    navigation.navigate('tag');
  };

  return { goToWrite, goToQuote, goToVisibility, goToTag };
};
