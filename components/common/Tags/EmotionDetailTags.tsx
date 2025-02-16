import { ScrollView, TouchableOpacity, View } from 'react-native';
import Tag from './Tag';
import Typo from '../Typo';
import { IcPlus } from 'assets/svgs';

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
        <View className="border border-black rounded-[2px] px-3 pt-3 pb-[11px] bg-secondaryBg mr-1 flex justify-center items-center">
          <IcPlus width={14} height={14} />
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
