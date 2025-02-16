import { View, Text } from 'react-native';
import Typo from '../Typo';

interface ChipProps {
  size?: 'small' | 'big';
  text: string;
}

const Chip = ({ size = 'small', text }: ChipProps) => {
  return (
    <View className="flex flex-row">
      <View className="inline-flex px-1 pt-[2px] pb-[1px] border-dashed border-[0.5px] border-black rounded-sm">
        <Typo variant={size === 'small' ? 'text-12_L' : 'text-14_L'}>{text}</Typo>
      </View>
    </View>
  );
};

export default Chip;
