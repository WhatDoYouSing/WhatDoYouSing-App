import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';
import { IcCommunity, IcMy, IcRecord, IcUpload } from 'assets/svgs';

import HomeScreen from 'app/screens/HomeScreen';
import RecordScreen from 'app/screens/RecordScreen';
import UploadScreen from 'app/screens/UploadScreen';
import MyScreen from 'app/screens/MyScreen';

const colors = {
  secondaryBg: '#F5EDF0',
  black: '#33292C',
};

const TAB_SCREENS = [
  { name: 'community', component: HomeScreen, icon: IcCommunity },
  { name: 'record', component: RecordScreen, icon: IcRecord },
  { name: 'upload', component: UploadScreen, icon: IcUpload },
  { name: 'my', component: MyScreen, icon: IcMy, isLast: true },
];

const BottomNavigator = () => {
  const Tab = createBottomTabNavigator();

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
            tabBarIcon: ({ color }) => icon({ fill: color }),
            tabBarItemStyle: isLast ? styles.lastTabItem : styles.tabItem,
          }}
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
  },
});

export default BottomNavigator;
