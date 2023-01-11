import type { ButtonHTMLAttributes } from "react";
import Vector from "./vector.svg";
import styles from "./styles.module.css";

export const Button = ({
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button className={styles.button} type="button" {...props}>
      {children}
      <Vector />
    </button>
  );
};

export default Button;
