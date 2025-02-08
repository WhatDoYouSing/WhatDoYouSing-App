import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { IcArrowLeft, IcCalendarOff, IcCalendarOn, IcSearch } from 'assets/svgs';
import colors from 'styles/colors';

interface HeaderProps {
  title: string;
  type?: 'button' | 'icon' | 'non-icon' | 'non-back' | 'my';
  onBtnClick?: () => void;
  isBtnActive?: boolean;
  isCalendarActive?: boolean;
}

const Header = ({
  title,
  type = 'non-icon',
  onBtnClick,
  isBtnActive = false,
  isCalendarActive = false,
}: HeaderProps) => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        {type === 'button' || type === 'icon' || type === 'non-icon' ? (
          <TouchableOpacity style={styles.leftIcon} onPress={() => router.back()}>
            <IcArrowLeft />
          </TouchableOpacity>
        ) : type === 'my' ? (
          <TouchableOpacity style={styles.leftIcon} onPress={onBtnClick}>
            {isCalendarActive ? <IcCalendarOn /> : <IcCalendarOff />}
          </TouchableOpacity>
        ) : null}

        <Text style={styles.title}>{title}</Text>

        {type === 'button' ? (
          <TouchableOpacity
            style={[styles.rightButton, isBtnActive && styles.activeRightButton]}
            onPress={onBtnClick}
          >
            <Text
              style={[styles.rightButtonText, isBtnActive && styles.activeButtonText]}
            >
              편집
            </Text>
          </TouchableOpacity>
        ) : type === 'icon' || type === 'my' || type === 'non-back' ? (
          <TouchableOpacity style={styles.rightIcon}>
            <IcSearch />
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 48,
    backgroundColor: colors.primaryBg,
    borderBottomWidth: 1,
    borderBottomColor: colors.black,
  },
  wrapper: {
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
  },
  leftIcon: {
    position: 'absolute',
    left: 16,
  },
  title: {
    flex: 1,
    color: colors.black,
    textAlign: 'center',
    fontFamily: 'Gothic A1',
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: '600',
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
    fontFamily: 'Gothic A1',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '500',
  },
  activeRightButton: {
    borderColor: colors.black,
  },
  activeButtonText: {
    color: colors.black,
  },
});

export default Header;
