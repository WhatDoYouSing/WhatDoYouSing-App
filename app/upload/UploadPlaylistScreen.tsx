import { View } from 'react-native';
import { Header, LNB } from 'components/common';
import useTab from 'hooks/useTab';
import UploadTag from 'components/upload/UploadTag';

const UploadPlaylistScreen = () => {
  const TAP_ITEMS = ['음원', '유튜브', '직접'];
  const { tabItems, selectedTab, handleTabSelect } = useTab(TAP_ITEMS);

  return (
    <View className="flex-1 bg-borderBg">
      <Header title="노트 업로드" />
      <LNB {...{ tabItems, selectedTab, handleTabSelect }} />

      <UploadTag />
    </View>
  );
};

export default UploadPlaylistScreen;
