import 'react-native-reanimated';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import BottomNavigator from 'navigation/BottomNavigator';

const RootScreen = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheetModalProvider>
        <BottomNavigator />
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
};

export default RootScreen;
