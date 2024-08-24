import { View, Text } from "react-native";
import React, { useState } from "react";
import { Link, Stack } from "expo-router";
import { useMemo } from "react";
import ExploreHeader from "@/components/ExploreHeader";
import Listings from "@/components/Listings";
import listingsData from "@/assets/data/airbnb-listings.json";
import listingsDataGeo from "@/assets/data/airbnb-listings.geo.json";
import ListingsMap from "@/components/ListingsMap";
import ListingsBottomSheet from "@/components/ListingsBottomSheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const index = () => {
  const items = useMemo(() => listingsData as any, []);
  const [category, setCategory] = useState<string>("Tiny homes");

  const onDataChange = (category: string) => {
    setCategory(category);
  };
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={{ flex: 1, marginTop: 150 }}>
        <Stack.Screen
          options={{
            header: () => <ExploreHeader onCategoryChanged={onDataChange} />,
          }}
        />
        <ListingsMap listings={listingsDataGeo} />
        <ListingsBottomSheet listings={items} category={category} />
      </View>
    </GestureHandlerRootView>
  );
};

export default index;
