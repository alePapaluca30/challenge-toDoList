import React from "react";
import { states } from "@/constants/tasks";
import { TaskActionsProps } from "@/types/TaskActions";
import Button from "../Button/Button";

const TaskActions: React.FC<TaskActionsProps> = ({ state, onStateChange }) => {
  const handleMoveForward = () => {
    if (!onStateChange) return;

    const nextIndex = states.indexOf(state) + 1;
    if (nextIndex < states.length) {
      onStateChange(states[nextIndex] as "to-do" | "doing" | "done");
    }
  };

  const handleMoveBackward = () => {
    if (!onStateChange) return;

    const prevIndex = states.indexOf(state) - 1;
    if (prevIndex >= 0) {
      onStateChange(states[prevIndex] as "to-do" | "doing" | "done");
    }
  };

  return (
    <div className="actions-container">
      {state !== "to-do" && (
        <span
          className="material-icons prev-button move-button"
          onClick={handleMoveBackward}
        >
          chevron_left
        </span>
      )}
      {state !== "done" && (
        <span
          className="material-icons next-button move-button"
          onClick={handleMoveForward}
        >
          chevron_right
        </span>
      )}
    </div>
  );
};

export default TaskActions;
