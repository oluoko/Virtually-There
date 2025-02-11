import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Link, useRouter } from "expo-router";

const CallActionBox = ({ className }) => {
  const route = useRouter();
  const [isCameraReverse, setIsCameraReverse] = useState(true);
  const [isMicrophoneMuted, setIsMicrophoneMuted] = useState(true);
  const [isVideoMuted, setIsVideoMuted] = useState(true);

  const onReverseCamera = () => {
    // route.replace("/(screens)/incoming-call");

    setIsCameraReverse((currentValue) => !currentValue);
    route.replace("/(screens)/incoming-call");
  };

  const onVideoHangup = () => {
    setIsVideoMuted((currentValue) => !currentValue);
    // route.replace("/");
  };
  const onMicrophoneClick = () => {
    setIsMicrophoneMuted((currentValue) => !currentValue);
    // route.replace("/");
  };
  const onPhoneHangup = () => {
    route.replace("/");
  };

  const icons = [
    {
      id: 1,
      provider: Ionicons,
      name: "camera-reverse",
      size: isCameraReverse ? 32 : 28,
      clickEvent: onReverseCamera,
      color: isCameraReverse ? "white" : "#4a4a4a",
    },
    {
      id: 2,
      provider: FontAwesome5,
      name: "video-slash",
      size: isVideoMuted ? 26 : 22,
      clickEvent: onVideoHangup,
      color: isVideoMuted ? "white" : "#4a4a4a",
    },
    {
      id: 3,
      provider: FontAwesome6,
      name: "microphone",
      size: isMicrophoneMuted ? 26 : 22,
      clickEvent: onMicrophoneClick,
      color: isMicrophoneMuted ? "white" : "#4a4a4a",
    },
    {
      id: 4,
      provider: MaterialCommunityIcons,
      name: "phone-hangup",
      size: 34,
      clickEvent: onPhoneHangup,
      color: "white",
    },
  ];

  return (
    <View className={` p-3  flex-row justify-between ${className}`}>
      {icons.map((icon) => (
        <Pressable onPress={icon.clickEvent} key={icon.id}>
          <View
            className={`rounded-full size-[65px] flex items-center justify-center  ${
              icon.name === "phone-hangup" && "bg-red-600"
            }`}
          >
            <icon.provider
              name={icon.name}
              size={icon.size}
              color={icon.color}
            />
          </View>
        </Pressable>
      ))}
    </View>
  );
};

export default CallActionBox;
