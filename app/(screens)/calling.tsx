import { View, Text, StatusBar, Pressable } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CallActionBox from "@/components/CallActionBox";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation, useRoute } from "@react-navigation/native";

const calling = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const user = route?.params?.user;

  const goBack = () => {
    navigation.goBack();
  };
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="black" />
      <SafeAreaView
        className="flex-1 bg-[#000] h-full items-center"
        edges={["top", "bottom"]} // This will only apply safe area to bottom
      >
        <Pressable onPress={goBack} className="absolute top-[40px] left-[10px]">
          <Ionicons name="chevron-back" size={25} color="white" />
        </Pressable>
        <View className="flex-1 items-center p-2">
          <Text className="text-[45px] font-black text-white mt-12 mb-3">
            {user?.user_display_name}
          </Text>
          <Text className="text-[20px] text-white">
            ringing... {user?.user_name}
          </Text>
        </View>
        <CallActionBox className={"bg-[#333]/50 mb-5 rounded-full w-[95%]"} />
      </SafeAreaView>
    </>
  );
};

export default calling;
