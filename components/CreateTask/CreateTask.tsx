import { NewTaskFormProps } from "@/types/TaskActions";
import { Task } from "@/types/TaskCardProps";
import { useState } from "react";

const NewTaskForm: React.FC<NewTaskFormProps> = ({
  closeModal,
  onCreateTask,
}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [state, setState] = useState<"to-do" | "doing" | "done">("to-do");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Crear la tarea
    const newTask: Task = {
      id: Date.now(),
      title,
      description,
      state,
    };

    onCreateTask(newTask);

    setTitle("");
    setDescription("");
    setState("to-do");
    closeModal();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label
          htmlFor="title"
          className="block text-sm font-medium text-gray-700"
        >
          Título
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          required
        />
      </div>

      <div>
        <label
          htmlFor="description"
          className="block text-sm font-medium text-gray-700"
        >
          Descripción
        </label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          required
        />
      </div>

      <div>
        <label
          htmlFor="state"
          className="block text-sm font-medium text-gray-700"
        >
          Estado
        </label>
        <select
          id="state"
          value={state}
          onChange={(e) =>
            setState(e.target.value as "to-do" | "doing" | "done")
          }
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          <option value="to-do">Pendiente</option>
          <option value="doing">En progreso</option>
          <option value="done">Completada</option>
        </select>
      </div>

      <button
        type="submit"
        className="mt-4 w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600"
      >
        Crear Tarea
      </button>
    </form>
  );
};

export default NewTaskForm;
