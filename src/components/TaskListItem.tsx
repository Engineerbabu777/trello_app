import { StyleSheet, Text, View } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";

type TaskType = {
  description: string;
};

type Props = {
  task: TaskType;
};
export default function TaskListItem({ task }: Props) {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.text}>{task.description}</Text>

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
