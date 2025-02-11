import { View, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { IcArrowLeft, IcCalendarOff, IcCalendarOn, IcSearch } from 'assets/svgs';
import Typo from './Typo';

interface HeaderProps {
  title: string;
  type?: 'button' | 'icon' | 'non-icon' | 'non-back' | 'my';
  onBtnClick?: () => void;
  isBtnActive?: boolean;
  isCalendarActive?: boolean;
}

const Header = ({
  title,
  type = 'non-icon',
  onBtnClick,
  isBtnActive = false,
  isCalendarActive = false,
}: HeaderProps) => {
  const router = useRouter();
  return (
    <View className="w-full pt-12 bg-primaryBg border-b border-black">
      <View className="relative flex flex-row justify-center items-center h-[60]">
        {(type === 'button' || type === 'icon' || type === 'non-icon') && (
          <TouchableOpacity
            className="absolute left-4 flex items-center justify-center w-10 h-10"
            onPress={() => router.back()}
          >
            <IcArrowLeft />
          </TouchableOpacity>
        )}
        {type === 'my' && (
          <TouchableOpacity
            className="absolute left-4 flex items-center justify-center w-10 h-10"
            onPress={onBtnClick}
          >
            {isCalendarActive ? <IcCalendarOn /> : <IcCalendarOff />}
          </TouchableOpacity>
        )}

        <Typo variant={'text-18_SB'} className="text-black">
          {title}
        </Typo>

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
        {(type === 'icon' || type === 'my' || type === 'non-back') && (
          <TouchableOpacity className="absolute right-4 flex items-center justify-center w-10 h-10">
            <IcSearch />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default Header;
