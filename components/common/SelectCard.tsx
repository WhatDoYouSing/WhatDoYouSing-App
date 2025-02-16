import { View } from 'react-native';
import Typo from 'components/common/Typo';

interface SelectionCountProps {
  count: number;
}

const SelectCard = ({ count }: SelectionCountProps) => {
  if (count <= 0) return null;

  return (
    <View className="flex justify-center items-center w-full p-4 bg-borderBg">
      <Typo className="text-brand text-14_B">노트 {count}개 선택됨</Typo>
    </View>
  );
};

export default SelectCard;
