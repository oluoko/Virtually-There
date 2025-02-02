import {
  View,
  Text,
  StatusBar,
  ImageBackground,
  Easing,
  Animated,
} from "react-native";
import React, { useEffect, useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";

import bg from "../../assets/images/ios_bg.png";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const IncomingCall = () => {
  const icons = [
    {
      id: 1,
      provider: Feather,
      name: "x",
      size: 32,
      label: "Decline",
    },
    {
      id: 2,
      provider: Feather,
      name: "check",
      size: 34,
      label: "Accept",
    },
  ];

  const callOptions = [
    {
      id: 1,
      provider: Ionicons,
      name: "alarm",
      size: 22,
      label: "Remind Me",
    },
    {
      id: 2,
      provider: MaterialCommunityIcons,
      name: "message-processing",
      size: 20,
      label: "Message",
    },
  ];

  // Create refs for animations
  const bounceAnimations = useRef(
    icons.map(() => new Animated.Value(0))
  ).current;

  useEffect(() => {
    // Create animations for each icon
    bounceAnimations.forEach((animation) => {
      const bounce = Animated.sequence([
        Animated.timing(animation, {
          toValue: -15,
          duration: 1000,
          useNativeDriver: true,
          easing: Easing.inOut(Easing.ease),
        }),
        Animated.timing(animation, {
          toValue: 0,
          duration: 3500,
          useNativeDriver: true,
          easing: Easing.inOut(Easing.ease),
        }),
      ]);

      Animated.loop(bounce).start();
    });

    return () =>
      bounceAnimations.forEach((animation) => animation.stopAnimation());
  }, []);

  return (
    <View className="flex-1">
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <ImageBackground
        source={bg}
        className="absolute w-full h-full"
        resizeMode="cover"
      >
        <SafeAreaView
          className="flex-1 items-center"
          edges={["bottom"]}
          style={{ backgroundColor: "rgba(0,0,0,0.3)" }} // Optional overlay
        >
          <View className="flex-1 items-center p-2">
            <Text className="text-[45px] font-black text-white mt-14 mb-3">
              Brian Otieno
            </Text>
            <Text className="text-[20px] text-white">
              Incoming Call: +254 112 558 808
            </Text>
          </View>
          <View className="w-[80%] mb-[85px] flex-row justify-between">
            {callOptions.map((icon, index) => (
              <Link href={"/calling"} key={icon.id}>
                <View className="flex items-center justify-center flex-col">
                  <icon.provider
                    name={icon.name}
                    size={icon.size}
                    color="white"
                  />
                  <Text className="text-white text-[10px] mt-3 text-center w-20">
                    {icon.label}
                  </Text>
                </View>
              </Link>
            ))}
          </View>
          <View className="w-[80%] mb-[70px] flex-row justify-between">
            {icons.map((icon, index) => (
              <Link href={"/calling"} key={icon.id}>
                <View className="flex items-center justify-center flex-col">
                  <Animated.View
                    style={{
                      transform: [{ translateY: bounceAnimations[index] }],
                    }}
                  >
                    <View
                      className={`rounded-full size-[65px] flex items-center justify-center animate-bounce ${
                        icon.label === "Decline" ? "bg-red-600" : "bg-green-600"
                      }`}
                    >
                      <icon.provider
                        name={icon.name}
                        size={icon.size}
                        color="white"
                      />
                    </View>
                  </Animated.View>
                  <Text className="text-white text-[20px] font-bold mt-3 w-20 text-center">
                    {icon.label}
                  </Text>
                </View>
              </Link>
            ))}
          </View>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

export default IncomingCall;
