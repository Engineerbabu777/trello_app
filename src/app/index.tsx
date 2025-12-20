import TaskBoard from "@/components/TaskBoard";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function MainApp() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <TaskBoard />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
  },
});
