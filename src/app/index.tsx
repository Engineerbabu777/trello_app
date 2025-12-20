import TaskList from "@/components/TaskList";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function MainApp() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <TaskList />
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
