import React, { useState, ReactNode } from 'react';
import { View, TouchableOpacity, TextInput, Text } from 'react-native';
import { TextInputProps, TouchableOpacityProps } from 'react-native';
import { useUploadNoteNavigation } from 'navigation/UploadNoteNavigator';

import { BottomModal, Tag, Typo } from 'components/common';
import { IcX } from 'assets/svgs';
import { getVisibilityIcon, getVisibilityLabel } from 'utils/getVisibility';
import { EMOTIONS } from 'constants/emotions';
import { VISIBILITY_OPTIONS } from 'constants/upload';

interface InputFieldProps {
  label: string;
  isSmall?: boolean;
  isRequired?: boolean;
  isInputFocused?: boolean;
  children: ReactNode;
}

// 공통 레이아웃
const InputField = ({
  label,
  isSmall = false,
  isRequired = false,
  isInputFocused = false,
  children,
}: InputFieldProps) => {
  const py = isSmall ? 'py-2' : 'py-4';
  const pb = isInputFocused ? (isSmall ? 'pb-[7]' : 'pb-[15]') : '';
  const border = isInputFocused ? 'border-b border-brand' : '';

  return (
    <View className={`flex-row items-center px-4 ${py} ${pb} gap-4 ${border}`}>
      <View className="flex-row items-center gap-1 w-[46]">
        {isRequired && <Text className="text-16 font-GothicA1-Medium text-brand">*</Text>}
        <Typo variant="text-16_M">{label}</Typo>
      </View>
      {children}
    </View>
  );
};

// 일반 텍스트 입력 필드
interface TextFieldProps extends TextInputProps {
  isMusic?: boolean;
  onClear?: () => void;
}

const TextField = ({ isMusic, onClear, ...props }: TextFieldProps) => {
  const { goToSelect } = useUploadNoteNavigation();

  return (
    <View className="flex-1 flex-row items-center gap-2">
      {isMusic ? (
        props.value ? (
          <Typo variant="text-14_M" className="flex-1 leading-[1.5] text-black">
            {props.value}
          </Typo>
        ) : (
          <TouchableOpacity
            className={`flex-row justify-center items-center pt-3 pb-[11] w-full rounded-[2] bg-secondaryBg border border-black`}
            onPress={() => goToSelect('직접')}
          >
            <Typo variant="text-14_M" className="text-black">
              가사 추가하기
            </Typo>
          </TouchableOpacity>
        )
      ) : (
        <TextInput
          {...props}
          className="flex-1 py-3 text-14 font-GothicA1-Medium leading-[1.5] text-black placeholder-nonActiveGrey outline-none"
        />
      )}

      {props.value && (
        <TouchableOpacity
          className="flex items-center justify-center w-[18] h-[18]"
          onPress={onClear}
        >
          <IcX width={14} height={14} />
        </TouchableOpacity>
      )}
    </View>
  );
};

// 위치 입력 필드
interface LocationProps extends TouchableOpacityProps {
  location: {
    placeName: string;
    address: string;
  };
  onClear?: () => void;
}

const Location = ({ location, onClear, ...props }: LocationProps) => {
  return (
    <View className="flex-1 flex-row items-center gap-2">
      {location.placeName ? (
        <>
          <View className="flex-1 py-2">
            <Typo variant="text-12_L" className="text-black leading-[1.3]">
              {location.placeName}
            </Typo>
            <Typo variant="text-12_L" className="text-black leading-[1.3]">
              {location.address}
            </Typo>
          </View>
          <TouchableOpacity
            className="flex items-center justify-center w-[18] h-[18] "
            onPress={onClear}
          >
            <IcX width={14} height={14} />
          </TouchableOpacity>
        </>
      ) : (
        <TouchableOpacity {...props} className="flex-1 py-3">
          <Typo variant="text-14_R" className="text-nonActiveGrey leading-[1.3]">
            노래에 관한 위치를 등록해주세요!
          </Typo>
        </TouchableOpacity>
      )}
    </View>
  );
};

// 감정 선택 필드
interface EmotionProps {
  selectedEmotion: number;
  onSelectEmotion: (emotion: number) => void;
}

const Emotion = ({ selectedEmotion, onSelectEmotion }: EmotionProps) => {
  return (
    <View className="flex-1 flex-wrap flex-row gap-2">
      {EMOTIONS.flat().map((emotion) => (
        <Tag
          key={emotion.id}
          text={emotion.name}
          isSelected={selectedEmotion === emotion.id}
          onPress={() => onSelectEmotion(emotion.id)}
        />
      ))}
    </View>
  );
};

// 공개 범위 필드
interface VisibilityProps extends TouchableOpacityProps {
  visibility: string;
  setVisibility: React.Dispatch<React.SetStateAction<string>>;
}

const Visibility = ({ visibility, setVisibility, ...props }: VisibilityProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSelectVisibility = (selected: string) => {
    setVisibility(selected);
    setIsModalOpen(false);
  };

  return (
    <View className="flex-1">
      <TouchableOpacity
        {...props}
        className="flex-row items-center gap-[6] w-fit"
        onPress={() => setIsModalOpen(true)}
      >
        {getVisibilityIcon(visibility)}
        <Typo variant="text-14_R" className="text-black leading-[1.5] pt-[2] pb-[1]">
          {getVisibilityLabel(visibility)}
        </Typo>
      </TouchableOpacity>

      <BottomModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <Typo variant="text-18_SB" className="flex-1 p-4 text-center">
          공개
        </Typo>

        {VISIBILITY_OPTIONS.map((option, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleSelectVisibility(option.key)}
            className="flex-row bg-primaryBg h-[72] justify-center items-center gap-2 border-t border-borderBg"
          >
            {option.icon}
            <Typo variant="text-16_M" className="pt-[2]">
              {option.label}
            </Typo>
          </TouchableOpacity>
        ))}
      </BottomModal>
    </View>
  );
};

InputField.TextField = TextField;
InputField.Location = Location;
InputField.Emotion = Emotion;
InputField.Visibility = Visibility;

export default InputField;
