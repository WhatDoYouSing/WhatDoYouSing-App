import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CommonActions } from '@react-navigation/native';
import { IcCommunity, IcMy, IcRecord, IcUpload } from 'assets/svgs';
import colors from 'styles/colors';

import HomeScreen from 'app/home/HomeScreen';
import RecordScreen from 'app/record/RecordScreen';
import UploadStackNavigator from './UploadStackNavigator';
import MyScreen from 'app/my/MyScreen';

const TAB_SCREENS = [
  { name: 'community', component: HomeScreen, icon: IcCommunity },
  { name: 'record', component: RecordScreen, icon: IcRecord },
  { name: 'upload', component: UploadStackNavigator, icon: IcUpload },
  { name: 'my', component: MyScreen, icon: IcMy, isLast: true },
];

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
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
          options={{
            tabBarIcon: ({ color }) => icon({ fill: color, width: 24, height: 24 }),
            tabBarItemStyle: isLast ? styles.lastTabItem : styles.tabItem,
          }}
          // 탭 클릭 시 스택 네비게이터 초기화
          listeners={({ navigation, route }) => ({
            tabPress: () => {
              navigation.dispatch(
                CommonActions.reset({
                  index: 0,
                  routes: [{ name: route.name }],
                })
              );
              navigation.navigate(route.name);
            },
          })}
        />
      ))}
    </Tab.Navigator>
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
    width: 40,
    height: 40,
  },
});

export default BottomNavigator;
