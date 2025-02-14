import { useState } from 'react';
import TagSection from './TagSection';

interface FilterTagsProp {
  isUpload?: boolean;
  showEmotion?: boolean;
}
const FilterTags = ({ isUpload, showEmotion }: FilterTagsProp) => {
  // 필터 태그 용
  const emotions = [
    ['행복', '설렘', '희망', '사랑', '평온', '벅참', '감동'],
    ['쾌감', '신남', '용기', '센치함', '그리움', '위로'],
    ['슬픔', '비장'],
  ];
  const times = [['새벽', '아침', '오후', '저녁', '밤']];
  const seasons = [['봄', '여름', '가을', '겨울']];
  const contexts = [
    ['산책', '여행', '피크닉', '드라이브', '자기전'],
    ['출근/등교', '퇴근/하교'],
    ['일', '공부', '독서', '운동', '집안일', '외출준비'],
    ['공연', '파티', '새해', '졸업'],
    ['카페', '집', '회사', '노래방'],
  ];

  // 감정등록_업로드 용
  const uploadEmotions = [
    ['행복', '설렘', '희망', '사랑', '평온'],
    ['벅참', '감동', '쾌감', '신남', '용기'],
    ['센치함', '그리움', '위로', '슬픔', '비장'],
  ];

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
          tags={isUpload ? uploadEmotions : emotions}
          selectedTags={Array.from(selectedFilter['감정'])}
          onSelectTag={(tag) => handleSelectedFilter('감정', tag)}
        />
      )}
      {!isUpload && (
        <>
          <TagSection
            title="시간"
            tags={times}
            selectedTags={Array.from(selectedFilter['시간'])}
            onSelectTag={(tag) => handleSelectedFilter('시간', tag)}
          />
          <TagSection
            title="계절"
            tags={seasons}
            selectedTags={Array.from(selectedFilter['계절'])}
            onSelectTag={(tag) => handleSelectedFilter('계절', tag)}
          />
          <TagSection
            title="일상맥락"
            tags={contexts}
            selectedTags={Array.from(selectedFilter['일상맥락'])}
            onSelectTag={(tag) => handleSelectedFilter('일상맥락', tag)}
          />
        </>
      )}
    </>
  );
};

export default FilterTags;
