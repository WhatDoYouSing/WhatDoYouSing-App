import { View, Text, StyleSheet } from 'react-native';
import CustomText from 'components/common/CustomText';

const DetailsScreen = () => {
  return (
    <View className="flex-1 items-center justify-center bg-primaryBg p-4">
      <CustomText variant="text-18_SB" className="text-brand">
        안녕하세요, 여러분!
      </CustomText>

      <CustomText variant="text-16_M" className="text-black mt-4">
        Hello World 123
      </CustomText>
    </View>
  );
};

export default DetailsScreen;
