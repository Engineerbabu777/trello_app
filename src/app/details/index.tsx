import { Stack } from "expo-router";
import { Text, View } from "react-native";

export default function TaskDetailsScreen() {
  return (
    <>
      <View>
        <Stack.Screen options={{ title: "Task Details" }} />

        <Text style={{ color: "white" }}>details</Text>
      </View>
    </>
  );
}
