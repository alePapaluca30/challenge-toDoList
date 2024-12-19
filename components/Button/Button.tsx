import React, { ReactNode } from "react";

const Button = ({
  label,
  icon,
  classname = "custom-button",
  ...props
}: {
  classname?: string;
  label?: string;
  icon?: ReactNode;
  onClick?: () => void;
}) => {
  return (
    <button className={classname} {...props}>
      {icon}
      <p>{label}</p>
    </button>
  );
};

export default Button;
