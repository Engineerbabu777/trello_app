import { FlatList, Text, View } from "react-native";
import TaskListItem from "./TaskListItem";
import { useState } from "react";

export default function TaskList() {
  const [tasks, setTasks] = useState([
    { description: "First Task" },
    { description: "Second Task" },
  ]);

  return (
    <>
      <View
        style={{ backgroundColor: "#101112", padding: 10, borderRadius: 5 }}
      >
        <Text
          style={{
            color: "white",
            fontWeight: "bold",
            fontSize: 20,
            marginVertical: 10,
          }}
        >
          Todo
        </Text>

        <FlatList
          contentContainerStyle={{ gap: 5 }}
          data={tasks}
          renderItem={({ item }) => <TaskListItem task={item} />}
        />

        {/* INPUT */}
      </View>
    </>
  );
}
