import React, { useRef, useMemo, useEffect } from 'react';
import { Modal, View, TouchableOpacity, Animated, PanResponder } from 'react-native';
import Typo from './Typo';
import { IcSelectOff } from 'assets/svgs';

interface BottomModalProps {
  isOpen: boolean;
  onClose: () => void;
  options?: { id: number; text: string; action: () => void }[];
  hasCheckBox?: boolean;
  children?: React.ReactNode;
}

const DRAG_THRESHOLD = 50;

const BottomModal = ({
  isOpen,
  onClose,
  options = [],
  hasCheckBox,
  children,
}: BottomModalProps) => {
  const translateY = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (isOpen) {
      // 하단 모달이 열릴 때 아래에서 올라오는 애니메이션
      translateY.setValue(300);
      Animated.timing(translateY, {
        toValue: 0,
        useNativeDriver: true,
      }).start();
    } else {
      // 닫힐 때 translateY를 0으로 초기화
      translateY.setValue(0);
    }
  }, [isOpen, translateY]);

  // 헤더를 슬라이드하여 하단 모달을 닫기 위한 PanResponder 설정
  const panResponder = useMemo(
    () =>
      PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove: (_, gestureState) => {
          // 아래로만 끌어내릴 때 translateY 업데이트
          if (gestureState.dy > 0) {
            translateY.setValue(gestureState.dy);
          }
        },
        onPanResponderRelease: (_, gestureState) => {
          if (gestureState.dy > DRAG_THRESHOLD) {
            // threshold 이상 끌어내리면 모달 닫기
            onClose();
          } else {
            // threshold 이하이면 제자리로
            Animated.spring(translateY, {
              toValue: 0,
              useNativeDriver: true,
            }).start();
          }
        },
      }),
    [onClose, translateY]
  );

  return (
    <Modal transparent animationType="none" visible={isOpen} onRequestClose={onClose}>
      <View className="flex-1">
        {/* 딤드 */}
        <TouchableOpacity
          onPress={onClose}
          activeOpacity={1}
          style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.5)' }}
        />
        <Animated.View
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            transform: [{ translateY }],
          }}
        >
          {/* 헤더 */}
          <View
            {...panResponder.panHandlers}
            className="items-center justify-center bg-primaryBg pt-2 border-t-[1px] border-black"
          >
            <View className="w-10 h-1 bg-nonActiveGrey rounded-[2px]" />
          </View>

          {/* 컨텐츠 */}
          <View className="bg-primaryBg w-full pb-[27px]">
            {options?.length > 0 &&
              options.map((option, index) => {
                const isLast = index === options.length - 1;
                return (
                  <TouchableOpacity
                    key={option.id}
                    onPress={option.action}
                    className={`flex-row bg-primaryBg h-14 justify-center items-center gap-2 ${
                      isLast ? '' : 'border-b-[1px] border-borderBg'
                    }`}
                  >
                    {hasCheckBox && <IcSelectOff width={18} height={18} />}
                    <Typo
                      variant="text-16_M"
                      className={option.text === '삭제' ? 'text-brand' : 'text-black'}
                    >
                      {option.text}
                    </Typo>
                  </TouchableOpacity>
                );
              })}
            {children}
          </View>
        </Animated.View>
      </View>
    </Modal>
  );
};

export default BottomModal;
