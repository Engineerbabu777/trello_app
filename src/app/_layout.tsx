import { DarkTheme, ThemeProvider } from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar } from "react-native";

export default function RootAppLayout() {
  return (
    <ThemeProvider value={DarkTheme}>
      <StatusBar barStyle={"light-content"} />

      <Stack>
        <Stack.Screen name="index" />
      </Stack>
    </ThemeProvider>
  );
}
