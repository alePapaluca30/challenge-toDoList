import React, { useState } from "react";
import TaskCard from "../TaskCard/TaskCard";
import { useTasks } from "@/provider/TasksContext";
import { columnConfig } from "@/constants/tasks";
import NewTaskForm from "../CreateTask/CreateTask";

const TodoListContainer = () => {
  const { tasks, updateTaskState, updateTaskDetails, addTask } = useTasks();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = (): void => {
    setIsModalOpen(false);
  };

  const handleCreateTask = (newTask: any) => {
    addTask(newTask);
    closeModal();
  };

  return (
    <div className="board-container">
      {columnConfig.map((column) => (
        <div key={column.state} className="board-card">
          <h3 className="board-title-card">{column.title}</h3>
          <div style={{ display: "flex", flexDirection: "column", rowGap: 20 }}>
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

      {/* Modal */}
      {isModalOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "red",
          }}
        >
          <div className="bg-white p-6 rounded-md shadow-md w-96 z-60">
            <h2 className="text-xl font-semibold mb-4">Crear Nueva Tarea</h2>
            <NewTaskForm
              closeModal={closeModal}
              onCreateTask={handleCreateTask}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default TodoListContainer;
