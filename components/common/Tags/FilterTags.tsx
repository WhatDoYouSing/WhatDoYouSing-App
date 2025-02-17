import TagSection from './TagSection';
import { TIMES, SEASONS, CONTEXTS } from 'constants/tag';
import { EMOTIONS } from 'constants/emotions';

export interface SelectedFilterType {
  감정?: Set<number>;
  시간: Set<number>;
  계절: Set<number>;
  일상맥락: Set<number>;
}

interface FilterTagsProps {
  selectedFilter: SelectedFilterType;
  handleSelectedFilter: (category: string, tag: number) => void;
  showEmotion?: boolean;
}

const FilterTags = ({
  selectedFilter,
  handleSelectedFilter,
  showEmotion = false,
}: FilterTagsProps) => {
  const sections = [
    ...(showEmotion ? [{ category: '감정', title: '감정', tags: EMOTIONS }] : []),
    { category: '시간', title: '시간', tags: TIMES },
    { category: '계절', title: '계절', tags: SEASONS },
    { category: '일상맥락', title: '일상맥락', tags: CONTEXTS },
  ];

  return (
    <>
      {sections.map(({ category, title, tags }) => (
        <TagSection
          key={category}
          title={title}
          tags={tags}
          selectedTags={Array.from(selectedFilter[category])}
          onSelectTag={(tag) => handleSelectedFilter(category, tag)}
        />
      ))}
    </>
  );
};

export default FilterTags;
