import React, { useCallback, useState } from "react";
import TaskCard from "../TaskCard/TaskCard";
import { useTasks } from "@/provider/TasksContext";
import { columnConfig } from "@/constants/tasks";
import Button from "../Button/Button";
import TaskFilter from "../Filter/Filter";
import Link from "next/link";

const TaskBoard = () => {
  const {
    updateTaskState,
    updateTaskDetails,
    addTask,
    deleteTask,
    getFilteredTasks,
  } = useTasks();
  const [newTaskEnabled, setNewTaskEnabled] = useState(false);
  const [filters, setFilters] = useState({
    completed: false,
    incomplete: false,
    all: true,
  });

  const handleEnableNewTask = () => {
    setNewTaskEnabled(true);
  };

  const handleSaveNewTask = (taskDetails: any) => {
    addTask({
      ...taskDetails,
    });

    setNewTaskEnabled(false);
  };

  const filteredTasks = getFilteredTasks(filters);

  const handleFilterChange = useCallback((newFilters: any) => {
    setFilters(newFilters);
  }, []);

  return (
    <div className="container">
      <div className="container-filter">
        <h2 className="page-title-deco">Listado de tareas</h2>
        {/* Filter */}
        <TaskFilter onFilterChange={handleFilterChange} />
      </div>
      <div className="board-container">
        {columnConfig.map((column) => (
          <div key={column.state} className="board-card">
            <div className="board-title-card" style={{ display: "flex" }}>
              <h2>{column.title}</h2>
              {column.state === "to-do" && (
                <div>
                  <Button
                    onClick={handleEnableNewTask}
                    icon={<span className="material-icons">add</span>}
                    label="Nueva tarea"
                  />
                </div>
              )}
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", rowGap: 20 }}
            >
              {newTaskEnabled && column.state === "to-do" && (
                <TaskCard
                  title=""
                  description=""
                  state="to-do"
                  onStateChange={() => {}}
                  onUpdateTask={(newTaskDetails) =>
                    handleSaveNewTask(newTaskDetails)
                  }
                  onDeleteTask={() => deleteTask("")}
                />
              )}
              {filteredTasks
                .filter((task) => task.state === column.state)
                .map((task) => (
                  <TaskCard
                    key={task.id}
                    title={task.title}
                    description={task.description}
                    state={task.state}
                    onStateChange={(newState) =>
                      updateTaskState(task.id, newState)
                    }
                    onUpdateTask={(updatedTask) =>
                      updateTaskDetails(task.id, {
                        title: updatedTask.title,
                        description: updatedTask.description,
                        state: updatedTask.state,
                      })
                    }
                    onDeleteTask={() => deleteTask(task.id)}
                  />
                ))}
            </div>
          </div>
        ))}
      </div>
      <footer className="task-board-footer">
        <span
          className="material-icons"
          style={{ color: "#eb8317", cursor: "default" }}
        >
          construction
        </span>
        <Link href="/about">
          <span className="custom-link-title">
            Explora sobre nuestras herramientas
          </span>
        </Link>
      </footer>
    </div>
  );
};

export default TaskBoard;
