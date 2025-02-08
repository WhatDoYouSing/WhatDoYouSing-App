import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import colors from 'styles/colors';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

interface LNBProps {
  title: string;
  type: 'button' | 'icon' | 'non-icon' | 'non-back' | 'my';
  btnText?: string;
  onBtnClick?: () => void;
}

const Header = ({ title, type, btnText, onBtnClick }: LNBProps) => {
  return (
    <View style={styles.container}>
      {type === 'button' || type === 'icon' || type === 'non-icon' ? (
        <TouchableOpacity style={styles.leftIcon}>
          <Ionicons name="arrow-back" size={24} color={colors.black} />
        </TouchableOpacity>
      ) : type === 'my' ? (
        <TouchableOpacity style={styles.leftIcon} onPress={onBtnClick}>
          <MaterialCommunityIcons name="calendar" size={24} color={colors.black} />
        </TouchableOpacity>
      ) : null}

      <Text style={styles.title}>{title}</Text>

      {type === 'button' && btnText ? (
        <TouchableOpacity style={styles.rightButton} onPress={onBtnClick}>
          <Text style={styles.rightButtonText}>{btnText}</Text>
        </TouchableOpacity>
      ) : type === 'icon' || type === 'my' || type === 'non-back' ? (
        <TouchableOpacity style={styles.rightIcon}>
          <Ionicons name="search" size={24} color={colors.black} />
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flexDirection: 'row',
    backgroundColor: colors.primaryBg,
    borderBottomWidth: 1,
    borderBottomColor: colors.black,
    height: 60,
    alignItems: 'center',
  },
  leftIcon: {
    position: 'absolute',
    left: 16,
  },
  title: {
    fontSize: 18,
    color: colors.black,
    flex: 1,
    textAlign: 'center',
  },
  rightIcon: {
    position: 'absolute',
    right: 16,
  },
  rightButton: {
    position: 'absolute',
    right: 16,
    backgroundColor: colors.primaryBg,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 2,
    borderWidth: 1,
    borderColor: colors.nonActiveGrey,
  },
  rightButtonText: {
    color: colors.nonActiveGrey,
    fontSize: 16,
  },
});

export default Header;
