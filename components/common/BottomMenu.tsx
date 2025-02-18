import React, { useEffect, useRef } from 'react';
import { TouchableOpacity, Animated, View } from 'react-native';
import { Portal } from 'react-native-paper';
import Typo from './Typo';

interface BottomMenuProps {
  visible: boolean;
  menuItems: { label: string; action: <T extends unknown[]>(...args: T) => void }[];
  onlyCancel?: boolean;
}

const BottomMenu = ({
  visible = false,
  menuItems,
  onlyCancel = false,
}: BottomMenuProps) => {
  const slideAnim = useRef(new Animated.Value(visible ? 0 : 80)).current;

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: visible ? 0 : 80,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [visible, slideAnim]);

  return (
    <Portal>
      <Animated.View
        style={{
          transform: [{ translateY: slideAnim }],
          position: 'absolute',
          bottom: 0,
          width: '100%',
        }}
      >
        <View className="flex flex-row h-20 bg-secondaryBg border-y border-black">
          {menuItems.map(({ label, action }, index) => {
            const isLastItem = index === menuItems.length - 1;
            const isCancel = label === '취소';
            const isDelete = label === '삭제';

            return (
              <TouchableOpacity
                key={label}
                onPress={action}
                className={`flex-1 items-center py-[18] ${
                  !isLastItem ? 'border-r border-black' : ''
                } ${isCancel || isDelete ? 'bg-primaryBg' : ''}`}
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
      </Animated.View>
    </Portal>
  );
};

export default BottomMenu;
