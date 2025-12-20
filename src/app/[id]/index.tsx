import { Stack, useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function TaskDetailsScreen() {
  const { id } = useLocalSearchParams();

  return (
    <>
      <View style={{ padding: 10 }}>
        <Stack.Screen options={{ title: "Task Details" }} />

        <Text style={{ color: "white", fontSize: 20 }}>ID:{id}</Text>
      </View>
    </>
  );
}
