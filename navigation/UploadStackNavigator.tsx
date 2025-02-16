import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  useNavigation,
  NavigationProp,
  NavigatorScreenParams,
} from '@react-navigation/native';
import UploadPlaylistScreen from 'app/upload/UploadPlaylistScreen';
import UploadNoteNavigator, { UploadNoteStackParamList } from './UploadNoteNavigator';
import { UploadNoteProvider } from 'contexts/UploadNoteContext';

export type UploadStackParamList = {
  note: NavigatorScreenParams<UploadNoteStackParamList>;
  playlist: undefined;
};

const Stack = createNativeStackNavigator<UploadStackParamList>();

const UploadStackNavigator = () => (
  <UploadNoteProvider>
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="note">
      <Stack.Screen name="note" component={UploadNoteNavigator} />
      <Stack.Screen name="playlist" component={UploadPlaylistScreen} />
    </Stack.Navigator>
  </UploadNoteProvider>
);

export default UploadStackNavigator;

export const useUploadNavigation = () => {
  const navigation = useNavigation<NavigationProp<UploadStackParamList>>();

  const goToNote = () => {
    navigation.navigate('note');
  };

  const goToPlaylist = () => {
    navigation.navigate('playlist');
  };

  return { goToNote, goToPlaylist };
};
