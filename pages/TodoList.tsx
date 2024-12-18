import React from "react";
import TodoList from "@/components/TodoList/TodoList";
import PageHeader from "@/components/PageHeader/PageHeader";

const TodoListPage = () => {
  return (
    <div>
      <PageHeader />
      <TodoList />
    </div>
  );
};

export default TodoListPage;
