import { View, Text, StatusBar, Image, ImageBackground } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import bg from "../../assets/images/ios_bg.png";

const IncomingCall = () => {
  const icons = [
    {
      id: 1,
      provider: Ionicons,
      name: "camera-reverse",
      size: 28,
      label: "Decline",
    },
    {
      id: 2,
      provider: FontAwesome5,
      name: "video-slash",
      size: 24,
      label: "Accept",
    },
  ];
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="black" />
      <ImageBackground source={bg} className="size-screen " resizeMode="cover">
        {" "}
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
          <View className="bg-transparent  rounded-full w-[70%] mb-10 flex-row justify-between">
            {icons.map((icon) => (
              <Link href={"/calling"}>
                <View className="flex items-center justify-center flex-col ">
                  <View
                    key={icon.id}
                    className={`rounded-full size-[65px] flex items-center justify-center ${
                      icon.label === "Decline" ? "bg-red-600" : "bg-green-600"
                    }`}
                  >
                    <icon.provider
                      name={icon.name}
                      size={icon.size}
                      color="white"
                    />
                  </View>
                  <Text className="text-white text-[17px] mt-3">
                    {icon.label}
                  </Text>
                </View>
              </Link>
            ))}
          </View>
        </SafeAreaView>
      </ImageBackground>
    </>
  );
};

export default IncomingCall;
