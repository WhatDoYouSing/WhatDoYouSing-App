import { ScrollView, TouchableOpacity, View } from 'react-native';
import Tag from './Tag';
import Typo from '../Typo';

interface EmotionData {
  id: number;
  label: string;
  count?: number;
}

interface EmotionTagsProps {
  emotions: EmotionData[];
  selectedEmotions: number[];
  onSelectEmotion: (id: number) => void;
  onPressAddEmotion: () => void;
}

const EmotionDetailTags = ({
  emotions,
  selectedEmotions,
  onSelectEmotion,
  onPressAddEmotion,
}: EmotionTagsProps) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      className="py-2 pl-4 pr-3"
    >
      <TouchableOpacity onPress={onPressAddEmotion}>
        <View className="border border-black rounded-[2px] w-[42px] h-[38.5px] bg-secondaryBg mr-1 flex justify-center items-center">
          <Typo variant="text-18_M">+</Typo>
        </View>
      </TouchableOpacity>

      {emotions.map((emotion) => (
        <View key={emotion.id} className="mr-1">
          <Tag
            text={emotion.label}
            count={emotion.count}
            size="big"
            isSelected={selectedEmotions.includes(emotion.id)}
            onPress={() => onSelectEmotion(emotion.id)}
          />
        </View>
      ))}
    </ScrollView>
  );
};

export default EmotionDetailTags;
