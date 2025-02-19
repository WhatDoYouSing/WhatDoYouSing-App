import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  useNavigation,
  NavigationProp,
  NavigatorScreenParams,
} from '@react-navigation/native';

import UploadNoteNavigator, { UploadNoteStackParamList } from './UploadNoteNavigator';
import UploadPlaylistNavigator, { UploadPlaylistStackParamList } from './UploadPlaylistNavigator';

export type UploadStackParamList = {
  note: NavigatorScreenParams<UploadNoteStackParamList>;
  playlist: NavigatorScreenParams<UploadPlaylistStackParamList>;
};

const Stack = createNativeStackNavigator<UploadStackParamList>();

const UploadStackNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="note">
    <Stack.Screen name="note" component={UploadNoteNavigator} />
    <Stack.Screen name="playlist" component={UploadPlaylistNavigator} />
  </Stack.Navigator>
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
