import { View } from 'react-native';
import { Header, LNB } from 'components/common';
import useTab from 'hooks/useTab';
import SearchMusic from 'components/upload/SearchMusic';
import SelectLyric from 'components/upload/SelectLyric';
import UploadField from 'components/upload/UploadField';
import UploadLink from 'components/upload/UploadLink';

const UploadScreen = () => {
  const TAP_ITEMS = ['음원', '유튜브', '직접'];
  const { tabItems, selectedTab, handleTabSelect } = useTab(TAP_ITEMS);

  return (
    <View className="flex-1 bg-borderBg">
      <Header title="노트 업로드" />
      <LNB {...{ tabItems, selectedTab, handleTabSelect }} />
      {/* <SearchMusic /> */}
      {/* <SelectLyric /> */}
      <UploadField tab={selectedTab} />
      {/* <UploadLink /> */}
    </View>
  );
};

export default UploadScreen;
