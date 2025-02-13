import InputField from "@/components/InputField";
import { Link } from "expo-router";
import React from "react";
import { StatusBar, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SignUp = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="black" />
      <SafeAreaView className="bg-black h-full flex items-center px-4 py-10">
        <Text className="text-4xl text-white font-black">
          Create Your Account
        </Text>
        <View className="my-4 h-[70vh]"></View>

        <Text className="text-white">
          Already have an account?{" "}
          <Link href="/(auth)/sign-in" className="text-blue-400 ">
            Log In.
          </Link>
        </Text>
      </SafeAreaView>
    </>
  );
};

export default SignUp;
