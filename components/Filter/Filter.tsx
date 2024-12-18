import React, { useState, useEffect } from "react";
import Button from "../Button/Button";
import { TaskFilterProps } from "@/types/TaskActions";

const TaskFilter: React.FC<TaskFilterProps> = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    completed: false,
    incomplete: false,
    all: true,
  });

  useEffect(() => {
    onFilterChange(filters);
  }, [filters]);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setFilters((prev) => ({
      ...prev,
      [name]: checked,
      all: name === "all" ? checked : false,
    }));
  };

  return (
    <div className="dropdown">
      <Button
        onClick={() => {}}
        label="Filtros"
        icon={<span className="material-icons">filter_alt</span>}
      />

      <div className="dropdown-content">
        <label className="dropdown-item">
          <input
            type="checkbox"
            name="completed"
            checked={filters.completed}
            onChange={handleCheckboxChange}
            disabled={filters.all}
          />
          Completas
        </label>
        <label className="dropdown-item">
          <input
            type="checkbox"
            name="incomplete"
            checked={filters.incomplete}
            onChange={handleCheckboxChange}
          />
          Incompletas
        </label>
        <label className="dropdown-item">
          <input
            type="checkbox"
            name="all"
            checked={filters.all}
            onChange={handleCheckboxChange}
          />
          Todas
        </label>
      </div>
    </div>
  );
};

export default TaskFilter;
