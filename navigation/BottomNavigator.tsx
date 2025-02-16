import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  NavigationProp,
  useNavigation,
  NavigatorScreenParams,
  CommonActions,
} from '@react-navigation/native';
import { IcCommunity, IcMy, IcRecord, IcUpload } from 'assets/svgs';
import colors from 'styles/colors';

import HomeScreen from 'app/home/HomeScreen';
import RecordScreen from 'app/record/RecordScreen';
import UploadStackNavigator, { UploadStackParamList } from './UploadStackNavigator';
import MyScreen from 'app/my/MyScreen';
import UploadOptionModal from 'components/upload/UploadOptionModal';

type TabParamList = {
  community: undefined;
  record: undefined;
  upload: NavigatorScreenParams<UploadStackParamList>;
  my: undefined;
};

const TAB_SCREENS = [
  { name: 'community', component: HomeScreen, icon: IcCommunity },
  { name: 'record', component: RecordScreen, icon: IcRecord },
  { name: 'upload', component: UploadStackNavigator, icon: IcUpload },
  { name: 'my', component: MyScreen, icon: IcMy, isLast: true },
];

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  const [isUploadModalVisible, setUploadModalVisible] = useState(false);
  const navigation = useNavigation<NavigationProp<TabParamList>>();

  // 업로드 옵션 모달에서 옵션을 선택했을 때 해당 화면으로 이동
  const handleUploadOptionSelect = (optionScreen: keyof UploadStackParamList) => {
    setUploadModalVisible(false);

    const uploadParams =
      optionScreen === 'note'
        ? {
            screen: 'note',
            params: { screen: optionScreen, params: { selectedTab: '음원' } },
          }
        : { screen: optionScreen };

    // 업로드 내부 스택 네비게이터 모두 초기화
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [
          {
            name: 'upload',
            params: uploadParams,
          },
        ],
      })
    );
  };

  return (
    <>
      <Tab.Navigator
        initialRouteName="community"
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: styles.tabBar,
          tabBarActiveTintColor: colors.secondaryBg,
          tabBarInactiveTintColor: colors.black,
          tabBarActiveBackgroundColor: colors.black,
          tabBarIconStyle: styles.tabIcon,
        }}
      >
        {TAB_SCREENS.map(({ name, component, icon, isLast }) => (
          <Tab.Screen
            key={name}
            name={name}
            component={component}
            options={() => ({
              unmountOnBlur: true, // 해당 탭이 포커스를 잃을 때 컴포넌트를 자동으로 언마운트
              tabBarIcon: ({ color }) => icon({ fill: color }),
              tabBarItemStyle: { borderRightWidth: 1, height: 80 },
            })}
            listeners={({ route }) => ({
              tabPress: (e: any) => {
                if (route.name === 'upload') {
                  e.preventDefault();
                  setUploadModalVisible(true);
                }
              },
            })}
          />
        ))}
      </Tab.Navigator>

      {/* 업로드 옵션 선택 모달 */}
      <UploadOptionModal
        visible={isUploadModalVisible}
        onSelect={handleUploadOptionSelect}
        onClose={() => setUploadModalVisible(false)}
      />
    </>
  );
};

export const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.secondaryBg,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: colors.black,
    height: 82,
  },
  tabItem: {
    borderRightWidth: 1,
    borderColor: colors.black,
    height: 80,
  },
  lastTabItem: {
    borderRightWidth: 0,
    height: 80,
  },
  tabIcon: {
    marginTop: 3,
  },
});

export default BottomNavigator;
