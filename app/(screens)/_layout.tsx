import { Stack } from "expo-router";

const ScreensLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: "black" },
        animation: "slide_from_right",
      }}
    >
      <Stack.Screen name="calling" />
      <Stack.Screen name="incoming-call" />
    </Stack>
  );
};

export default ScreensLayout;
