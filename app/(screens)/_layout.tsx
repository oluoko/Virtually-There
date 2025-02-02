import { Stack } from "expo-router";

const ScreensLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: "transparent" },
        animation: "slide_from_right",
      }}
    >
      <Stack.Screen name="calling" />
      <Stack.Screen name="incoming-call" />
      <Stack.Screen name="on-call" />
    </Stack>
  );
};

export default ScreensLayout;
