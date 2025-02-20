import React, { useEffect, useRef } from 'react';
import { Animated, TouchableOpacity, View } from 'react-native';
import Typo from './Typo';
import { IcX } from 'assets/svgs';

interface ToastProps {
  message: string;
  onHide: () => void;
}

const Toast = ({ message, onHide }: ToastProps) => {
  const translateY = useRef(new Animated.Value(50)).current;
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // 토스트가 올라오는 애니메이션
    Animated.parallel([
      Animated.timing(translateY, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start();

    // 일정 시간이 지난 후 토스트가 위로 사라지는 애니메이션
    const timer = setTimeout(() => {
      Animated.parallel([
        Animated.timing(translateY, {
          toValue: -50,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start(() => {
        onHide();
      });
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Animated.View
      style={{ transform: [{ translateY }], opacity, width: '100%', maxWidth: 358 }}
    >
      <View className="flex flex-row items-center justify-between gap-2 pt-[14] pb-[13] px-3 bg-secondaryBg border border-brand rounded-sm pointer-events-auto">
        <Typo variant="text-16_M" className="flex-1 text-brand leading-[1.4]">
          {message}
        </Typo>
        <TouchableOpacity className="p-1" onPress={onHide}>
          <IcX width={18} height={18} />
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
};

export default Toast;
