import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RootScreen from 'app/index';

const StackNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" component={RootScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
