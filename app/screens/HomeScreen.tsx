import { Button, Text, View } from 'react-native';
import { Typo } from 'components/common';
import { useCallback, useRef } from 'react';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import BottomModal from 'components/common/BottomModal';

const HomeScreen = () => {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const handleClosePress = () => bottomSheetModalRef.current?.close();
  const handleOpenPress = () => bottomSheetModalRef.current?.present();

  return (
    <View>
      <Typo variant="text-18_SB" className="text-brand">
        Home
      </Typo>
      <Button onPress={handleOpenPress} title="open" />
      <BottomModal ref={bottomSheetModalRef} />
      <Text>바텀 모달 아래</Text>
    </View>
  );
};

export default HomeScreen;
