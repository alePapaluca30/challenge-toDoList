import React from "react";
import Button from "../Button/Button";
import { EditableFieldProps } from "@/types/Field";
import { typeField } from "@/constants/tasks";

const CustomField: React.FC<EditableFieldProps> = ({
  field,
  type,
  label,
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
    <div className="task-container">
      {type === typeField.text ? (
        <input
          type="text"
          value={editValue}
          onChange={(e) => onValueChange(e.target.value)}
          onKeyDown={onKeyDown}
          placeholder={placeholder}
          autoFocus
        />
      ) : (
        <textarea
          value={editValue}
          onChange={(e) => onValueChange(e.target.value)}
          placeholder={placeholder}
          autoFocus
        />
      )}

      <div className="actions-container">
        <Button
          onClick={onSave}
          icon={<span className="material-icons">save</span>}
          classname="custom-button-action"
        />
        <Button
          onClick={onCancel}
          icon={<span className="material-icons">close</span>}
          classname="custom-button-action"
        />
      </div>
    </div>
  ) : (
    <div
      onClick={onEdit}
      tabIndex={0}
      className="separator"
      aria-label={`Editar ${field}`}
    >
      <span className="task-container-input-label">
        {label}:
        <p className="task-container-input-value"> {value ?? placeholder}</p>
      </span>
    </div>
  );
};

export default CustomField;
