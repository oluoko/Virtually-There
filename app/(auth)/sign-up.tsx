import { Link } from "expo-router";
import React from "react";
import { StatusBar, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SignUp = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="black" />
      <SafeAreaView className="bg-black h-full flex items-center justify-center">
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
