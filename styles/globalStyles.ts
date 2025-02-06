import { StyleSheet } from "react-native";
import colors from "./colors";
import fonts from "./fonts";

const globalStyles = StyleSheet.create({
  basicText: {
    fontFamily: fonts.semiBold,
    fontSize: 16,
    color: colors.black,
  },
});

export default globalStyles;
