import React from 'react';
import { View, TouchableOpacity, TextInput, TextInputProps, Text } from 'react-native';
import { Typo } from 'components/common';
import { IcX } from 'assets/svgs';

interface InputFieldProps extends TextInputProps {
  label: string;
  isSmall?: boolean;
  isRequired?: boolean;
  onClear?: () => void;
}

const InputField = ({
  label,
  isSmall = false,
  isRequired = false,
  onClear,
  ...props
}: InputFieldProps) => {
  const paddingY = isSmall ? 'py-2' : 'py-4';

  return (
    <View className={`flex-row items-center bg-primaryBg px-4 ${paddingY} gap-4`}>
      <View className="flex-row items-center gap-1 w-[46]">
        {isRequired && <Text className="text-16 font-GothicA1-Medium text-brand">*</Text>}
        <Typo variant="text-16_M">{label}</Typo>
      </View>

      <View className="flex-1 flex-row items-center gap-2">
        <TextInput
          {...props}
          className="flex-1 py-3 text-14 font-GothicA1-Medium leading-[1.5] text-black placeholder-nonActiveGrey outline-none"
        />

        {props.value?.length > 0 && (
          <TouchableOpacity
            className="flex items-center justify-center w-[18] h-[18]"
            onPress={onClear}
          >
            <IcX width={14} height={14} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default InputField;
