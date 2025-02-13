import { View } from 'react-native';
import Typo from 'components/common/Typo';
import Tag from './Tag';

interface TagSectionProps {
  title?: string;
  tags: string[][];
  selectedFilter: string[];
  onSelectFilter: (tag: string) => void;
}

const TagSection = ({ title, tags, selectedFilter, onSelectFilter }: TagSectionProps) => {
  return (
    <View className="p-4">
      <Typo variant="text-16_M">{title}</Typo>
      {tags.map((row, rowIndex) => (
        <View key={rowIndex} className="flex flex-row mt-4">
          {row.map((tag, idx) => (
            <View key={idx} className="mr-2">
              <Tag
                text={tag}
                size="small"
                isSelected={selectedFilter.includes(tag)}
                onPress={() => onSelectFilter(tag)}
              />
            </View>
          ))}
        </View>
      ))}
    </View>
  );
};

export default TagSection;
