import { StyleSheet, Text, View } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";

export default function TaskListItem() {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.text}>Task</Text>

        <Entypo name="cross" size={16} color="gray" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1D2125",
    padding: 15,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    color: "#fff",
    fontSize: 16,
  },
});
