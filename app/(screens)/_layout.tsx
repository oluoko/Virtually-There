import { Stack } from "expo-router";

const ScreensLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="calling" options={{ headerShown: false }} />
    </Stack>
  );
};

export default ScreensLayout;
