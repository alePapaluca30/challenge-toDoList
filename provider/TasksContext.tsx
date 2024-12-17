import { initialTask } from "@/constants/tasks";
import React, { createContext, useContext, useState } from "react";

type Task = {
  id: number;
  title: string;
  description: string;
  state: "to-do" | "doing" | "done";
};

type TasksContextType = {
  tasks: Task[];
  updateTaskState: (id: number, newState: "to-do" | "doing" | "done") => void;
  updateTaskDetails: (id: number, updates: Partial<Task>) => void;
  addTask: (newTask: Task) => void;
};

const TasksContext = createContext<TasksContextType | undefined>(undefined);

export const useTasks = () => {
  const context = useContext(TasksContext);
  if (!context) {
    throw new Error("useTasks must be used within a TasksProvider");
  }
  return context;
};

export const TasksProvider = ({ children }: { children: React.ReactNode }) => {
  const [tasks, setTasks] = useState<Task[]>(initialTask);

  const updateTaskState = (
    id: number,
    newState: "to-do" | "doing" | "done"
  ) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, state: newState } : task
      )
    );
  };

  const updateTaskDetails = (id: number, updates: Partial<Task>) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === id ? { ...task, ...updates } : task))
    );
  };

  const addTask = (newTask: Task) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  return (
    <TasksContext.Provider
      value={{ tasks, updateTaskState, updateTaskDetails, addTask }}
    >
      {children}
    </TasksContext.Provider>
  );
};
