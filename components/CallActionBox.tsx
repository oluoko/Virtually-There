import { View, Text, Pressable } from "react-native";
import React from "react";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Link, useRouter } from "expo-router";

const CallActionBox = ({ className }) => {
  const route = useRouter();

  const onReverseCamera = () => {
    route.replace("/(screens)/incoming-call");
  };

  const onVideoHangup = () => {
    route.replace("/");
  };
  const onMicrophoneClick = () => {
    route.replace("/");
  };
  const onPhoneHangup = () => {
    route.replace("/");
  };

  const icons = [
    {
      id: 1,
      provider: Ionicons,
      name: "camera-reverse",
      size: 28,
      clickEvent: onReverseCamera,
    },
    {
      id: 2,
      provider: FontAwesome5,
      name: "video-slash",
      size: 24,
      clickEvent: onVideoHangup,
    },
    {
      id: 3,
      provider: FontAwesome6,
      name: "microphone",
      size: 24,
      clickEvent: onMicrophoneClick,
    },
    {
      id: 4,
      provider: MaterialCommunityIcons,
      name: "phone-hangup",
      size: 32,
      clickEvent: onPhoneHangup,
    },
  ];

  return (
    <View className={` p-3  flex-row justify-between ${className}`}>
      {icons.map((icon) => (
        <Pressable
          onPress={icon.clickEvent}
          key={icon.id}
          className={`rounded-full size-[45px] flex items-center justify-center ${
            icon.name === "phone-hangup" ? "bg-red-600" : "bg-[#4a4a4a]"
          }`}
        >
          <Link href={"/incoming-call"}>
            <icon.provider name={icon.name} size={icon.size} color="white" />
          </Link>
        </Pressable>
      ))}
    </View>
  );
};

export default CallActionBox;
