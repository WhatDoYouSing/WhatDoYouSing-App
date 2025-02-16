import { TouchableOpacity, View } from 'react-native';
import Typo from '../Typo';
import { cn } from 'utils/cn';

interface TagProps {
  size?: 'small' | 'big';
  text: string;
  count?: number;
  isSelected?: boolean;
  onPress?: () => void;
}

const Tag = ({ size = 'small', text, count, isSelected, onPress }: TagProps) => {
  const isBig = size === 'big';

  return (
    <TouchableOpacity onPress={onPress}>
      <View
        className={cn(
          'flex-row items-baseline',
          isBig
            ? 'px-[10px] pb-[8px] border-[1px] border-black rounded-[2px]'
            : 'px-[10px] pt-2 pb-[7px] rounded-[2px]',
          isSelected ? 'bg-black' : 'bg-secondaryBg',
          count ? 'pt-[10px]' : 'pt-[11px]'
        )}
      >
        <Typo
          variant={isBig ? 'text-16_M' : 'text-12_SB'}
          className={cn(
            isBig ? 'leading-[18px]' : 'leading-[14px]',
            isSelected ? 'text-secondaryBg' : 'text-black'
          )}
        >
          {text}
        </Typo>
        {isBig && (
          <Typo
            variant="text-16_M"
            className={cn(
              isBig ? 'leading-[18px]' : 'leading-[14px]',
              isSelected ? 'text-secondaryBg' : 'text-Black',
              count ? 'ml-1 ' : ''
            )}
          >
            {count}
          </Typo>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default Tag;
