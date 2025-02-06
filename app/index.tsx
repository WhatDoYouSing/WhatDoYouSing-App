import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '../styles/ThemeProvider';

export default function HomeScreen() {
  const { colors, globalStyles } = useTheme();

  return (
    <View style={styles.container}>
      <Text style={globalStyles.basicText}>Home</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
