import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';
import { IcCommunity, IcMy, IcRecord, IcUpload } from 'assets/svgs';

import HomeScreen from 'app/screens/HomeScreen';
import RecordScreen from 'app/screens/RecordScreen';
import UploadScreen from 'app/screens/UploadScreen';
import MyScreen from 'app/screens/MyScreen';

const BottomNavigator = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName="community"
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: styles.activeColor.color,
        tabBarActiveBackgroundColor: styles.activeBg.backgroundColor,
        tabBarInactiveTintColor: styles.inactiveColor.color,
        tabBarItemStyle: styles.tabItem,
        tabBarIconStyle: styles.tabIcon,
      }}
    >
      <Tab.Screen
        name="community"
        component={HomeScreen}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ color }) => <IcCommunity fill={color} />,
        }}
      />
      <Tab.Screen
        name="record"
        component={RecordScreen}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ color }) => <IcRecord fill={color} />,
        }}
      />
      <Tab.Screen
        name="upload"
        component={UploadScreen}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ color }) => <IcUpload fill={color} />,
        }}
      />
      <Tab.Screen
        name="my"
        component={MyScreen}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ color }) => <IcMy fill={color} />,
          tabBarItemStyle: styles.lastTabItem,
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#F5EDF0',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#33292C',
    height: 80,
  },
  activeColor: {
    color: '#F5EDF0',
  },
  activeBg: {
    backgroundColor: '#33292C',
  },
  inactiveColor: {
    color: '#33292C',
  },
  tabItem: {
    borderRightWidth: 1,
    borderColor: '#33292C',
  },
  lastTabItem: {
    borderRightWidth: 0,
  },
  tabIcon: {
    paddingTop: 3,
  },
});

export default BottomNavigator;
