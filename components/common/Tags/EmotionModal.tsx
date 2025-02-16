import { View } from 'react-native';
import Tag from './Tag';
import { EMOTION_MAP } from 'constants/emotions';

const EmotionModal = () => {
  const emotionsArray = Object.values(EMOTION_MAP);

  return (
    <View className="w-[358px] border border-black rounded-[2px] py-[7px] shadow-[0_0_5px_1px_rgba(51,41,44,0.20)]">
      <View className="flex flex-row flex-wrap justify-center gap-x-[10px] gap-y-[7px]">
        {emotionsArray.map((emotion, idx) => (
          <Tag key={idx} text={emotion} size="big" />
        ))}
      </View>
    </View>
  );
};

export default EmotionModal;
