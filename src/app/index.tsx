import TaskListItem from "@/components/TaskListItem";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function MainApp() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <TaskListItem task={{ description: "First Task" }} />
        <TaskListItem task={{ description: "Second Task" }} />
        <TaskListItem task={{ description: "Third Task" }} />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    padding: 10,
  },
});
