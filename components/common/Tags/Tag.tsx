import { TouchableOpacity, View } from 'react-native';
import Typo from '../Typo';
import { cn } from 'utils/cn';

interface TagProp {
  size?: 'big' | 'small';
  text: string;
  count?: number;
  isSelected?: boolean;
  onPress?: () => void;
}

const Tag = ({ size = 'small', text, count, isSelected, onPress }: TagProp) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        className={cn(
          size === 'small'
            ? 'px-[10px] pt-2 pb-[7px] rounded-[2px]'
            : 'px-[10px] pt-[10px] pb-[9px] border-[1px] border-black rounded-[2px]',
          isSelected ? 'bg-black' : 'bg-secondaryBg'
        )}
      >
        <Typo
          variant={size === 'small' ? 'text-12_SB' : 'text-16_M'}
          className={cn(isSelected ? 'text-secondaryBg' : 'text-Black')}
        >
          {text}
        </Typo>
        {size === 'big' && (
          <Typo variant="text-16_M" className="ml-1">
            {count}
          </Typo>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default Tag;
