export type Task = {
  id: number;
  title: string;
  description: string;
  state: "to-do" | "doing" | "done";
};

export interface TaskCardProps {
  title: string;
  description: string;
  state: "to-do" | "doing" | "done"; 
  onStateChange: (newState: "to-do" | "doing" | "done") => void;
  onUpdateTask: (task: {
    title?: string;
    description?: string;
    state?: "to-do" | "doing" | "done";
  }) => void;
  onDeleteTask: () => void;
}
