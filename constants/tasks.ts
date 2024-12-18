import { TaskCardProps } from "@/types/TaskCardProps";

export const columnConfig = [
  { title: "To-Do", state: "to-do" },
  { title: "Doing", state: "doing" },
  { title: "Done", state: "done" },
];

export const initialTask: TaskCardProps[] = [
  {
    id: "1",
    title: "Mi Titulo",
    description: "descripcion 1",
    state: "doing",
    onStateChange: () => {},
    onUpdateTask: () => {},
  },
  {
    id: "2",
    title: "Mi Titulo",
    description: "descripcion 2",
    state: "to-do",
    onStateChange: () => {},
    onUpdateTask: () => {},
  },
];

export const typeField = { text: "text", textarea: "textarea" };

export const states = ["to-do", "doing", "done"];

export const LOCAL_STORAGE_KEY = "tasks";
