import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

import UploadNoteLayout from 'app/upload/note/UploadNoteLayout';
import SearchMusicScreen from 'app/upload/note/SearchMusicScreen';
import SelectLyricScreen from 'app/upload/note/SelectLyricScreen';
import UploadLinkScreen from 'app/upload/note/UploadLinkScreen';
import UploadFieldScreen from 'app/upload/note/UploadFieldScreen';
import UploadTagScreen from 'app/upload/note/UploadTagScreen';
import { UploadNoteProvider } from 'contexts/UploadNoteContext';

export type UploadNoteStackParamList = {
  search: { selectedTab: string };
  select: { selectedTab: string };
  link: { selectedTab: string };
  field: { selectedTab: string };
  tag: { selectedTab: string };
};

const NoteStack = createNativeStackNavigator<UploadNoteStackParamList>();

const UploadNoteNavigator = () => (
  <UploadNoteProvider>
    <NoteStack.Navigator screenOptions={{ headerShown: false }} initialRouteName="search">
      <NoteStack.Screen name="search" component={UploadNoteLayout(SearchMusicScreen)} />
      <NoteStack.Screen name="select" component={UploadNoteLayout(SelectLyricScreen)} />
      <NoteStack.Screen name="link" component={UploadNoteLayout(UploadLinkScreen)} />
      <NoteStack.Screen name="field" component={UploadNoteLayout(UploadFieldScreen)} />
      <NoteStack.Screen name="tag" component={UploadNoteLayout(UploadTagScreen)} />
    </NoteStack.Navigator>
  </UploadNoteProvider>
);

export default UploadNoteNavigator;

export const useUploadNoteNavigation = () => {
  const navigation = useNavigation<StackNavigationProp<UploadNoteStackParamList>>();

  const replaceSearch = (selectedTab: string) => {
    navigation.replace('search', { selectedTab });
  };

  const goToSelect = (selectedTab: string) => {
    navigation.navigate('select', { selectedTab });
  };

  const replaceLink = (selectedTab: string) => {
    navigation.replace('link', { selectedTab });
  };

  const goToField = (selectedTab: string) => {
    navigation.navigate('field', { selectedTab });
  };

  const replaceField = (selectedTab: string) => {
    navigation.replace('field', { selectedTab });
  };

  const goToTag = (selectedTab: string) => {
    navigation.navigate('tag', { selectedTab });
  };

  return { replaceSearch, goToSelect, replaceLink, goToField, replaceField, goToTag };
};
