import { Task } from "@/models/Task";
import { useObject } from "@realm/react";
import { Stack, useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";
import { BSON } from "realm";

export default function TaskDetailsScreen() {
  const { id } = useLocalSearchParams();

  const task = useObject<Task>(Task, new BSON.ObjectID(id as string));

  if (!task) {
    return <Text>Not found</Text>;
  }

  return (
    <>
      <View style={{ padding: 10 }}>
        <Stack.Screen options={{ title: "Task Details" }} />

        <Text style={{ color: "white", fontSize: 20 }}>ID:{id}</Text>
      </View>
    </>
  );
}
