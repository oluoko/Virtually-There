import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const calling = () => {
  const icons = [
    { name: "ios-camera-reverse" },
    { name: "video-slash" },
    { name: "microphone" },
    { name: "phone-hangup" },
  ];
  return (
    <SafeAreaView className="flex-1 bg-[#000] h-full items-center">
      <View className=" flex-1 items-center p-2">
        <Text className="text-[30px] font-black text-white mt-12 mb-3">
          Brian Otieno
        </Text>
        <Text className="font-[20px] text-white">
          ringing... +254 112 558 808{" "}
        </Text>
      </View>

      <View className="bg-[#333]/50 p-3 rounded-full w-[95%] mb-3 flex-row justify-around">
        {icons.map((icon) => (
          <View
            className={`rounded-full size-[45px] flex items-center justify-center ${
              icon.name === "phone-hangup" ? "bg-red-700" : "bg-[#4a4a4a] "
            }`}
          >
            <FontAwesome5 name={icon.name} size={24} color="white" />
          </View>
        ))}
        {/* <Ionicons name="camera-reverse" size={30} color="black" />
        <FontAwesome5 name="video-slash" size={26} color="black" />
        <FontAwesome6 name="microphone" size={25} color="black" />
        <MaterialCommunityIcons name="phone-hangup" size={32} color="black" /> */}
      </View>
    </SafeAreaView>
  );
};

export default calling;
