import React, { useState, useEffect } from "react";
import { TaskCardProps } from "@/types/TaskCardProps";
import TaskActions from "../TaskActions/TaskActions";
import Button from "../Button/Button";

const TaskCard = ({
  id,
  title: initialTitle,
  description: initialDescription,
  state,
  onStateChange,
  onUpdateTask,
}: TaskCardProps) => {
  const [title, setTitle] = useState<string | null>(initialTitle);
  const [description, setDescription] = useState<string | null>(
    initialDescription
  );

  const [editingField, setEditingField] = useState<
    "title" | "description" | null
  >(null);
  const [newValue, setNewValue] = useState<string>("");

  useEffect(() => {
    setTitle(initialTitle);
    setDescription(initialDescription);
  }, [state, initialTitle, initialDescription]);

  // Editar título o descripción
  const handleEdit = (field: "title" | "description") => {
    setEditingField(field);
    setNewValue(field === "title" ? title || "" : description || "");
  };

  // Guardar cambios en título o descripción
  const handleSave = () => {
    const updates: {
      title?: string;
      description?: string;
      state?: "to-do" | "doing" | "done";
    } = {};

    if (newValue.trim() !== "") {
      if (editingField === "title") updates.title = newValue;

      if (editingField === "description") updates.description = newValue;
    }

    if (editingField === "title" || editingField === "description") {
      onUpdateTask &&
        onUpdateTask({
          id,
          ...updates,
          state: state as "to-do" | "doing" | "done" | undefined,
        });
    }

    setEditingField(null);
    setNewValue("");
  };

  // Guardar al presionar Enter
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSave();
    }
  };

  return (
    <div className="task-card">
      {/* Título */}
      {editingField === "title" ? (
        <div
          className="actions-container"
          style={{ display: "flex", gap: "8px" }}
        >
          <input
            type="text"
            value={newValue}
            onChange={(e) => setNewValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Escribe un título"
            style={{ color: "black" }}
          />
          <Button label="Guardar" onClick={handleSave}/>
        </div>
      ) : (
        <h3
          className="title"
          onClick={() => handleEdit("title")}
          style={{ cursor: "pointer" }}
        >
          {title || "Haz clic para agregar un título"}
        </h3>
      )}

      {/* Descripción */}
      {editingField === "description" ? (
        <div
          className="actions-container"
          style={{ display: "flex", gap: "8px" }}
        >
          <input
            type="text"
            value={newValue}
            onChange={(e) => setNewValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Escribe una descripción"
            style={{width: "100%"}}
          />
          <Button label={"Guardar"} onClick={handleSave} />
        </div>
      ) : (
        <p
          className="description"
          onClick={() => handleEdit("description")}
          style={{ cursor: "pointer" }}
        >
          {description || "Haz clic para agregar una descripción"}
        </p>
      )}

      {/* Botones para cambiar estado */}
      <TaskActions state={state} onStateChange={onStateChange} />
    </div>
  );
};

export default TaskCard;
