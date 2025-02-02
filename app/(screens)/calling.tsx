import { View, Text, StatusBar } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CallActionBox from "@/components/CallActionBox";

const calling = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="black" />
      <SafeAreaView
        className="flex-1 bg-[#000] h-full items-center"
        edges={["top", "bottom"]} // This will only apply safe area to bottom
      >
        <View className="flex-1 items-center p-2">
          <Text className="text-[45px] font-black text-white mt-12 mb-3">
            Brian Otieno
          </Text>
          <Text className="text-[20px] text-white">
            ringing... +254 112 558 808
          </Text>
        </View>
        <CallActionBox className={"bg-[#333]/50 mb-5 rounded-full w-[95%]"} />
      </SafeAreaView>
    </>
  );
};

export default calling;
