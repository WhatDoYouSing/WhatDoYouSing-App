import { Text, View } from 'react-native';
import { forwardRef, useCallback, useMemo } from 'react';
import { BottomSheetModal } from '@gorhom/bottom-sheet';

const BottomModal = ({ ref }) => {
  const snapPoints = useMemo(() => ['25%', '50%'], []);

  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  console.log(ref);
  return (
    <BottomSheetModal
      ref={ref}
      index={1}
      snapPoints={snapPoints}
      backgroundStyle={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
      onChange={handleSheetChanges}
    >
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 16, fontWeight: '700' }}>바텀 모달</Text>
      </View>
    </BottomSheetModal>
  );
};

export default BottomModal;
