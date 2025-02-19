import { View, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { IcArrowLeft, IcCalendarOff, IcCalendarOn, IcSearch } from 'assets/svgs';
import Typo from './Typo';

interface HeaderProps {
  title: string;
  type?: 'button' | 'icon' | 'non-icon' | 'non-back' | 'my';
  handleBack?: () => void;
  onBtnClick?: () => void;
  isBtnActive?: boolean;
  isCalendarActive?: boolean;
}

const Header = ({
  title,
  type = 'non-icon',
  handleBack,
  onBtnClick,
  isBtnActive = false,
  isCalendarActive = false,
}: HeaderProps) => {
  const router = useRouter();

  const showBackIcon = ['button', 'icon', 'non-icon'].includes(type);
  const showSearchIcon = ['icon', 'my', 'non-back'].includes(type);

  const onBack = () => {
    if (handleBack) handleBack();
    else router.back();
  };

  return (
    <View className="w-full pt-12 bg-primaryBg border-b border-black">
      <View className="relative flex flex-row justify-center items-center h-[60]">
        {showBackIcon && (
          <TouchableOpacity
            className="absolute left-4 flex items-center justify-center w-10 h-10"
            onPress={onBack}
          >
            <IcArrowLeft width={24} height={24} />
          </TouchableOpacity>
        )}

        {type === 'my' && (
          <TouchableOpacity
            className="absolute left-4 flex items-center justify-center w-10 h-10"
            onPress={onBtnClick}
          >
            {isCalendarActive ? (
              <IcCalendarOn width={24} height={24} />
            ) : (
              <IcCalendarOff width={24} height={24} />
            )}
          </TouchableOpacity>
        )}

        <Typo variant={'text-18_SB'}>{title}</Typo>

        {showSearchIcon && (
          <TouchableOpacity className="absolute right-4 flex items-center justify-center w-10 h-10">
            <IcSearch width={24} height={24} />
          </TouchableOpacity>
        )}

        {type === 'button' && (
          <TouchableOpacity
            className={`absolute right-4 py-2 px-3 rounded border ${isBtnActive ? 'border-black' : 'border-nonActiveGrey'}`}
            onPress={onBtnClick}
          >
            <Typo
              variant={'text-16_M'}
              className={`${isBtnActive ? 'text-black' : 'text-nonActiveGrey'}`}
            >
              편집
            </Typo>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default Header;
