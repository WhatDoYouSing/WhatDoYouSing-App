import { Modal, Pressable, View } from 'react-native';
import Typo from './Typo';

interface BaseModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  message: string;
  type?: 'delete' | 'exit' | 'unfollow';
}

const BaseModal = ({
  isOpen,
  onClose,
  onConfirm,
  title,
  message,
  type = 'delete',
}: BaseModalProps) => {
  const confirmText =
    type === 'exit' ? '나가기' : type === 'unfollow' ? '언팔로우' : '삭제';

  return (
    <Modal animationType="none" transparent visible={isOpen} onRequestClose={onClose}>
      {/* 딤드 */}
      <View className="flex w-full h-full bg-black/50 justify-center items-center">
        {/* 컨텐츠 */}
        <View className="flex bg-white w-[358px] border-[1px] border-black rounded-sm justify-center items-center">
          <Typo
            variant="text-18_SB"
            className="flex w-full text-center justify-center p-4"
          >
            {title}
          </Typo>
          <View className="w-full h-[0.5px] border-[0.5px] border-black border-dashed" />
          <Typo
            variant="text-14_R"
            className="flex w-full text-center justify-center py-4 border-b-[1px] border-black leading-[1.5]"
          >
            {message}
          </Typo>

          {/* 버튼 */}
          <View className="flex flex-row w-full">
            <Pressable
              onPress={onClose}
              className="flex-1 items-center w-full py-4 border-r-[1px] border-black"
            >
              <Typo variant="text-16_SB">취소</Typo>
            </Pressable>
            <Pressable onPress={onConfirm} className="flex-1 py-4 items-center">
              <Typo variant="text-16_SB" className=" text-brand">
                {confirmText}
              </Typo>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default BaseModal;
