import React from "react";
import Button from "../Button/Button";

type Actions = {
  label: string;
  action: () => void;
};

type PageHeaderProps = {
  actions?: Actions[];
};

const PageHeader = ({ actions }: PageHeaderProps) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      PageHeader
    </div>
  );
};

export default PageHeader;
