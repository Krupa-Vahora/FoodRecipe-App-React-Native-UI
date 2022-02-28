import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  Platform,
  Image,
} from "react-native";
import { BlurView } from "@react-native-community/blur";
import { FONTS, COLORS, SIZES, icons } from "../constants";
const HEADER_HEIGHT = 350;

const Recipe = ({ navigation, route }) => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const scrollY = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    let { recipe } = route.params;
    setSelectedRecipe(recipe);
  }, [route?.params]); // route ? route.params:null

  const RecipeCreatorCardDeatil = ({ selectedRecipe }) => {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        {/* image  */}
        <View
          style={{
            width: 40,
            height: 40,
            marginLeft: 20,
          }}
        >
          <Image
            source={selectedRecipe?.author?.profilePic}
            style={{ width: 40, height: 40, borderRadius: 20 }}
          />
        </View>
        {/* label */}
        <View style={{ flex: 1, marginHorizontal: 20 }}>
          <Text
            style={{
              color: COLORS.lightGray2,
              ...FONTS.body4,
            }}
          >
            Recipe By:
          </Text>
          <Text
            style={{ color: COLORS.white2, ...FONTS.h3, alignItems: "center" }}
          >
            {selectedRecipe?.author?.name}
          </Text>
        </View>
        {/* button  */}
        {/* <TouchableOpacity
          style={{
            width: 30,
            height: 30,
            alignItems: "center",
            justifyContent: "center",
            marginRight: 20,
            borderRadius: 5,
            borderWidth: 1,
            borderColor: COLORS.lightGreen1,
          }}
          onPress={() => console.log("View Profile")}
        >
          <Image
            source={icons.rightArrow}
            style={{
              width: 15,
              height: 15,
              tintColor: COLORS.lightGreen1,
            }}
          />
        </TouchableOpacity> */}
      </View>
    );
  };
  const RecipeCreatorCardInfo = () => {
    if (Platform.OS === "ios") {
      return (
        <BlurView
          style={{
            flex: 1,
            borderRadius: SIZES.radius,
          }}
          blurType="dark"
        >
          <RecipeCreatorCardDeatil selectedRecipe={selectedRecipe} />
        </BlurView>
      );
    } else {
      return (
        <View
          style={{
            flex: 1,
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.transparentBlack9,
          }}
        ></View>
      );
    }
  };
  function renderRecipeCardHeader() {
    return (
      <View
        style={{
          marginTop: -1000,
          paddingTop: 1000,
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        {/* background image */}
        <Animated.Image
          source={selectedRecipe?.image}
          resizeMode="contain"
          style={{
            height: HEADER_HEIGHT,
            width: "200%",
            transform: [
              {
                translateY: scrollY.interpolate({
                  inputRange: [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
                  outputRange: [-HEADER_HEIGHT / 2, 0, HEADER_HEIGHT * 0.75],
                }),
              },
              {
                scale: scrollY.interpolate({
                  inputRange: [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
                  outputRange: [2, 1, 0.5],
                }),
              },
            ],
          }}
        />
        {/* recipe creater card  */}

        <Animated.View
          style={{
            position: "absolute",
            bottom: 10,
            left: 30,
            right: 30,
            height: 80,
            transform: [
              {
                translateX: scrollY.interpolate({
                  inputRange: [0, 170, 250],
                  outputRange: [0, 0, 100],
                  extrapolate: "clamp",
                }),
              },
            ],
          }}
        >
          <RecipeCreatorCardInfo />
          {/* <RecipeCreatorCardInfo selectedRecipe={selectedRecipe} /> */}
        </Animated.View>
      </View>
    );
  }
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}
    >
      {selectedRecipe && (
        <Animated.FlatList
          data={selectedRecipe?.ingredients}
          keyExtractor={(item) => `${item.id}`}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={
            <View>
              {/* header  */}
              {renderRecipeCardHeader()}
            </View>
          }
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: scrollY } } }],
            { useNativeDriver: true }
          )}
          renderItem={({ item }) => {
            return (
              <View
                style={{
                  flexDirection: "row",
                  paddingHorizontal: 30,
                  marginVertical: 5,
                }}
              >
                {/* icon */}
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    height: 50,
                    width: 50,
                    borderRadius: 5,
                    backgroundColor: COLORS.lightGray,
                  }}
                >
                  <Image source={item.icon} style={{ height: 40, width: 40 }} />
                </View>
                {/* description  */}
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                  }}
                >
                  <Text
                    style={{
                      ...FONTS.body3,
                    }}
                  >
                    {item.description}
                  </Text>
                </View>

                {/* qty */}
                <View
                  style={{
                    alignItems: "flex-end",
                    justifyContent: "center",
                  }}
                >
                  <Text>{item.quantity}</Text>
                </View>
              </View>
            );
          }}
        />
      )}
    </View>
  );
};

export default Recipe;
