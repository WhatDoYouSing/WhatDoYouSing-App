import { View } from 'react-native';
import Typo from 'components/common/Typo';
import Tag from './Tag';

interface TagSectionProps {
  title?: string;
  tags: { id: number; name: string }[][];
  selectedTags: number[];
  onSelectTag: (tag: number) => void;
}

const TagSection = ({ title, tags, selectedTags, onSelectTag }: TagSectionProps) => {
  return (
    <View className="flex flex-col gap-4 p-4">
      <Typo variant="text-16_M" className="text-black">
        {title}
      </Typo>
      {tags.map((row, rowIndex) => (
        <View key={rowIndex} className="flex-row flex-wrap gap-2">
          {row.map((tag) => (
            <Tag
              key={tag.id}
              text={tag.name}
              size="small"
              isSelected={selectedTags.includes(tag.id)}
              onPress={() => onSelectTag(tag.id)}
            />
          ))}
        </View>
      ))}
    </View>
  );
};

export default TagSection;
