import React, { createContext, useContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

type Task = {
  id: string;
  title: string;
  description: string;
  state: "to-do" | "doing" | "done";
};

type TasksContextType = {
  tasks: Task[];
  updateTaskState: (id: string, newState: "to-do" | "doing" | "done") => void;
  updateTaskDetails: (id: string, updates: Partial<Task>) => void;
  addTask: (newTask: Task) => void;
};

const TasksContext = createContext<TasksContextType | undefined>(undefined);

export const useTasks = () => {
  const context = useContext(TasksContext);
  if (!context) throw new Error("useTasks must be used within a TasksProvider");

  return context;
};

export const TasksProvider = ({ children }: { children: React.ReactNode }) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) setTasks(JSON.parse(savedTasks));
    // else setTasks(initialTask);
  }, []);

  useEffect(() => {
    if (tasks.length > 0) localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const updateTaskState = (
    id: string,
    newState: "to-do" | "doing" | "done"
  ) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, state: newState } : task
      )
    );
  };

  const updateTaskDetails = (id: string, updates: Partial<Task>) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === id ? { ...task, ...updates } : task))
    );
  };

  const addTask = (newTask: Task) => {
    const taskWithId: Task = { ...newTask, id: uuidv4(), state: "to-do" };
    setTasks((prevTasks) => [...prevTasks, taskWithId]);
  };

  return (
    <TasksContext.Provider
      value={{ tasks, updateTaskState, updateTaskDetails, addTask }}
    >
      {children}
    </TasksContext.Provider>
  );
};
