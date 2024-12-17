import React from "react";
import TodoList from "@/components/TodoList/TodoList";
import PageHeader from "@/components/PageHeader/PageHeader";

const actions = [
  {
    label: "Agregar tarea",
    action: () => console.log("asd"),
  },
];

const TodoListPage = () => {
  return (
    <div>
      <PageHeader actions={actions} />
      <TodoList />
    </div>
  );
};

export default TodoListPage;
