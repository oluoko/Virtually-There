import { View, Text, StatusBar, ImageBackground } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CallActionBox from "@/components/CallActionBox";

const OnCall = () => {
  return (
    <View className="bg-black flex-1 relative">
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <SafeAreaView
        className=" h-full relative px-2
      "
      >
        <View className="absolute bg-gray-800/20 border border-gray-800 rounded-xl top-10 right-5 w-1/3 h-[180px]"></View>
        <Text className="text-white ">onCall</Text>
        <CallActionBox className={"bg-transparent absolute bottom-8 w-full"} />
      </SafeAreaView>
    </View>
  );
};

export default OnCall;
