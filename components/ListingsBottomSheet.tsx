import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { useMemo, useRef, useState } from "react";
import BottomSheet from "@gorhom/bottom-sheet";
import Listings from "@/components/Listings";
import { Ionicons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";

interface Props {
  listings: any[];
  category: string;
}

const ListingsBottomSheet = ({ listings, category }: Props) => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ["10%", "100%"], []);

  return (
    <BottomSheet ref={bottomSheetRef} snapPoints={snapPoints}>
      <View style={{ flex: 1 }}>
        <Listings listings={listings} category={category} />
      </View>
    </BottomSheet>
  );
};

export default ListingsBottomSheet;
