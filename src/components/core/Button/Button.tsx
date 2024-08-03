import { ReactNode } from "react";
import { RJPINK } from "@/constants";
import styles from "./Button.module.scss";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  backgroundColor?: string;
  textColor?: string;
}

export const Button = ({
  children,
  onClick = () => {},
  backgroundColor = RJPINK,
  textColor = "#fff",
}: ButtonProps) => {
  return (
    <button
      className={styles["button"]}
      onClick={onClick}
      style={{ color: textColor, backgroundColor: backgroundColor }}
    >
      {children}
    </button>
  );
};
