export interface EditableFieldProps {
  field: "title" | "description";
  value: string | null;
  placeholder: string;
  isEditing: boolean;
  onEdit: () => void;
  editValue: string;
  onValueChange: (newValue: string) => void;
  onSave: () => void;
  onCancel: () => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}
