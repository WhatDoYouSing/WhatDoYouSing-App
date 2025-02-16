import { View } from 'react-native';
import { FilterTags, Typo } from 'components/common';

const HomeScreen = () => {
  return (
    <View>
      <Typo variant="text-18_SB" className="text-brand">
        Home
      </Typo>
      <FilterTags />
    </View>
  );
};

export default HomeScreen;
