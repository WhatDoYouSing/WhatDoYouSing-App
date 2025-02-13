import { View } from 'react-native';
import { Typo } from 'components/common';
import FilterTags from 'components/common/Tags/FilterTags';

const UploadScreen = () => {
  return (
    <View>
      <Typo variant="text-18_SB" className="text-brand">
        Upload
      </Typo>
      <FilterTags isUpload={false} showEmotion={false} />
    </View>
  );
};

export default UploadScreen;
