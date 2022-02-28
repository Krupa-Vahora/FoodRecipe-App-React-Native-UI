import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
} from "react-native";
import { images, COLORS, SIZES, FONTS } from "../constants";
import LinearGradiant from "react-native-linear-gradient";
import { CustomButton } from "../components";
const Login = ({ navigation }) => {
  function renderHeader() {
    return (
      <View
        style={{
          height: SIZES.height > 700 ? "65%" : "60%",
        }}
      >
        <ImageBackground
          source={images.loginBackground}
          style={{
            flex: 1,
            justifyContent: "flex-end",
          }}
          resizeMode="cover"
        >
          <LinearGradiant
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            colors={[COLORS.transparent, COLORS.black]}
            style={{
              height: 300,
              justifyContent: "flex-end",
              paddingHorizontal: SIZES.padding,
            }}
          >
            <Text
              style={{
                width: "80%",
                color: COLORS.white,
                ...FONTS.largeTitle,
                lineHeight: 45,
              }}
            >
              Cooking a Delicious Food Easily
            </Text>
          </LinearGradiant>
        </ImageBackground>
      </View>
    );
  }

  function renderDetail() {
    return (
      <View
        style={{
          flex: 1,
          paddingHorizontal: SIZES.padding,
        }}
      >
        {/* Description */}
        <Text
          style={{
            marginTop: SIZES.radius,
            width: "70%",
            color: COLORS.gray,
            ...FONTS.body3,
          }}
        >
          Discover more than 1200 food recipe in your hands and cokking easily!!
        </Text>
        {/* Button */}
        <View style={{ flex: 1, justifyContent: "center" }}>
          {/* Login  */}
          <CustomButton
            buttonText="Login"
            buttonContainerStyle={{
              paddingVertical: 15,
              borderRadius: 20,
            }}
            colors={[COLORS.darkGreen, COLORS.lime]}
            onPress={() => navigation.replace("Home")}
          />

          {/* Signup */}

          <CustomButton
            buttonText="SignUp"
            buttonContainerStyle={{
              marginTop: SIZES.radius,
              paddingVertical: 15,
              borderRadius: 20,
              backgroundColor: COLORS.darkGreen,
            }}
            colors={[]}
            onPress={() => navigation.replace("Home")}
          />
        </View>
      </View>
    );
  }
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.black,
      }}
    >
      <StatusBar barStyle="light-content"></StatusBar>
      {/* header  */}
      {renderHeader()}
      {/* detail */}
      {renderDetail()}
    </View>
  );
};

export default Login;
