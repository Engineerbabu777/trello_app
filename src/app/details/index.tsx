import { Task } from "@/models/Task";
import { useObject, useRealm } from "@realm/react";
import { Stack, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { Text, TextInput, View } from "react-native";
import { BSON } from "realm";

export default function TaskDetailsScreen() {
  const { id } = useLocalSearchParams();
  const realm = useRealm();

  const task = useObject<Task>(Task, new BSON.ObjectID(id as string));

  const [updatedDescription, setUpdatedDescription] = useState(
    task?.description || ""
  );

  const updateDescription = () => {
    if (!task) {
      return;
    }
    realm.write(() => {
      task.description = updatedDescription;
    });
  };

  if (!task) {
    return <Text>Not found</Text>;
  }

  return (
    <>
      <View style={{ padding: 10 }}>
        <Stack.Screen options={{ title: "Task Details" }} />

        <TextInput
          value={updatedDescription}
          onChangeText={setUpdatedDescription}
          onEndEditing={updateDescription}
          style={{ color: "white", fontSize: 20 }}
        />
      </View>
    </>
  );
}
