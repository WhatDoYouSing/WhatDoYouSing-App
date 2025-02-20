import { useEffect, useState } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import '../global.css';
import BottomNavigator from 'navigation/BottomNavigator';
import { Provider } from 'react-native-paper';
import { ToastProvider } from 'contexts/ToastContext';

// 로딩 중 화면 유지
SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [fontsLoaded] = useFonts({
    'GothicA1-Regular': require('@expo-google-fonts/gothic-a1/GothicA1_400Regular.ttf'),
    'GothicA1-Bold': require('@expo-google-fonts/gothic-a1/GothicA1_700Bold.ttf'),
    'GothicA1-Light': require('@expo-google-fonts/gothic-a1/GothicA1_300Light.ttf'),
    'GothicA1-SemiBold': require('@expo-google-fonts/gothic-a1/GothicA1_600SemiBold.ttf'),
    'GothicA1-Medium': require('@expo-google-fonts/gothic-a1/GothicA1_500Medium.ttf'),
    MinSansVF: require('../assets/fonts/MinSansVF.ttf'),
  });

  const [appReady, setAppReady] = useState(false);

  useEffect(() => {
    if (fontsLoaded) {
      setAppReady(true);
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!appReady) {
    return null;
  }

  return (
    <Provider>
      <ToastProvider>
        <BottomNavigator />
      </ToastProvider>
    </Provider>
  );
};

export default RootLayout;
