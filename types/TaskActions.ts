export interface TaskActionsProps {
  state: "to-do" | "doing" | "done";
  onStateChange: (newState: "to-do" | "doing" | "done") => void;
}

//PROPS PROVIDERS
export type Filters = {
  completed: boolean;
  incomplete: boolean;
  all: boolean;
};

export type Task = {
  id: string;
  title: string;
  description: string;
  state: "to-do" | "doing" | "done";
};

export type FilterOptions = {
  completed: boolean;
  incomplete: boolean;
  all: boolean;
};
export type TaskFilterProps = {
  onFilterChange: (filters: FilterOptions) => void;
};

export type TasksContextType = {
  tasks: Task[];
  updateTaskState: (id: string, newState: "to-do" | "doing" | "done") => void;
  updateTaskDetails: (id: string, updates: Partial<Task>) => void;
  addTask: (newTask: Task) => void;
  deleteTask: (id: string) => void;
  getFilteredTasks: (filters: FilterOptions) => Task[];
};
