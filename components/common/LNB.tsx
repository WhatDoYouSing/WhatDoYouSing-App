import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import colors from 'styles/colors';

interface LNBProps {
  menuItems: string[];
  selectedItem: string;
  onMenuSelect: (label: string) => void;
}

const LNB = ({ menuItems, selectedItem, onMenuSelect }: LNBProps) => {
  return (
    <View style={styles.container}>
      {menuItems.map((label, index) => {
        const isSelected = selectedItem === label;
        const isLastItem = index === menuItems.length - 1;

        return (
          <TouchableOpacity
            key={label}
            style={[
              styles.menuItem,
              isSelected && styles.selectedMenuItem,
              isLastItem && styles.lastMenuItem,
            ]}
            onPress={() => onMenuSelect(label)}
          >
            <Text style={[styles.menuText, isSelected && styles.selectedMenuText]}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.secondaryBg,
    borderBottomWidth: 1,
    borderBottomColor: colors.black,
    height: 60,
  },
  menuItem: {
    justifyContent: 'center',
    paddingHorizontal: 20,
    flex: 1,
    borderRightWidth: 1,
    borderRightColor: colors.black,
  },
  lastMenuItem: {
    borderRightWidth: 0,
  },
  selectedMenuItem: {
    backgroundColor: colors.black,
  },
  menuText: {
    fontSize: 16,
    color: colors.black,
  },
  selectedMenuText: {
    color: colors.primaryBg,
  },
});

export default LNB;
