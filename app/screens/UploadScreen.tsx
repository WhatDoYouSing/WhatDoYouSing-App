import { View } from 'react-native';
import { Header, LNB } from 'components/common';
import useTab from 'hooks/useTab';
import SearchMusic from 'components/upload/SearchMusic';
import SelectLyric from 'components/upload/SelectLyric';

const UploadScreen = () => {
  const TAP_ITEMS = ['음원', '유튜브', '직접'];
  const { tabItems, selectedItem, handleTabSelect } = useTab(TAP_ITEMS);

  return (
    <View className="flex-1 bg-borderBg">
      <Header title="노트 업로드" />
      <LNB {...{ tabItems, selectedItem, handleTabSelect }} />
      <SearchMusic />
      {/* <SelectLyric /> */}
    </View>
  );
};

export default UploadScreen;
