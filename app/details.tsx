import { View, Text, StyleSheet } from 'react-native';
import Typo from 'components/common/Typo';

const DetailsScreen = () => {
  return (
    <View className="flex-1 items-center justify-center bg-primaryBg p-4">
      <Typo variant="text-18_SB" className="text-brand">
        안녕하세요, 여러분!
      </Typo>

      <Typo variant="text-16_M" className="text-black mt-4">
        Hello World 123
      </Typo>
    </View>
  );
};

export default DetailsScreen;
