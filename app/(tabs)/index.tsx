import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

const index = () => {
  return (
    <View>
      <Link href={"/(modals)/login"}>
        <Text>Login</Text>
      </Link>
      <Link href={"/(modals)/booking"}>
        <Text>Booking</Text>
      </Link>
      <Link href={"/listing/1"}>
        <Text>Listing</Text>
      </Link>
    </View>
  );
};

export default index;
