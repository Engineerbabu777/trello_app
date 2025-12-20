import { StyleSheet, Text, View } from "react-native";

export default function TaskListItem() {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.text}>Task</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    padding: 10,
  },
  text: {
    color: "#fff",
  },
});
