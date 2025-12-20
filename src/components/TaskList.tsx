import TaskListItem from "./TaskListItem";

export default function TaskList() {
  return (
    <>
      <TaskListItem task={{ description: "First Task" }} />
      <TaskListItem task={{ description: "Second Task" }} />
      <TaskListItem task={{ description: "Third Task" }} />
    </>
  );
}
