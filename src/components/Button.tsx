import React from "react";
import styles from "../style/button.module.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "outlined" | "contained";
  color?: "primary" | "error";
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  variant = "contained",
  color = "primary",
  className,
  children,
  fullWidth,
  ...props
}) => {
  const buttonClass = `
    ${styles.button}
    ${styles[variant]}
    ${styles[color]}
    ${fullWidth ? styles.fullWidth : ""}
    ${className || ""}
  `.trim();

  return (
    <button className={buttonClass} {...props}>
      {children}
    </button>
  );
};

export default Button;
