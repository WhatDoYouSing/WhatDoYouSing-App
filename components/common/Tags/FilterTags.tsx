import { useState } from 'react';
import TagSection from './TagSection';

const FilterTags = () => {
  const timeTags = [['새벽', '아침', '오후', '저녁', '밤']];
  const seasonTags = [['봄', '여름', '가을', '겨울']];
  const contextTags = [
    ['산책', '여행', '피크닉', '드라이브', '자기전'],
    ['출근/등교', '퇴근/하교'],
    ['일', '공부', '독서', '운동', '집안일', '외출준비'],
    ['공연', '파티', '새해', '졸업'],
    ['카페', '집', '회사', '노래방'],
  ];

  const [selectedFilter, setSelectedFilter] = useState({
    // 카테고리 별 여러 개의 태그 선택 가능
    시간: new Set<string>(),
    계절: new Set<string>(),
    일상맥락: new Set<string>(),
  });

  const handleSelectedFilter = (category: keyof typeof selectedFilter, tag: string) => {
    setSelectedFilter((prev) => {
      const newTags = new Set(prev[category]);
      if (newTags.has(tag)) {
        newTags.delete(tag);
      } else {
        newTags.add(tag);
      }
      return { ...prev, [category]: newTags };
    });
  };

  return (
    <>
      <TagSection
        title="시간"
        tags={timeTags}
        selectedFilter={Array.from(selectedFilter['시간'])}
        onSelectFilter={(tag) => handleSelectedFilter('시간', tag)}
      />
      <TagSection
        title="계절"
        tags={seasonTags}
        selectedFilter={Array.from(selectedFilter['계절'])}
        onSelectFilter={(tag) => handleSelectedFilter('계절', tag)}
      />
      <TagSection
        title="일상맥락"
        tags={contextTags}
        selectedFilter={Array.from(selectedFilter['일상맥락'])}
        onSelectFilter={(tag) => handleSelectedFilter('일상맥락', tag)}
      />
    </>
  );
};

export default FilterTags;
