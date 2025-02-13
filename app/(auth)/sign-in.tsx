import CustomButton from "@/components/CustomButton";
import { Link } from "expo-router";
import React, { useState } from "react";
import { StatusBar, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { icons, images } from "@/constants";
import InputField from "@/components/InputField";

const SignIn = () => {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const onSignIn = () => {};
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="black" />
      <SafeAreaView className="bg-black size-full flex items-center   px-4 py-10">
        <Text className="text-4xl text-white font-black ">
          Sign in to your Account
        </Text>
        <View className="my-4 w-full flex items-stretch justify-center h-[70vh]">
          <TextInput
            className={`rounded-full w-full  border border-gray-400/50 p-4 my-4 font-bold text-[15px] text-left  text-black bg-white/70`}
            placeholder="Username"
            onChangeText={(text) => setForm({ ...form, username: text })}
            autoCapitalize="none"
          />
          <TextInput
            className={`rounded-full w-full  border border-gray-400/50 p-4 my-4 font-bold text-[15px] text-left text-black bg-white/70`}
            secureTextEntry
            placeholder="Password"
            onChangeText={(text) => setForm({ ...form, password: text })}
          />{" "}
          <CustomButton
            title="Sign In"
            onPress={onSignIn}
            className="w-full h-[45px] text-xl my-12 bg-blue-600"
          />
        </View>
        {/* <Text className="text-white">
          Don't have an account?{" "}
          <Link href="/(auth)/sign-up" className="text-blue-400">
            Sign Up.
          </Link>
        </Text> */}
      </SafeAreaView>
    </>
  );
};

export default SignIn;
