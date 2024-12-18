import React, { useState } from "react";
import TaskCard from "../TaskCard/TaskCard";
import { useTasks } from "@/provider/TasksContext";
import { columnConfig } from "@/constants/tasks";

const TodoListContainer = () => {
  const { tasks, updateTaskState, updateTaskDetails, addTask } = useTasks();
  const [newTaskEnabled, setNewTaskEnabled] = useState(false);

  const handleEnableNewTask = () => {
    setNewTaskEnabled(true);
  };

  const handleSaveNewTask = (taskDetails: any) => {
    console.log(taskDetails);
    
    addTask({
      ...taskDetails,
    });

    setNewTaskEnabled(false);
  };

  const handleCancelNewTask = () => {
    setNewTaskEnabled(false);
  };

  return (
    <div className="board-container">
      {columnConfig.map((column) => (
        <div key={column.state} className="board-card">
          <h3 className="board-title-card">{column.title}</h3>

          {/* Add Task */}
          {column.state === "to-do" && (
            <button onClick={handleEnableNewTask} className="add-task">
              + Nueva Tarea
            </button>
          )}

          <div style={{ display: "flex", flexDirection: "column", rowGap: 20 }}>
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
              />
            )}

            {/* Task list */}
            {tasks
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
                />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoListContainer;