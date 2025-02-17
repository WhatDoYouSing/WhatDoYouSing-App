import React, { useEffect, useRef } from 'react';
import { Animated, TouchableOpacity, View } from 'react-native';
import Typo from './Typo';
import { IcX } from 'assets/svgs';

interface ToastProps {
  message: string;
  onHide: () => void;
}

const Toast = ({ message, onHide }: ToastProps) => {
  const translateY = useRef(new Animated.Value(0)).current;
  const opacity = useRef(new Animated.Value(1)).current;

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     Animated.parallel([
  //       Animated.timing(translateY, {
  //         toValue: -50,
  //         duration: 300,
  //         useNativeDriver: true,
  //       }),
  //       Animated.timing(opacity, {
  //         toValue: 0,
  //         duration: 300,
  //         useNativeDriver: true,
  //       }),
  //     ]).start(() => {
  //       onHide();
  //     });
  //   }, 3000);

  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <Animated.View style={{ transform: [{ translateY }], opacity, width: '100%' }}>
      <View className="flex flex-row items-center justify-between gap-2 pt-[14] pb-[13] px-3 bg-secondaryBg border border-brand rounded-sm max-w-[358]">
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
