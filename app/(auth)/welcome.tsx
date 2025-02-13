import { View, Text, StatusBar, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "@/components/CustomButton";
import { useRouter } from "expo-router";
import logo from "@/assets/images/icon.png";

const welcome = () => {
  const router = useRouter();
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="white" />
      <SafeAreaView className="bg-white h-full flex items-center justify-center">
        <Image
          source={logo}
          className="w-full h-[300px]"
          resizeMode="contain"
        />
        <CustomButton
          title={"Get Started"}
          onPress={() => router.replace("/(auth)/sign-in")}
          className="w-10/12 h-[50px]  mt-10 mb-5 bg-blue-500"
        />
      </SafeAreaView>
    </>
  );
};

export default welcome;
