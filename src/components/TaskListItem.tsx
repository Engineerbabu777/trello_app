import { Pressable, StyleSheet, Text } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import { Link, router } from "expo-router";

export type TaskType = {
  description: string;
  id: any;
};

type Props = {
  task: TaskType;
};
export default function TaskListItem({ task }: Props) {
  return (
    <>
      <Pressable
        style={styles.container}
        onPress={() => {
          router.navigate({ pathname: `/details`, params: { id: task.id } });
        }}
      >
        <Text style={styles.text}>{task.description}</Text>

        <Entypo name="cross" size={16} color="gray" />
      </Pressable>
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
