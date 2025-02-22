import Typo from '../Typo';
import { View, Image, TouchableOpacity } from 'react-native';
import { ProfileHeaderProps } from 'types/Card/CardType';
import { IcKebab, IcViewFriends, IcViewAll, IcSelectOn, IcSelectOff } from 'assets/svgs';

interface ProfileHeaderItemProps {
  item: ProfileHeaderProps;
}

const ProfileHeader = ({ item }: ProfileHeaderItemProps) => {
  const profileImages: { [key: number]: string } = {
    1: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0kSUEAi8d8cn8EaQ4pRBe4CzXBo2lH2d91g&s',
    2: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0kSUEAi8d8cn8EaQ4pRBe4CzXBo2lH2d91g&s',
    3: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0kSUEAi8d8cn8EaQ4pRBe4CzXBo2lH2d91g&s',
    4: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0kSUEAi8d8cn8EaQ4pRBe4CzXBo2lH2d91g&s',
  };

  const profileUri = profileImages[item.profile] || profileImages[1];

  return (
    <View className="flex flex-row justify-between items-center w-full px-4 py-2 gap-2">
      <View className="flex flex-row items-center gap-2">
        <Image
          className="rounded-full m-1"
          source={{ uri: profileUri }}
          style={{ width: 32, height: 32 }}
        />
        <View className="flex flex-col justify-between gap-[2px]">
          <Typo variant="text-14_M">{item.nickname}</Typo>
          <View className="flex flex-row items-center gap-1">
            <Typo variant="text-12_L">{item.created_at}</Typo>
            {item.is_updated && <Typo variant="text-12_L">(수정됨)</Typo>}
            <Typo variant="text-12_L">·</Typo>
            {item.visibility === 'friend' ? (
              <IcViewAll width={12.4} height={12.4} />
            ) : (
              <IcViewFriends width={12.4} height={12.4} />
            )}
          </View>
        </View>
      </View>

      {/* 선택 모드일 때의 설정 */}
      <TouchableOpacity onPress={() => item.toggleSelectCard?.(item.id)} className="p-2">
        {item.isSelectionMode ? (
          item.isSelected ? (
            <IcSelectOn width={24} height={24} />
          ) : (
            <IcSelectOff width={24} height={24} className="opacity-50" />
          )
        ) : (
          <IcKebab width={24} height={24} />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default ProfileHeader;
