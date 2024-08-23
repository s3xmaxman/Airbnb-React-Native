import {
  View,
  Text,
  StyleSheet,
  ListRenderItem,
  TouchableOpacity,
} from "react-native";
import { defaultStyles } from "@/constants/Styles";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import Animated, { FadeInRight, FadeOutLeft } from "react-native-reanimated";
import { useEffect, useRef, useState } from "react";
import {
  BottomSheetFlatList,
  BottomSheetFlatListMethods,
} from "@gorhom/bottom-sheet";

interface Props {
  listings: any[];
  refresh: number;
  category: string;
}

const Listings = ({ listings, refresh, category }: Props) => {
  useEffect(() => {});
  return (
    <View>
      <Text>Listings</Text>
    </View>
  );
};

export default Listings;
