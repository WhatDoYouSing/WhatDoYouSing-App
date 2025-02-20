import React from 'react';
import { View, TouchableOpacity, TextInput } from 'react-native';
import { IcSend } from 'assets/svgs';

interface MemoInputModalProps {
  memoText: string;
  setMemoText: (text: string) => void;
  handleSaveMemo: () => void;
}

const MemoInputModal = ({
  memoText,
  setMemoText,
  handleSaveMemo,
}: MemoInputModalProps) => {
  return (
    <View className="absolute bottom-0 flex flex-row items-center gap-1 w-full px-4 py-3 bg-primaryBg border-t border-black">
      <TextInput
        value={memoText}
        onChangeText={setMemoText}
        placeholder="메모를 입력해주세요!"
        className={`flex-1 text-16 font-GothicA1-Regular text-black placeholder-nonActiveGrey outline-none leading-[1.5]`}
        multiline
      />
      <TouchableOpacity onPress={handleSaveMemo} className="p-2">
        <IcSend width={24} height={24} />
      </TouchableOpacity>
    </View>
  );
};

export default MemoInputModal;
