import { Task } from "./TaskCardProps";

export interface TaskActionsProps {
  state: "to-do" | "doing" | "done";
  onStateChange: (newState: "to-do" | "doing" | "done") => void;
}

//MODAL ADD TASK
export type NewTaskFormProps = {
  closeModal: () => void;
  onCreateTask: (task: Task) => void;
};