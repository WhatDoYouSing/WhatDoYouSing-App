import React from 'react';
import { View } from 'react-native';
import { useUploadNoteNavigation } from 'navigation/UploadNoteNavigator';
import { useUploadNoteContext } from 'contexts/UploadNoteContext';
import { Header, LNB } from 'components/common';
import { UPLOAD_TAP_ITEMS } from 'constants/upload';

const UploadNoteLayout = (Component: React.ComponentType<any>) => {
  return (props: any) => {
    const { goToSearch, goToLink, goToField } = useUploadNoteNavigation();
    const { selectedTab, setSelectedTab, initField } = useUploadNoteContext();

    const onTabSelect = (tab: string) => {
      initField();
      setSelectedTab(tab);

      if (tab === UPLOAD_TAP_ITEMS[0]) {
        goToSearch(tab);
      } else if (tab === UPLOAD_TAP_ITEMS[1]) {
        goToLink(tab);
      } else if (tab === UPLOAD_TAP_ITEMS[2]) {
        goToField(tab);
      }
    };

    return (
      <View className="flex-1 bg-borderBg">
        <Header title="노트 업로드" />
        <LNB
          tabItems={UPLOAD_TAP_ITEMS}
          selectedTab={selectedTab}
          handleTabSelect={onTabSelect}
        />
        <View className="flex-1">
          <Component {...props} />
        </View>
      </View>
    );
  };
};

export default UploadNoteLayout;
