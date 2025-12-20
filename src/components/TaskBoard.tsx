import { View } from "react-native";
import TaskList from "./TaskList";

export default function TaskBoard() {
  return (
    <>
      <View
        style={{
          padding: 10,
        }}
      >
        <TaskList />
      </View>
    </>
  );
}
