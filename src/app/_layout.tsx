import { DarkTheme, ThemeProvider } from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar } from "react-native";
import RealmProvider from "../providers/Realm";
export default function RootAppLayout() {
  return (
    <ThemeProvider value={DarkTheme}>
      <RealmProvider>
        <StatusBar barStyle={"light-content"} />

        <Stack>
          <Stack.Screen name="index" />
        </Stack>
      </RealmProvider>
    </ThemeProvider>
  );
}
