import TaskBoard from "@/components/TaskBoard";
import { Stack } from "expo-router";
import { StyleSheet, View } from "react-native";

export default function MainApp() {
  return (
    <>
      <Stack.Screen options={{ title: "Project Board" }} />

      <View style={styles.container}>
        <TaskBoard />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
  },
});
