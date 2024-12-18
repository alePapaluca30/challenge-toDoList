import React, { useState } from "react";
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

  return (
    <div className="container">
      <div className="container-filter">
        <Link href="/about" className="custom-link">
          <div className="custom-link-title">
            📖 🛠️ Explora sobre nuestras herramientas
          </div>
        </Link>
        <TaskFilter onFilterChange={(newFilters) => setFilters(newFilters)} />
      </div>
      <div className="board-container">
        {columnConfig.map((column) => (
          <div key={column.state} className="board-card">
            <h3 className="board-title-card">{column.title}</h3>

            {/* Add Task */}
            {column.state === "to-do" && (
              <div className="container-delete">
                <Button
                  onClick={handleEnableNewTask}
                  label=" + Nueva Tarea"
                  classname="add-task"
                />
              </div>
            )}

            <div
              style={{ display: "flex", flexDirection: "column", rowGap: 20 }}
            >
              {/* Card add task */}
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

              {/* Task list */}
              {filteredTasks
                .filter((task) => task.state === column.state)
                .map((task) => (
                  <TaskCard
                    key={task.id}
                    id={task.id}
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
    </div>
  );
};

export default TaskBoard;
