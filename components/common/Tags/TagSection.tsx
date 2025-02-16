import { View } from 'react-native';
import Typo from 'components/common/Typo';
import Tag from './Tag';

interface TagSectionProps {
  title?: string;
  tags: string[][];
  selectedTags: string[];
  onSelectTag: (tag: string) => void;
}

const TagSection = ({ title, tags, selectedTags, onSelectTag }: TagSectionProps) => {
  return (
    <View className="py-4">
      <Typo variant="text-16_M">{title}</Typo>
      {tags.map((row, rowIndex) => (
        <View key={rowIndex} className="flex flex-row mt-4">
          {row.map((tag, idx) => (
            <View key={idx} className="mr-2">
              <Tag
                text={tag}
                size="small"
                isSelected={selectedTags.includes(tag)}
                onPress={() => onSelectTag(tag)}
              />
            </View>
          ))}
        </View>
      ))}
    </View>
  );
};

export default TagSection;
