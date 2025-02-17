import React from 'react';
import { Modal, Pressable, View, TouchableOpacity } from 'react-native';
import { Typo } from 'components/common';
import { IcRecord, IcUpload } from 'assets/svgs';

interface UploadOptionModalProps {
  visible: boolean;
  onSelect: (option: string) => void;
  onClose: () => void;
}

const UploadOptionModal = ({ visible, onSelect, onClose }: UploadOptionModalProps) => {
  return (
    <Modal visible={visible} transparent>
      <Pressable style={{ flex: 1 }} onPress={onClose}>
        <View
          onStartShouldSetResponder={() => true}
          className="absolute bottom-24 px-4 flex flex-col w-full"
        >
          <TouchableOpacity
            className="flex flex-row justify-center items-center gap-1 pt-4 pb-[15] border border-b border-black bg-secondaryBg"
            onPress={() => onSelect('note')}
          >
            <IcRecord />
            <Typo variant="text-16_M" className="text-black leading-[1.4]">
              노트 업로드
            </Typo>
          </TouchableOpacity>

          <TouchableOpacity
            className="flex flex-row justify-center items-center gap-1 pt-4 pb-[15] border border-t-0 border-black bg-secondaryBg"
            onPress={() => onSelect('playlist')}
          >
            <IcUpload />
            <Typo variant="text-16_M" className="text-black leading-[1.4]">
              플리 업로드
            </Typo>
          </TouchableOpacity>
        </View>
      </Pressable>
    </Modal>
  );
};

export default UploadOptionModal;
