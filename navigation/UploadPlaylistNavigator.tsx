import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationProp, useNavigation } from '@react-navigation/native';

import UploadPlaylistScreen from 'app/upload/UploadPlaylistScreen';
import QuoteNoteScreen from 'app/upload/QuoteNoteScreen';
import { UploadPlaylistProvider } from 'contexts/UploadPlaylistContext';

export type UploadPlaylistStackParamList = {
  write: undefined;
  quote: undefined;
};

const NoteStack = createNativeStackNavigator<UploadPlaylistStackParamList>();

const UploadPlaylistNavigator = () => (
  <UploadPlaylistProvider>
    <NoteStack.Navigator screenOptions={{ headerShown: false }} initialRouteName="write">
      <NoteStack.Screen name="write" component={UploadPlaylistScreen} />
      <NoteStack.Screen name="quote" component={QuoteNoteScreen} />
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

  return { goToWrite, goToQuote };
};
