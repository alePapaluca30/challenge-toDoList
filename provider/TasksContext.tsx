import { Filters, Task, TasksContextType } from "@/types/TaskActions";
import React, { createContext, useContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

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
    if (savedTasks) {
      const parsedTasks = JSON.parse(savedTasks);
      setTasks(JSON.parse(savedTasks));
    }
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

  const deleteTask = (taskId: string) => {
    setTasks((prevTasks) => {
      const updatedTasks = prevTasks.filter((task) => task.id !== taskId);

      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
      return updatedTasks;
    });
  };

  const getFilteredTasks = (filters: Filters): Task[] => {
    if (filters.all) return tasks;

    return tasks.filter((task: any) => {
      if (filters.completed && task.state === "done") return true;
      if (
        filters.incomplete &&
        (task.state === "doing" || task.state === "to-do")
      )
        return true;
      return false;
    });
  };
  return (
    <TasksContext.Provider
      value={{
        tasks,
        updateTaskState,
        updateTaskDetails,
        addTask,
        deleteTask,
        getFilteredTasks,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};
