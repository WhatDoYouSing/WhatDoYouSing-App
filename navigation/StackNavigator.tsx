import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomNavigator from './BottomNavigator';

const StackNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" component={BottomNavigator} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
