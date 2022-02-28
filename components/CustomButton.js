import React from "react";
import { TouchableOpacity, Text } from "react-native";
import LinearGradiant from "react-native-linear-gradient";
import { FONTS, COLORS } from "../constants";
const CustomButton = ({
  buttonText,
  buttonContainerStyle,
  colors,
  onPress,
}) => {
  if (colors.length > 0) {
    return (
      <TouchableOpacity onPress={onPress}>
        <LinearGradiant
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 0 }}
          colors={colors}
          style={{
            ...buttonContainerStyle,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              color: COLORS.white,
              ...FONTS.h3,
            }}
          >
            {buttonText}
          </Text>
        </LinearGradiant>
      </TouchableOpacity>
    );
  } else {
    return (
      <TouchableOpacity
        onPress={onPress}
        style={{
          ...buttonContainerStyle,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            color: COLORS.white,
            ...FONTS.h3,
          }}
        >
          {buttonText}
        </Text>
      </TouchableOpacity>
    );
  }
};
export default CustomButton;