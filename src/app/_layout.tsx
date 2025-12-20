import { Stack } from "expo-router";
import { StatusBar } from "react-native";

export default function RootAppLayout() {
  return (
    <>
      <StatusBar barStyle={"light-content"} />

      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
      </Stack>
    </>
  );
}
