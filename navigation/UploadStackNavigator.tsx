import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import UploadNoteScreen from 'app/upload/UploadNoteScreen';
import UploadPlaylistScreen from 'app/upload/UploadPlaylistScreen';

export type UploadStackParamList = {
  note: undefined;
  playlist: undefined;
};

const Stack = createNativeStackNavigator<UploadStackParamList>();

const UploadStackNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="note">
    <Stack.Screen name="note" component={UploadNoteScreen} />
    <Stack.Screen name="playlist" component={UploadPlaylistScreen} />
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
