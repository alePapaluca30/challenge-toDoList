import React, { ReactNode } from "react";

const Button = ({
  label,
  icon,
  ...props
}: {
  label: string;
  icon: ReactNode;
}) => {
  return (
    <button className="custom-button" {...props}>
      {icon}
      {label}
    </button>
  );
};

export default Button;
