import { TouchableOpacity } from 'react-native';
import { IcTop } from 'assets/svgs';

interface ScrollTopBtnProps {
  onPress: () => void;
}

const ScrollTopBtn = ({ onPress }: ScrollTopBtnProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="absolute z-15 bottom-4 right-4 rounded-sm bg-primaryBg border border-black p-2 w-10 h-10"
    >
      <IcTop width={24} height={24} />
    </TouchableOpacity>
  );
};

export default ScrollTopBtn;
