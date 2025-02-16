import { useState } from 'react';
import TagSection from './TagSection';
import { EMOTIONS, TIMES, SEASONS, CONTEXTS, UPLOAD_EMOTIONS } from 'constants/tag';

interface FilterTagsProps {
  isUpload?: boolean;
  showEmotion?: boolean;
}
const FilterTags = ({ isUpload, showEmotion }: FilterTagsProps) => {
  const [selectedFilter, setSelectedFilter] = useState({
    // 카테고리 별 여러 개의 태그 선택 가능
    감정: new Set<string>(),
    시간: new Set<string>(),
    계절: new Set<string>(),
    일상맥락: new Set<string>(),
  });

  const handleSelectedFilter = (category: keyof typeof selectedFilter, tag: string) => {
    setSelectedFilter((prev) => {
      const newTags = new Set(prev[category]);
      if (newTags.has(tag)) {
        newTags.delete(tag); // 클릭되어 있던 태그가 클릭되면 배열에서 제거
      } else {
        newTags.add(tag); // 클릭되어 있지 않던 태그는 배열에 추가
      }
      return { ...prev, [category]: newTags };
    });
  };

  return (
    <>
      {showEmotion && (
        <TagSection
          title={!isUpload && '감정'}
          tags={isUpload ? UPLOAD_EMOTIONS : EMOTIONS}
          selectedTags={Array.from(selectedFilter['감정'])}
          onSelectTag={(tag) => handleSelectedFilter('감정', tag)}
        />
      )}
      {!isUpload && (
        <>
          <TagSection
            title="시간"
            tags={TIMES}
            selectedTags={Array.from(selectedFilter['시간'])}
            onSelectTag={(tag) => handleSelectedFilter('시간', tag)}
          />
          <TagSection
            title="계절"
            tags={SEASONS}
            selectedTags={Array.from(selectedFilter['계절'])}
            onSelectTag={(tag) => handleSelectedFilter('계절', tag)}
          />
          <TagSection
            title="일상맥락"
            tags={CONTEXTS}
            selectedTags={Array.from(selectedFilter['일상맥락'])}
            onSelectTag={(tag) => handleSelectedFilter('일상맥락', tag)}
          />
        </>
      )}
    </>
  );
};

export default FilterTags;
