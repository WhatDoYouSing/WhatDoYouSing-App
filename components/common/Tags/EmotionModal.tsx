import { View } from 'react-native';
import Tag from './Tag';
import { MODAL_EMOTIONS } from 'constants/tag';

const EmotionModal = () => {
  return (
    <View className="w-[364px] border border-black rounded-[2px] px-[14px] py-[7px] shadow-[0_0_5px_1px_rgba(51,41,44,0.20)]">
      {MODAL_EMOTIONS.map((row, rowIndex) => (
        <View
          key={rowIndex}
          className="flex flex-row flex-wrap justify-center gap-x-[10px] my-[7px]"
        >
          {row.map((emotion, idx) => (
            <Tag key={idx} text={emotion} size="big" />
          ))}
        </View>
      ))}
    </View>
  );
};

export default EmotionModal;
