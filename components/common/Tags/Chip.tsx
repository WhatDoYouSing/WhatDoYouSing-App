import { View } from 'react-native';
import Typo from '../Typo';
import DashedBorder from '../Card/DashedBorder';

interface ChipProps {
  size?: 'small' | 'big';
  text: string;
}

const Chip = ({ size = 'small', text }: ChipProps) => {
  return (
    <DashedBorder
      className="inline-flex w-fit h-fit rounded-sm"
      borderWidth={0.5}
      dashArray="4,2"
    >
      <View className="px-1 pt-[2px] pb-[1px]">
        <Typo variant={size === 'small' ? 'text-12_L' : 'text-14_L'}>{text}</Typo>
      </View>
    </DashedBorder>
  );
};

export default Chip;
