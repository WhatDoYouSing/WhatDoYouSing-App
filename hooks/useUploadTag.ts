import { useState } from 'react';
import { SelectedFilterType } from 'components/common/Tags/FilterTags';

const initialFilter: SelectedFilterType = {
  시간: new Set<number>(),
  계절: new Set<number>(),
  일상맥락: new Set<number>(),
};

export const useUploadTag = () => {
  const [selectedFilter, setSelectedFilter] = useState(initialFilter);

  // 태그 선택/해제 함수
  const handleSelectedFilter = (category: keyof SelectedFilterType, tag: number) => {
    setSelectedFilter((prev) => {
      const newSet = new Set(prev[category]);
      newSet.has(tag) ? newSet.delete(tag) : newSet.add(tag);
      return { ...prev, [category]: newSet };
    });
  };

  return { selectedFilter, setSelectedFilter, handleSelectedFilter };
};
