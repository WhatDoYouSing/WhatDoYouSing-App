import { View, TouchableOpacity } from 'react-native';
import Typo from 'components/common/Typo';

interface CtgryDropdownProps {
  categories: string[];
  selectedCategory: string;
  onSelect: (category: string) => void;
}

const CtgryDropdown = ({
  categories,
  selectedCategory,
  onSelect,
}: CtgryDropdownProps) => {
  return (
    <View
      className="absolute left-[2px] top-[96px] z-10 bg-white shadow-md shadow-black/20
      rounded-sm w-28 border border-black"
    >
      {categories.map((category) => (
        <TouchableOpacity
          key={category}
          className="py-4 px-5 hover:bg-gray-200"
          onPress={() => onSelect(category)}
        >
          <Typo
            variant="text-20_SB"
            className={`${selectedCategory === category ? 'text-brand' : 'text-black'}`}
          >
            {category}
          </Typo>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default CtgryDropdown;
