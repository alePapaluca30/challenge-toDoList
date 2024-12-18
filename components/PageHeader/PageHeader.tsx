import React from "react";
import TaskFilter from "../Filter/Filter";
import Link from "next/link";

const PageHeader = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Link href="/about">Aceca de la aplicacion</Link>

    </div>
  );
};

export default PageHeader;
