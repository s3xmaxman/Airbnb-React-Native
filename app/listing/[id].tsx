import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import listingsData from "@/assets/data/airbnb-listings.json";

const Page = () => {
  const { id } = useLocalSearchParams<{ id: string }>();

  const listing = (listingsData as any[]).find((listing) => listing.id === id);

  return (
    <View>
      <Text>[id]</Text>
    </View>
  );
};

export default Page;
