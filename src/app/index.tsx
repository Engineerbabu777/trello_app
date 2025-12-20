import TaskListItem from "@/components/TaskListItem";
import { SafeAreaView } from "react-native-safe-area-context";

export default function MainApp() {
  return (
    <>
      <SafeAreaView>
        <TaskListItem />
      </SafeAreaView>
    </>
  );
}
