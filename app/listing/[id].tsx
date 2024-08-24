import { useLocalSearchParams, useNavigation } from "expo-router";
import React, { useLayoutEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  Share,
} from "react-native";
import listingsData from "@/assets/data/airbnb-listings.json";
import { Ionicons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";
import Animated, {
  SlideInDown,
  interpolate,
  useAnimatedRef,
  useAnimatedStyle,
  useScrollViewOffset,
} from "react-native-reanimated";
import { defaultStyles } from "@/constants/Styles";

const { width } = Dimensions.get("screen");
const IMG_HEIGHT = 300;

const Page = () => {
  const { id } = useLocalSearchParams<{ id: string }>();

  const listing = (listingsData as any[]).find((listing) => listing.id === id);

  return (
    <View style={styles.container}>
      <Animated.ScrollView>
        <Animated.Image
          source={{ uri: listing.xl_picture_url }}
          style={styles.image}
        />
      </Animated.ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    width,
    height: IMG_HEIGHT,
  },
});

export default Page;
