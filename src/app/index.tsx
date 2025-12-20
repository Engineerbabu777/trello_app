import TaskBoard from "@/components/TaskBoard";
import { StatusBar, StyleSheet, View } from "react-native";

export default function MainApp() {
  return (
    <>
      <StatusBar barStyle={"light-content"} />
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
