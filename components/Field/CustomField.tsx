import React from "react";
import Button from "../Button/Button";
import { EditableFieldProps } from "@/types/Field";

const CustomField: React.FC<EditableFieldProps> = ({
  field,
  value,
  placeholder,
  isEditing,
  onEdit,
  editValue,
  onValueChange,
  onSave,
  onCancel,
  onKeyDown,
}) => {
  return isEditing ? (
    <div style={{ display: "flex", gap: "8px" }}>
      <input
        type="text"
        value={editValue}
        onChange={(e) => onValueChange(e.target.value)}
        onKeyDown={onKeyDown}
        placeholder={placeholder}
        autoFocus
      />
      <Button onClick={onSave} label="Guardar" />
      <Button onClick={onCancel} label="Cancelar" />
    </div>
  ) : (
    <div
      onClick={onEdit}
      style={{
        cursor: "pointer",
        padding: "4px",
        borderBottom: "1px dashed #ccc",
      }}
      tabIndex={0}
      aria-label={`Editar ${field}`}
    >
      {value || placeholder}
    </div>
  );
};

export default CustomField;
