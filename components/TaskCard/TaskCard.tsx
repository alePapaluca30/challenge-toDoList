import React, { useState } from "react";
import { TaskCardProps } from "@/types/TaskCardProps";
import TaskActions from "../TaskActions/TaskActions";
import CustomField from "../Field/CustomField";
import Button from "../Button/Button";

const TaskCard = ({
  id,
  title: initialTitle,
  description: initialDescription,
  state,
  onStateChange,
  onUpdateTask,
  onDeleteTask,
}: TaskCardProps) => {
  const [localTask, setLocalTask] = useState({
    title: initialTitle || "",
    description: initialDescription || "",
  });

  const [editingField, setEditingField] = useState<
    "title" | "description" | null
  >(null);

  const handleEdit = (field: "title" | "description") => {
    setEditingField(field);
  };

  const handleSave = () => {
    if (!editingField) return;

    const updatedValue = localTask[editingField].trim();
    if (updatedValue) {
      onUpdateTask?.({
        ...localTask,
        [editingField]: updatedValue,
        state,
      });

      setEditingField(null);
    }
  };

  const handleCancel = () => {
    setEditingField(null);
    setLocalTask({
      title: initialTitle || "",
      description: initialDescription || "",
    });
  };

  const handleChange = (field: "title" | "description", value: string) => {
    setLocalTask((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSave();
    if (e.key === "Escape") handleCancel();
  };

  return (
    <div className="task-card">
      <div style={{ position: "relative" }}>
        <div className="container-delete">
          <Button
            onClick={() => onDeleteTask()}
            icon={<span className="material-icons">delete_forever</span>}
            classname={"custom-button delete-button"}
          />
        </div>
      </div>
      <div className="content-card">
        <CustomField
          field="title"
          type="text"
          label="Título"
          value={localTask.title}
          placeholder="Haz clic para agregar un título"
          isEditing={editingField === "title"}
          onEdit={() => handleEdit("title")}
          editValue={localTask.title}
          onValueChange={(newValue) => handleChange("title", newValue)}
          onSave={handleSave}
          onCancel={handleCancel}
          onKeyDown={handleKeyDown}
        />

        <CustomField
          field="description"
          type="area"
          label="Descripción"
          value={localTask.description}
          placeholder="Haz clic para agregar una descripción"
          isEditing={editingField === "description"}
          onEdit={() => handleEdit("description")}
          editValue={localTask.description}
          onValueChange={(newValue) => handleChange("description", newValue)}
          onSave={handleSave}
          onCancel={handleCancel}
          onKeyDown={handleKeyDown}
        />
      </div>
      <TaskActions state={state} onStateChange={onStateChange} />
    </div>
  );
};

export default TaskCard;
