import type { ComponentProps } from "react";
import styles from "./Button.module.css";

interface Props extends ComponentProps<"button"> {
  variant?: "primary" | "secondary" | "danger" | "ghost";
}

export default function Button({
  variant = "primary",
  className = "",
  type = "button",
  ...props
}: Props) {
  return (
    <button
      {...props}
      type={type}
      className={`${styles.button} ${styles[variant]} ${className}`}
    />
  );
}