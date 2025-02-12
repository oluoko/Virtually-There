import { View, Text, StatusBar, Pressable } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CallActionBox from "@/components/CallActionBox";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter, useLocalSearchParams } from "expo-router";

type CallingParams = {
  user_id: string;
  user_name: string;
  user_email: string;
  user_phone: string;
  user_display_name: string;
};

const Calling = () => {
  const router = useRouter();
  const params = useLocalSearchParams<CallingParams>();

  const goBack = () => {
    router.back();
  };

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="black" />
      <SafeAreaView
        className="flex-1 bg-[#000] h-full items-center"
        edges={["top", "bottom"]}
      >
        <Pressable onPress={goBack} className="absolute top-[40px] left-[10px]">
          <Ionicons name="chevron-back" size={25} color="white" />
        </Pressable>
        <View className="flex-1 items-center p-2">
          <Text className="text-[45px] font-black text-white mt-12 mb-3">
            {params.user_display_name}
          </Text>
          <Text className="text-white my-2">
            {params.user_name} - {params.user_email}
          </Text>
          <Text className="text-[20px] text-white">
            ringing... {params.user_phone}
          </Text>
        </View>
        <CallActionBox className={"bg-[#333]/50 mb-5 rounded-full w-[95%]"} />
      </SafeAreaView>
    </>
  );
};

export default Calling;
