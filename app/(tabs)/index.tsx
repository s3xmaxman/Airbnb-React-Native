import { View, Text } from "react-native";
import React, { useState } from "react";
import { Link, Stack } from "expo-router";
import { useMemo } from "react";
import ExploreHeader from "@/components/ExploreHeader";
import Listings from "@/components/Listings";
import listingsData from "@/assets/data/airbnb-listings.json";

const index = () => {
  const items = useMemo(() => listingsData as any, []);
  const [category, setCategory] = useState<string>("Tiny homes");

  const onDataChange = (category: string) => {
    setCategory(category);
  };
  return (
    <View style={{ flex: 1, marginTop: 150 }}>
      <Stack.Screen
        options={{
          header: () => <ExploreHeader onCategoryChanged={onDataChange} />,
        }}
      />
      <Listings listings={items} refresh={0} category={category} />
    </View>
  );
};

export default index;
