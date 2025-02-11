import { Stack } from "expo-router";
import { NavigationContainer } from "@react-navigation/native";
import "../global.css";

const RootLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: "transparent" },
        animation: "slide_from_right",
      }}
    >
      <NavigationContainer>
        <Stack.Screen name="index" />
        <Stack.Screen name="(screens)" options={{ headerShown: false }} />
      </NavigationContainer>
    </Stack>
  );
};

export default RootLayout;
