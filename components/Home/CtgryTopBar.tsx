import { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import Typo from 'components/common/Typo';
import { IcArrowDown, IcArrowUp, IcSearch, IcNotification } from 'assets/svgs';
import { LNB } from 'components/common';
import CtgryDropdown from './CtgryDropdown';
import useTab from 'hooks/useTab';

interface CtgryTopBarProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

const CtgryTopBar = ({ selectedCategory, setSelectedCategory }: CtgryTopBarProps) => {
  const CATEGORIES = ['통합', '노트', '플리'];
  const MENU_ITEMS = ['전체', '팔로우 중'];
  const { tabItems, selectedTab, handleTabSelect } = useTab(MENU_ITEMS);
  const [isActive, setIsActive] = useState(false);

  const toggleDropdown = () => {
    setIsActive((prev) => !prev);
  };

  const selectCategory = (category: string) => {
    setSelectedCategory(category);
    setIsActive(false);
  };

  return (
    <>
      <View className="w-full pt-12 pb-[10] pr-3 bg-primaryBg border-b border-black z-10">
        <View className="relative flex flex-row justify-between items-start">
          {/* 카테고리 선택 버튼 */}
          <TouchableOpacity
            className="flex flex-row items-center justify-center pl-5 pr-3 gap-[2px]"
            onPress={toggleDropdown}
          >
            <Typo variant="text-20_SB">{selectedCategory}</Typo>
            <View className="p-2">{isActive ? <IcArrowUp /> : <IcArrowDown />}</View>
          </TouchableOpacity>

          {/* 검색 & 알림 아이콘 */}
          <View className="flex flex-row gap-1">
            <TouchableOpacity className="p-2">
              <IcNotification />
            </TouchableOpacity>
            <TouchableOpacity className="p-2">
              <IcSearch />
            </TouchableOpacity>
          </View>
        </View>

        {/* 드롭다운 메뉴 */}
        {isActive && (
          <CtgryDropdown
            categories={CATEGORIES}
            selectedCategory={selectedCategory}
            onSelect={selectCategory}
          />
        )}
      </View>
      {/* LNB */}
      <LNB
        tabItems={tabItems}
        selectedTab={selectedTab}
        handleTabSelect={handleTabSelect}
      />
    </>
  );
};

export default CtgryTopBar;
