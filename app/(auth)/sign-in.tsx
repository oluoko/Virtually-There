import { Link } from "expo-router";
import React from "react";
import { StatusBar, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SignIn = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="black" />
      <SafeAreaView className="bg-black h-full flex items-center justify-center">
        <Text className="text-white">
          Don't have an account?{" "}
          <Link href="/(auth)/sign-up" className="text-blue-400">
            Sign Up.
          </Link>
        </Text>
      </SafeAreaView>
    </>
  );
};

export default SignIn;
