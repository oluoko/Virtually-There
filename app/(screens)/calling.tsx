import { View, Text, StatusBar } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Link } from "expo-router";

const calling = () => {
  const icons = [
    { id: 1, provider: Ionicons, name: "camera-reverse", size: 28 },
    { id: 2, provider: FontAwesome5, name: "video-slash", size: 24 },
    { id: 3, provider: FontAwesome6, name: "microphone", size: 24 },
    { id: 4, provider: MaterialCommunityIcons, name: "phone-hangup", size: 32 },
  ];

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
        <View className="bg-[#333]/50 p-3 rounded-full w-[95%] mb-5 flex-row justify-between">
          {icons.map((icon) => (
            <View
              key={icon.id}
              className={`rounded-full size-[45px] flex items-center justify-center ${
                icon.name === "phone-hangup" ? "bg-red-600" : "bg-[#4a4a4a]"
              }`}
            >
              <Link href={"/incoming-call"}>
                <icon.provider
                  name={icon.name}
                  size={icon.size}
                  color="white"
                />
              </Link>
            </View>
          ))}
        </View>
      </SafeAreaView>
    </>
  );
};

export default calling;
