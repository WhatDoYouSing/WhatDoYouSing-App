import { TouchableOpacity, View } from 'react-native';
import { Typo } from 'components/common';
import { useUploadNavigation } from 'navigation/UploadStackNavigator';

const UploadNoteScreen = () => {
  const { goToPlaylist } = useUploadNavigation();

  return (
    <View>
      <Typo variant="text-18_SB" className="text-brand">
        UploadNoteScreen
      </Typo>
      <TouchableOpacity onPress={goToPlaylist}>이동</TouchableOpacity>
    </View>
  );
};

export default UploadNoteScreen;
