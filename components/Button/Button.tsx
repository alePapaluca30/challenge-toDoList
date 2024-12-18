import React, { ReactNode } from "react";

const Button = ({
  label,
  icon,
  ...props
}: {
  label: string;
  icon?: ReactNode;
  onClick: () => void;
}) => {
  return (
    <button className="custom-button" {...props}>
      {icon}
      {label}
    </button>
  );
};

export default Button;
