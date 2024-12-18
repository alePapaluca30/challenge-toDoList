import { Task } from "./TaskCardProps";

export interface TaskActionsProps {
  state: "to-do" | "doing" | "done";
  onStateChange: (newState: "to-do" | "doing" | "done") => void;
}
