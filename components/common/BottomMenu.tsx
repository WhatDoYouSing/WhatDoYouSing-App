import React, { useEffect } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Typo from './Typo';
import { styles } from 'navigation/BottomNavigator';

interface BottomMenuProps {
  menuItems: { label: string; action: <T extends unknown[]>(...args: T) => void }[];
  onlyCancel?: boolean;
}

const BottomMenu = ({ menuItems, onlyCancel = false }: BottomMenuProps) => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ tabBarStyle: { display: 'none' } });
    return () => navigation.setOptions({ tabBarStyle: styles.tabBar });
  }, [navigation]);

  return (
    <View className="absolute bottom-0 flex flex-row w-full h-[82] bg-secondaryBg border-t border-b border-black">
      {menuItems.map(({ label, action }, index) => {
        const isLastItem = index === menuItems.length - 1;
        const isCancel = label === '취소';
        const isDelete = label === '삭제';

        return (
          <TouchableOpacity
            key={label}
            className={`flex-1 items-center py-[18]
              ${isLastItem || 'border-r border-black'}
              ${(isCancel || isDelete) && 'bg-primaryBg'}`}
            onPress={action}
          >
            <Typo
              variant="text-16_SB"
              className={
                isDelete || onlyCancel
                  ? 'text-brand'
                  : isCancel
                    ? 'text-grey'
                    : 'text-black'
              }
            >
              {label}
            </Typo>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default BottomMenu;
