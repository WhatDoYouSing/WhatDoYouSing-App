import Typo from '../Typo';
import { Img } from '../Img';
import { View, Image } from 'react-native';

import { IcKebab, IcViewFriends } from 'assets/svgs';

interface ProfileHeaderProps {
  profileImage: string;
  name: string;
  dateTime: string;
}

const ProfileHeader = ({
  profileImage,
  name,
  dateTime,
}: ProfileHeaderProps): JSX.Element => {
  const defaultProfile =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0kSUEAi8d8cn8EaQ4pRBe4CzXBo2lH2d91g&s';

  return (
    <div className="header flex justify-between items-center w-full px-4 py-2 gap-2">
      <div className="flex items-center gap-2">
        <Image
          className="profile rounded-full w-10 h-10"
          source={{ uri: profileImage || defaultProfile }}
          style={{ width: 40, height: 40 }}
        />
        <div className="flex flex-col justify-between">
          <Typo variant="text-14_M">{name}</Typo>
          <div className="flex items-center gap-1">
            <Typo variant="text-12_L">{dateTime}</Typo>
            <Typo variant="text-12_L">(수정됨)</Typo>
            <Typo variant="text-12_L">·</Typo>
            <IcViewFriends width={12.4} height={12.4} />
          </div>
        </div>
      </div>
      <IcKebab width={24} height={24} />
    </div>
  );
};

export default ProfileHeader;
