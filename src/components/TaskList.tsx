import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import TaskListItem from "./TaskListItem";
import { useState } from "react";

export default function TaskList() {
  const [tasks, setTasks] = useState([
    { description: "First Task" },
    { description: "Second Task" },
  ]);

  const [newTask, setNewTask] = useState("");

  const createTask = () => {
    setTasks([...tasks, { description: newTask }]);
    setNewTask("");
  };

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Todo</Text>

        <FlatList
          contentContainerStyle={{ gap: 5 }}
          data={tasks}
          renderItem={({ item }) => <TaskListItem task={item} />}
        />

        {/* INPUT */}

        <TextInput
          value={newTask}
          onChangeText={setNewTask}
          placeholder="New task"
          placeholderTextColor={"gray"}
          style={styles.input}
        />
        <Button title="Add task" onPress={createTask} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#101112",
    padding: 10,
    borderRadius: 5,
    gap: 5,
  },
  title: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  input: {
    color: "white",
    padding: 15,
    backgroundColor: "#1D2125",
    borderRadius: 5,
  },
});
