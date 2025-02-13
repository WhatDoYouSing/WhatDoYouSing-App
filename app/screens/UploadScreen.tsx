import { View } from 'react-native';
import { Header, LNB } from 'components/common';
import { useTabMenu } from 'hooks/useTabMenu';
import SearchMusic from 'components/upload/SearchMusic';
import SelectLyric from 'components/upload/SelectLyric';

const UploadScreen = () => {
  const MENU_ITEMS = ['음원', '유튜브', '직접'];
  const { menuItems, selectedItem, handleMenuSelect } = useTabMenu(MENU_ITEMS);

  return (
    <View className="flex-1 bg-borderBg">
      <Header title="노트 업로드" />
      <LNB {...{ menuItems, selectedItem, handleMenuSelect }} />
      <SearchMusic />
    </View>
  );
};

export default UploadScreen;
