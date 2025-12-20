import { Text, View } from "react-native";
import TaskListItem from "./TaskListItem";

export default function TaskList() {
  return (
    <>
      <View style={{}}>
        <Text style={{}}>Todo</Text>

        <TaskListItem task={{ description: "First Task" }} />
        <TaskListItem task={{ description: "Second Task" }} />
        <TaskListItem task={{ description: "Third Task" }} />

        {/* INPUT */}
      </View>
    </>
  );
}
